'use client'

import Link from "next/link";
import styles from "./signin.module.css";
import Image from "next/image";
import classNames from "classnames";
import { useAppDispatch } from "@/hooks";
import { useState } from "react";
import { postAuthUser, postToken } from "@/api/auth_reg_token";
import { setUserData } from "@/store/features/authSlice";

type SigninType = {
  email: string;
  password: string;
};

export default function SigninPage() {
  const dispatch = useAppDispatch();
  const [loginData, setLoginData] = useState<SigninType>({
    email: "",
    password: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignin = async () => {
    await postAuthUser(loginData)
      .then((data) => {
        dispatch(setUserData({ username: data.username, email: data.email }));
        postToken(loginData).then((data) => {
          dispatch(setUserData({ refresh: data.refresh, access: data.access }));
        });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="логотип"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            <input
              onChange={handleInputChange}
              className={classNames(styles.modalInput, styles.login)}
              type="text"
              name="email"
              placeholder="Почта"
            />
            <input
              onChange={handleInputChange}
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
            />
            <button onClick={handleSignin} className={styles.modalBtnEnter}>
              <Link href="/">Войти</Link>
            </button>
            <button className={styles.modalBtnSignup}>
              <Link href="/signup">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
