"use client";

import Nav from "@/components/Nav/Nav";
import Search from "@/components/Search/Search";
import Link from "next/link";
import { useEffect } from "react";
import styles from "./error.module.css";

type ErrorType = {
  error: string;
};

export default function Error({ error}: ErrorType) {
  useEffect(() => {
    // Логирование ошибки
    console.error(error);
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div className={styles.mainCenterblock}>
            <Search />
            <div className={styles.center404block}>
              <div className={styles.txt404}>404</div>
              <div className={styles.notFoundBlock}>
                <div className={styles.txtNotFound}>Страница не найдена</div>
                <svg className={styles.smileCrying}>
                  <use xlinkHref="/img/icon/sprite.svg#smile-crying" />
                </svg>
              </div>
              <div className={styles.txtExplanation}>
                Возможно, она была удалена или перенесена на другой адрес
              </div>
              <button className={styles.modalBtnSignupEnt}>
                <Link href="/tracks">Вернуться на главную</Link>
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
