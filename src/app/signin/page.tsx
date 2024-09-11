"use client";

import Link from "next/link";
import styles from "./signin.module.css";
import Image from "next/image";
import classNames from "classnames";
import { useAppDispatch } from "@/hooks";
import { useState } from "react";
import { postAuthUser, postToken } from "@/api/auth_reg_token";
import { setAuthState, setUserData } from "@/store/features/authSlice";
import { useRouter } from "next/navigation";

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

  const router = useRouter();

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
        dispatch(setAuthState(true));
        dispatch(
          setUserData({
            username: data.username,
            email: data.email,
            id: data._id,
          })
        );

        localStorage.setItem("user", JSON.stringify(data));
        postToken(loginData).then((data) => {
          localStorage.setItem("token", JSON.stringify(data.access));
          dispatch(setUserData({ refresh: data.refresh, access: data.access }));
          router.push("/");
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
              <a>Войти</a>
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
