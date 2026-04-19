import React, { useState, useEffect, useRef } from 'react';
import { Send, Search, Phone, Video, MoreVertical, Paperclip } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useAuth } from '../contexts/AuthContext';
import { supabase } from '../supabase';

const ChatMessenger = ({ userType = 'volunteer' }) => {
  const { profile } = useAuth();
  const [contacts, setContacts] = useState([]);
  const [activeChatId, setActiveChatId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const historyRef = useRef(null);
  const { t } = useLanguage();

  // 1. Carregar contatos (busca perfis que não são o meu)
  useEffect(() => {
    const fetchContacts = async () => {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .neq('id', profile?.id) // Não listar a si mesmo
        .eq('role', userType === 'volunteer' ? 'ong' : 'voluntario'); // Se sou vol, busco ongs

      if (!error) setContacts(data);
    };

    if (profile) fetchContacts();
  }, [profile, userType]);

  // 2. Carregar mensagens quando um chat é selecionado
  useEffect(() => {
    if (!activeChatId || !profile) return;

    const fetchMessages = async () => {
      const { data, error } = await supabase
        .from('messages')
        .select('*')
        .or(`and(sender_id.eq.${profile.id},receiver_id.eq.${activeChatId}),and(sender_id.eq.${activeChatId},receiver_id.eq.${profile.id})`)
        .order('created_at', { ascending: true });

      if (!error) setMessages(data);
    };

    fetchMessages();

    // 3. REALTIME: Escutar novas mensagens ao vivo
    const subscription = supabase
      .channel('messages')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
        const newMessage = payload.new;
        if (
          (newMessage.sender_id === profile.id && newMessage.receiver_id === activeChatId) ||
          (newMessage.sender_id === activeChatId && newMessage.receiver_id === profile.id)
        ) {
          setMessages((prev) => [...prev, newMessage]);
        }
      })
      .subscribe();

    return () => {
      supabase.removeChannel(subscription);
    };
  }, [activeChatId, profile]);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim() || !activeChatId || !profile) return;

    const { error } = await supabase
      .from('messages')
      .insert([
        {
          sender_id: profile.id,
          receiver_id: activeChatId,
          content: inputText
        }
      ]);

    if (!error) setInputText('');
  };

  const activeContact = contacts.find(c => c.id === activeChatId);

  return (
    <div className="chat-container fade-in">
      <div className="chat-sidebar">
        <div className="chat-sidebar-header">
          <h3 style={{ margin: 0, color: 'var(--navy-blue)' }}>{t('chat.title')}</h3>
          <div className="chat-search">
            <Search size={16} color="var(--text-gray)" />
            <input type="text" placeholder={t('chat.searchHolder')} />
          </div>
        </div>
        <div className="contact-list">
          {contacts.map(c => (
            <div 
              key={c.id} 
              className={`contact-item ${activeChatId === c.id ? 'active' : ''}`}
              onClick={() => setActiveChatId(c.id)}
            >
              <div className={`contact-avatar ${c.role === 'ong' ? 'ong' : ''}`}>
                {c.full_name?.substring(0, 2).toUpperCase()}
              </div>
              <div className="contact-info">
                <div className="contact-name">{c.full_name}</div>
                <div className="contact-preview">Causa: {c.cause || 'Nível: 1'}</div>
              </div>
            </div>
          ))}
          {contacts.length === 0 && <p style={{ padding: '1rem', color: 'var(--text-gray)', fontSize: '0.9rem' }}>Nenhum contato encontrado.</p>}
        </div>
      </div>

      <div className="chat-main">
        {activeContact ? (
          <>
            <div className="chat-header">
              <div className="chat-header-info">
                <div className={`contact-avatar ${activeContact.role === 'ong' ? 'ong' : ''}`} style={{ width: 40, height: 40, fontSize: '0.9rem' }}>
                  {activeContact.full_name?.substring(0, 2).toUpperCase()}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--navy-blue)' }}>{activeContact.full_name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>Online</div>
                </div>
              </div>
              <div className="chat-header-actions">
                <Phone size={20} style={{ cursor: 'pointer' }} />
                <Video size={20} style={{ cursor: 'pointer' }} />
                <MoreVertical size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            <div className="chat-history" ref={historyRef}>
              {messages.map(msg => (
                <div key={msg.id} className={`chat-msg-wrapper ${msg.sender_id === profile.id ? 'me' : 'them'}`}>
                  <div className={`chat-msg ${msg.sender_id === profile.id ? 'me' : 'them'}`}>
                    {msg.content}
                  </div>
                  <div className="chat-time">{new Date(msg.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                </div>
              ))}
            </div>

            <div className="chat-input-area">
              <Paperclip size={22} color="var(--text-gray)" style={{ cursor: 'pointer' }} />
              <div className="chat-input-box">
                <input 
                  type="text" 
                  placeholder={t('chat.write')}
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
              </div>
              <button className="chat-send-btn" onClick={handleSend}>
                <Send size={20} />
              </button>
            </div>
          </>
        ) : (
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-gray)' }}>
            {t('chat.empty')}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatMessenger;
