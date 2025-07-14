import { router, type IRouteHandle } from "./routes";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const mainRoutes = router.routes[0]?.children || [];

  return (
    <ul className={styles.navList}>
      {mainRoutes.map((route) => {
        const handle: IRouteHandle = route.handle;
        if (!handle) return null;

        return (
          <li key={route.path} title={handle.title} className={styles.navItem}>
            <NavLink to={route.path as string} className={styles.navLink}>
              {handle.icon}
              <span className={styles.navText}>{handle.title}</span>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
