import Button from "./Button";
import styles from "./Fallback.module.css";

function Fallback({ error, resetErrorBoundary }) {
  return (
    <div className={styles.fallbackContainer}>
      <h1>Something went wrong 🧐</h1>
      <p>{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try Again</Button>
    </div>
  );
}

export default Fallback;
