import styles from "./UserSideBar.module.css";

export default function UserSideBar() {
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
      <div className={styles.sidebarIcon}>
        <svg>
          <use xlinkHref="img/icon/sprite.svg#logout" />
        </svg>
      </div>
    </div>
  );
}
