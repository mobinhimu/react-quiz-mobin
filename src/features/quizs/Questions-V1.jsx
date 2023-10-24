import { useQuestions } from "./useQuestions";
import Spinner from "../../ui/Spinner";
import Option from "./Option";
import Progress from "../../ui/Progress";
import { useState } from "react";

function Questions() {
  const [nextQuestion, setNextQuestion] = useState(0);

  const { data, isLoading } = useQuestions();

  if (isLoading) return <Spinner />;

  const { questions } = data;

  const questionPerPage = questions[nextQuestion];

  return (
    <>
      <h1>{questionPerPage.title}</h1>
      <h4>Question can have multiple answers</h4>

      <div className="checkBoxContainer">
        {questionPerPage.options.map(({ title }) => {
          return <Option key={crypto.randomUUID()} id={title} label={title} />;
        })}
      </div>
      <Progress
        setNextQuestion={setNextQuestion}
        questions={questions}
        nextQuestion={nextQuestion}
      />
    </>
  );
}

export default Questions;
