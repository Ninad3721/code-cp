import { createClient } from '@supabase/supabase-js'
const supabaseUrl: string = process.env.SUPABASE_URL ?? ''
const supabaseAnonKey: string = process.env.SUPABASE_PUBLIC_KEY ?? ''
const serviceKey: string = process.env.SUPABASE_SERVICE_KEY ?? ''
const supabase = createClient(supabaseUrl, serviceKey)

export default supabase
