import styles from "./ButtonIcon.module.css";
function ButtonIcon({ children, onClick, disabled }) {
  return (
    <button className={styles.buttonIcon} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default ButtonIcon;
