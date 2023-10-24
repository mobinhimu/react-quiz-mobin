import styles from "./Answer.module.css";

function Answer({ title, checked, correct }) {
  return (
    <label
      className={`option ${
        correct ? styles.correct : checked ? styles.wrong : null
      }`}
      htmlFor={title}
    >
      {title}
    </label>
  );
}

export default Answer;
