import { Link } from "react-router-dom";
import styles from "./Info.module.css";

function Info({ infoFor = "signup" }) {
  if (infoFor === "signup")
    return (
      <div className={styles.info}>
        Already have an account? <Link to="/login">Login</Link> instead.
      </div>
    );

  if (infoFor === "login")
    return (
      <div className={styles.info}>
        Don&apos;t have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    );
}

export default Info;
