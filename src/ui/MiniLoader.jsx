import styles from "./MiniLoader.module.css";

function MiniLoader() {
  return (
    <div className={styles["lds-ring"]}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default MiniLoader;
