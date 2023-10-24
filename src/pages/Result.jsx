import { useLocation, useNavigate, useParams } from "react-router-dom";
import Analytics from "../features/results/Analytics";
import Summary from "../features/results/Summary";
import { useQuestions } from "../features/quizs/useQuestions";
import Spinner from "../ui/Spinner";
import { scoreCalculation } from "../services/score";

function Result() {
  const navigate = useNavigate();
  const { youtubeId } = useParams();
  const { data, isLoading } = useQuestions();
  const { state: answeredQuestions } = useLocation();

  if (isLoading) return <Spinner />;

  if (!answeredQuestions && data.questions.length !== answeredQuestions?.length)
    return navigate(`/quiz/${youtubeId}`);

  const { answers } = data?.answers_id ?? [];

  // calculate score
  const { totalScore, score, correctCheckedAnswered } = scoreCalculation(
    answers,
    answeredQuestions
  );

  return (
    <>
      <Summary score={score} totalScore={totalScore} />
      <Analytics answered={correctCheckedAnswered} score={score} />
    </>
  );
}

export default Result;
