import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";

import Button from "./Button";
import styles from "./Progress.module.css";
import { useEffect, useRef, useState } from "react";

function Progress({
  nextQuestion,
  handleNextQuestion,
  handlePrevQuestion,
  questions = [],
  handleSubmit,
}) {
  const [perCentageOfQuestions, setPerCentageOfQuestions] = useState(0);
  const progress = useRef(null);
  const tooltip = useRef(null);

  useEffect(() => {
    // Updating The State
    setPerCentageOfQuestions(((nextQuestion + 1) / questions.length) * 100);

    //DOM Manipulation
    progress.current.style.width = `${perCentageOfQuestions}%`;
    tooltip.current.style.left = `calc(${perCentageOfQuestions + "% - 60px"})`;
  }, [questions, nextQuestion, perCentageOfQuestions]);

  const hasMore = questions.length - 1 !== nextQuestion;

  return (
    <div className={styles.progressBar}>
      <Button
        className={styles.backButton}
        onClick={handlePrevQuestion}
        disabled={nextQuestion === 0}
      >
        <span>
          <HiArrowLeft />
        </span>
      </Button>
      <div className={styles.rangeArea}>
        <div ref={tooltip} className={styles.tooltip}>
          {perCentageOfQuestions}% Completed!
        </div>
        <div className={styles.rangeBody}>
          <div
            ref={progress}
            className={styles.progress}
            style={{ width: "20%" }}
          ></div>
        </div>
      </div>

      {hasMore && (
        <Button className={`${styles.next}`} onClick={handleNextQuestion}>
          <span>Next Question</span>
          <HiArrowRight />
        </Button>
      )}

      {!hasMore && (
        <Button className={`${styles.next}`} onClick={handleSubmit}>
          <span>Submit Quiz</span>
          <span className={styles.icon}>
            <HiArrowRight />
          </span>
        </Button>
      )}
    </div>
  );
}

export default Progress;
