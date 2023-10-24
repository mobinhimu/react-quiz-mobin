import { SCORE_PER_QUESTIONS } from "../../constants/constant";
import styles from "./Analytics.module.css";
import ResultBox from "./ResultBox";

function Analytics({ answered, score }) {
  return (
    <div className={styles.analytics}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {score / SCORE_PER_QUESTIONS} out of {answered.length}{" "}
        questions correctly
      </h4>
      <ResultBox answered={answered} />
    </div>
  );
}

export default Analytics;
