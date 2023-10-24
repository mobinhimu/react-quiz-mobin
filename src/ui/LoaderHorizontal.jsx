import styles from "./LoaderHorizontal.module.css";

function LoaderHorizontal() {
  return (
    <div className={styles.loaderCenter}>
      <div className={styles["lds-ellipsis"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoaderHorizontal;
