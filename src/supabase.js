import { createClient } from '@supabase/supabase-js';

// Estas chaves vêm do arquivo .env.local que você vai processar nas Vercel Environment Variables
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://sua-url-padrao.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'chave-publica-anonima-padrao';

// Cria o cliente de comunicação oficial do Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
