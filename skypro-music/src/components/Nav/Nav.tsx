"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./Nav.module.css";
import { useState } from "react";

export default function Nav() {
  const [isOpenedMenu, setIsOpenedMenu] = useState<boolean>(false);
  function toggleMenu() {
    setIsOpenedMenu((prev) => !prev);
  }
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
              <a href="#" className={styles.menuLink}>
                Главное
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#" className={styles.menuLink}>
                Мой плейлист
              </a>
            </li>
            <li className={styles.menuItem}>
              <Link href="/signin" className={styles.menuLink}>
                Войти
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
