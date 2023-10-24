import { createPortal } from "react-dom";
import styles from "./SpinnerFullScreen.module.css";

function SpinnerFullScreen({ children }) {
  return createPortal(
    <div className={styles.fullScreen}>{children}</div>,
    document.body
  );
}
export default SpinnerFullScreen;
