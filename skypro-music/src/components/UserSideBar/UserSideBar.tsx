import { useAppSelector } from "@/hooks";
import styles from "./UserSideBar.module.css";

export default function UserSideBar() {
  const logged = useAppSelector((state) => state.auth.authState);
  const userName = useAppSelector((state) => state.auth.userData.email);
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{userName}</p>
      {logged ? (
        <div className={styles.sidebarIcon}>
          <svg>
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
