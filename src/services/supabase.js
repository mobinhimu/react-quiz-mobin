import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://bdbzyxwgrepmtjhtaczr.supabase.co";
const supabaseKey = import.meta.env.VITE_REACT_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
