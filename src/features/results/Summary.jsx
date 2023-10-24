import styles from "./Summary.module.css";
import illustration from "../../assets/images/success.png";

function Summary({ score, totalScore }) {
  return (
    <div className={styles.summary}>
      <div className={styles.point}>
        <p className={styles.score}>
          Your score is <br />
          {score} out of {totalScore}
        </p>
      </div>

      <div className={styles.badge}>
        <img src={illustration} alt="Success" />
      </div>
    </div>
  );
}

export default Summary;
