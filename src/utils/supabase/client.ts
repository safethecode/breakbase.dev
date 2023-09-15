import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ldlfdaearivcsohyqwfx.supabase.co';

const supabaseKey = process.env.SUPABASE_PROJECT_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey as string);
