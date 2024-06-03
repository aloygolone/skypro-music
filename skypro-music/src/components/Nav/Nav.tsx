"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setAuthState, setUserData } from "@/store/features/authSlice";

export default function Nav() {
  const logged = useAppSelector((state) => state.auth.authState);
  const dispatch = useAppDispatch();
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
  function toggleMenu() {
    setIsOpenedMenu((prev) => !prev);
  }

  const logout = () => {
    dispatch(setAuthState(false));
    dispatch(setUserData({ email: "", username: "", refresh: "", access: "" }));
  };
  return (
    <nav className={styles.mainNav}>
      <div className={styles.navLogo}>
        <Link href="/">
          <Image
            alt="логотип скайпро музыка"
            className={styles.logoImage}
            src="/img/logo.png"
            width={113}
            height={17}
          />
        </Link>
      </div>
      <div onClick={toggleMenu} className={styles.navBurger}>
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
        <span className={styles.burgerLine} />
      </div>
      {isOpenedMenu && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <Link href="/" className={styles.menuLink}>
                Главное
              </Link>
            </li>
            <li className={styles.menuItem}>
              <Link href="/tracks/favorite" className={styles.menuLink}>
                Мой плейлист
              </Link>
            </li>
            <li className={styles.menuItem}>
              {logged ? (
                <Link onClick={logout} href="/" className={styles.menuLink}>
                  Выйти
                </Link>
              ) : (
                <Link href="/signin" className={styles.menuLink}>
                  Войти
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
