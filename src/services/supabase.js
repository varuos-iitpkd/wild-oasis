import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://exgjeqpijahygyklxqur.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV4Z2plcXBpamFoeWd5a2x4cXVyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzUzMjQyNjAsImV4cCI6MjA1MDkwMDI2MH0.DVrSp7D-rnwsc7IxjYgTajv0G1MqOEhYsQuAF1NDs2s";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
