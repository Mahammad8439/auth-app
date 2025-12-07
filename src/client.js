
import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://danapnwqbrlgtpdrkkhp.supabase.co'
const supabaseKey = 'sb_publishable_FLSh324AAEgc70dJMhY8eQ_V_4uXwCg'
export const supabase = createClient(supabaseUrl, supabaseKey)