import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "../helpers/consts";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey
)