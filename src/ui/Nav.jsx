import { createPortal } from "react-dom";
import styles from "./Nav.module.css";
import NavList from "./NavList";
import NavLogo from "./NavLogo";

function Nav() {
  return createPortal(
    <nav className={styles.nav}>
      <NavLogo />
      <NavList />
    </nav>,
    document.body
  );
}

export default Nav;
