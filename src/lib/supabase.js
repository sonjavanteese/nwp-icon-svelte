// import {createClient} from '@supabase/supabase-js'

// const supabase = createClient(
//   import.meta.env.VITE_SUPABASE_URL,
//   import.meta.env.VITE_SUPABASE_ANON_KEY
// )


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xfcfjwsobkcneeqbvijr.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY
const supabase = createClient(supabaseUrl, supabaseKey)



export {supabase}

// export default supabase

// export { supabase, userObj, userData } from '../routes/user/supabase'