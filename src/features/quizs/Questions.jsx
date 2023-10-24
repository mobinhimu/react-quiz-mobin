import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";
import _ from "lodash";

import { useQuestions } from "./useQuestions";
import Spinner from "../../ui/Spinner";
import Option from "./Option";
import Progress from "../../ui/Progress";

const initialState = null;

function reducer(state, { type, payload }) {
  switch (type) {
    case "questions":
      payload?.questions.forEach((question) => {
        question.options.map((option) => {
          option.checked = false;
          option.id = crypto.randomUUID();
        });
      });
      return payload?.questions;
    case "answers":
      // eslint-disable-next-line no-case-declarations
      const answers = _.cloneDeep(state);
      answers[payload.questionId].options[payload.optionIndex].checked =
        payload.value;
      return answers;

    default:
      return state;
  }
}

function Questions() {
  const [nextQuestion, setNextQuestion] = useState(0);
  const [qna, dispatch] = useReducer(reducer, initialState);
  const { data, isLoading } = useQuestions();

  const navigate = useNavigate();
  const { youtubeId } = useParams();

  useEffect(() => {
    dispatch({
      type: "questions",
      payload: data,
    });
  }, [data]);

  if (isLoading || !qna) return <Spinner />;

  const isSelectQuestion = !qna[nextQuestion].options.some(
    (ques) => ques.checked
  );
  const questionPerPage = qna[nextQuestion];

  function handleAnswers(eve, index) {
    dispatch({
      type: "answers",
      payload: {
        questionId: nextQuestion,
        optionIndex: index,
        value: eve.target.checked,
      },
    });
  }

  function handleSubmit() {
    navigate(`/result/${youtubeId}`, { state: qna, replace: true });
  }

  function handleNextQuestion() {
    if (isSelectQuestion) return;

    setNextQuestion((prevQuestion) => prevQuestion + 1);
  }

  function handlePrevQuestion() {
    setNextQuestion((prevQuestion) => prevQuestion - 1);
  }

  return (
    <>
      <h1>{questionPerPage.title}</h1>
      <h4>Question can have multiple answers</h4>

      <div className="checkBoxContainer">
        {questionPerPage?.options.map(({ title, checked, id }, index) => {
          return (
            <Option
              key={id}
              id={id}
              label={title}
              isChecked={checked}
              onChange={(eve) => handleAnswers(eve, index)}
            />
          );
        })}
      </div>
      <Progress
        handleNextQuestion={handleNextQuestion}
        handlePrevQuestion={handlePrevQuestion}
        questions={qna}
        handleSubmit={handleSubmit}
        nextQuestion={nextQuestion}
      />
    </>
  );
}

export default Questions;
