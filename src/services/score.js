import _ from "lodash";
import { SCORE_PER_QUESTIONS } from "../constants/constant";

export function scoreCalculation(answers = [], answeredQuestions = []) {
  const totalScore = answeredQuestions.length * SCORE_PER_QUESTIONS;
  let score = 0;

  answers.forEach((answer, index1) => {
    let correctIndexes = [],
      checkedIndexes = [];

    answer.options.forEach((option, index2) => {
      if (option.correct) correctIndexes.push(index2);
      if (answeredQuestions[index1].options[index2].checked) {
        checkedIndexes.push(index2);
        option.checked = true;
      }
    });

    if (_.isEqual(correctIndexes, checkedIndexes)) {
      score += SCORE_PER_QUESTIONS;
    }
  });

  return { score, totalScore, correctCheckedAnswered: answers };
}
