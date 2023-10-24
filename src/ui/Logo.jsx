import styles from "./Logo.module.css";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo-bg.png";

function Logo() {
  return (
    <Link to="/" className={styles.brand}>
      <img src={logo} alt="Learn With Summit Logo" />
      <h3>Learn with Sumit</h3>
    </Link>
  );
}

export default Logo;
