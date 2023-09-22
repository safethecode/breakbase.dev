import { supabase } from '@/utils/supabase';

export async function GET() {
  const { count } = await supabase
    .from('subscribe_users')
    .select('*', { count: 'exact' });

  return new Response(
    JSON.stringify({
      count: count,
    }),
    {
      status: 200,
    },
  );
}
