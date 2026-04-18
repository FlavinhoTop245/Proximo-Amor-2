import React, { useState, useEffect, useRef } from 'react';
import { Send, Search, Phone, Video, MoreVertical, Paperclip } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const MOCK_DATA = {
  ong: [
    {
      id: 1,
      name: 'Lucas (Voluntário)',
      avatar: 'LM',
      status: 'Online',
      messages: [
        { id: 1, text: 'Olá! Gostaria de saber mais sobre a vaga de reforço escolar.', sender: 'them', time: '10:00' },
        { id: 2, text: 'Claro Lucas! O que você gostaria de saber? O horário é flexível.', sender: 'me', time: '10:05' }
      ]
    },
    {
      id: 2,
      name: 'Maria Clara',
      avatar: 'MC',
      status: 'Visto por último hoje',
      messages: [
        { id: 1, text: 'Enviei meu currículo, aguardo retorno!', sender: 'them', time: 'Ontem' }
      ]
    }
  ],
  volunteer: [
    {
      id: 1,
      name: 'Instituto Acolher',
      avatar: 'IA',
      status: 'Online',
      messages: [
        { id: 1, text: 'Olá! Vimos seu currículo do bem.', sender: 'them', time: '09:00' },
        { id: 2, text: 'Que ótimo! Estou à disposição para ajudar.', sender: 'me', time: '09:30' }
      ]
    },
    {
      id: 2,
      name: 'Patas Amigas',
      avatar: 'PA',
      status: 'Online',
      messages: [
        { id: 1, text: 'Temos uma vaga urgente para este sábado.', sender: 'them', time: 'Terça' }
      ]
    }
  ]
};

const ChatMessenger = ({ userType = 'volunteer' }) => {
  const [contacts, setContacts] = useState(MOCK_DATA[userType]);
  const [activeChatId, setActiveChatId] = useState(contacts[0].id);
  const [inputText, setInputText] = useState('');
  const historyRef = useRef(null);
  const { t } = useLanguage();

  const activeChat = contacts.find(c => c.id === activeChatId);

  // Auto-scroll para a última mensagem
  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [activeChat?.messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const newMessage = {
      id: Date.now(),
      text: inputText,
      sender: 'me',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    const updatedContacts = contacts.map(c => {
      if (c.id === activeChatId) {
        return { ...c, messages: [...c.messages, newMessage] };
      }
      return c;
    });

    setContacts(updatedContacts);
    setInputText('');

    // Simulador de resposta fantasma da outra pessoa
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        text: 'Nossa equipe recebeu sua mensagem! Logo responderemos.',
        sender: 'them',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setContacts(prev => prev.map(c => {
        if (c.id === activeChatId) {
          return { ...c, messages: [...c.messages, botReply] };
        }
        return c;
      }));
    }, 3000);
  };

  return (
    <div className="chat-container fade-in">
      {/* Sidebar de contatos */}
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
              <div className={`contact-avatar ${userType === 'volunteer' ? 'ong' : ''}`}>
                {c.avatar}
              </div>
              <div className="contact-info">
                <div className="contact-name">{c.name}</div>
                <div className="contact-preview">
                  {c.messages[c.messages.length - 1]?.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Janela de Bate-papo Principal */}
      <div className="chat-main">
        {activeChat ? (
          <>
            <div className="chat-header">
              <div className="chat-header-info">
                <div className={`contact-avatar ${userType === 'volunteer' ? 'ong' : ''}`} style={{ width: 40, height: 40, fontSize: '0.9rem' }}>
                  {activeChat.avatar}
                </div>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--navy-blue)' }}>{activeChat.name}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-gray)' }}>{activeChat.status}</div>
                </div>
              </div>
              <div className="chat-header-actions">
                <Phone size={20} style={{ cursor: 'pointer' }} />
                <Video size={20} style={{ cursor: 'pointer' }} />
                <MoreVertical size={20} style={{ cursor: 'pointer' }} />
              </div>
            </div>

            <div className="chat-history" ref={historyRef}>
              {activeChat.messages.map(msg => (
                <div key={msg.id} className={`chat-msg-wrapper ${msg.sender}`}>
                  <div className={`chat-msg ${msg.sender}`}>
                    {msg.text}
                  </div>
                  <div className="chat-time">{msg.time}</div>
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
