import { Outlet } from "react-router-dom";
import styles from "./Layout.module.css";
import { Nav } from "../Nav/Nav";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.icon}>T</div>
      <header className={styles.header}>
        <h1>Tournament Manager</h1>
      </header>
      <main className={styles.main}>
        <Outlet />
      </main>

      <nav className={styles.nav}>
        <Nav />
      </nav>
    </div>
  );
};
