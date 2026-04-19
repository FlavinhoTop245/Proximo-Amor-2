import { createClient } from '@supabase/supabase-js';

// Estas chaves vêm do arquivo .env.local que você vai processar
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Cria o cliente de comunicação oficial do Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
