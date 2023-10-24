import Answers from "./Answers";
import QuestionTitle from "./QuestionTitle";
import styles from "./ResultBox.module.css";

function ResultBox({ answered }) {
  return answered.map(({ title, options }) => (
    <div className={styles.resultBox} key={title}>
      <QuestionTitle title={title} />
      <Answers options={options} />
    </div>
  ));
}

export default ResultBox;
