import { HOW_MANY_VIDEOS } from "../constants/constant";
import { supabase } from "./supabase";

export async function getVideosInfinite({ pageParam = 1 }) {
  if (!navigator.onLine) return null;

  const from = pageParam === 1 ? 0 : (pageParam - 1) * HOW_MANY_VIDEOS + 1;
  const to = pageParam * HOW_MANY_VIDEOS;

  // CREATING  QUERY
  let query = supabase.from("videos");

  // 1 . GET WHOLE LENGTH OF THE TABLE  , "Because its important to know that how many "
  const { count } = await query.select("*", { count: "exact" });

  const { data, error } = await query.select().range(from, to);

  if (error) throw new Error("Videos Could Not Be Found");

  return { data, count, prevOffset: pageParam };
}
