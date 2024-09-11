import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./UserSideBar.module.css";
import { setAuthState, setUserData } from "@/store/features/authSlice";

export default function UserSideBar() {
  const logged = useAppSelector((state) => state.auth.authState);
  const userName = useAppSelector((state) => state.auth.userData);
  const dispatch = useAppDispatch();

  const logout = () => {
    dispatch(setAuthState(false));
    dispatch(setUserData(null));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  };
  return (
    <div className={styles.sidebarPersonal}>
      {logged ? (
        <>
          <p className={styles.sidebarPersonalName}>{userName?.email}</p>

          <div onClick={logout} className={styles.sidebarIcon}>
            <svg>
              <use xlinkHref="img/icon/sprite.svg#logout" />
            </svg>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
