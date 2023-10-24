import { Outlet } from "react-router-dom";

import styles from "./AppLayout.module.css";
import Nav from "./Nav";

function AppLayout() {
  return (
    <>
      <Nav />
      <main className={styles.main}>
        <div className={styles.container}>
          <Outlet />
        </div>
      </main>
    </>
  );
}

export default AppLayout;
