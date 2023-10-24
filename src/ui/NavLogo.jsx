import styles from "./NavLogo.module.css";
import Logo from "./Logo";

function NavLogo() {
  return (
    <ul className={styles.ul}>
      <li>
        <Logo />
      </li>
    </ul>
  );
}

export default NavLogo;
