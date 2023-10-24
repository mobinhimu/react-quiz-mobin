import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

import { apiQuestions } from "../../services/apiQuestions";

export function useQuestions() {
  const { youtubeId } = useParams();

  const { data, isLoading, error } = useQuery({
    queryFn: () => apiQuestions(youtubeId),
    queryKey: ["questions", `questionId:${youtubeId}`],
  });

  return { data, isLoading, error };
}
