import styles from "./QuestionTitle.module.css";

function QuestionTitle({ title }) {
  return (
    <div className={styles.qtitle}>
      <span className="material-icons-outlined"> help_outline </span>
      {title}
    </div>
  );
}

export default QuestionTitle;
