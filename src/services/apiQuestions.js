import { supabase } from "./supabase";

export async function apiQuestions(youtubeId) {
  const { data, error } = await supabase
    .from("quiz")
    .select(`questions,answers_id(answers)`)
    .eq("id", youtubeId)
    .single();

  if (error) throw new Error("quiz could not to be found");

  return data;
}
