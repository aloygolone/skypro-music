"use client";

import Image from "next/image";
import styles from "./signup.module.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { UserType } from "@/types";
import { postRegUser } from "@/api/auth_reg_token";
import { useAppDispatch } from "@/hooks";
import { setUserData } from "@/store/features/authSlice";

type SignupType = {
  email: string;
  username: string;
  password: string;
  password_repeat: string;
};

export default function SignupPage() {
  const dispatch = useAppDispatch();
  const [emailActive, setEmailActive] = useState<boolean>(false);
  const [passwordActive, setPasswordActive] = useState<boolean>(false);
  const [passwordCorrect, setPasswordCorrect] = useState<boolean>(false);
  const [isNotFilled, setIsNotFilled] = useState<boolean>(true);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [loginData, setLoginData] = useState<SignupType>({
    email: "",
    username: "",
    password: "",
    password_repeat: "",
  });

  const hanleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setIsSubmitted(false);
    setIsNotFilled(false);

    if (name === "email") {
      setEmailActive(true);
      if (value === "") {
        setEmailActive(false);
      }
    }

    if (name === "passwordfirst") {
      if (value.length > 7 && /[a-zA-z]/.test(value) && /[0-9]/.test(value)) {
        setPasswordCorrect(true);
      } else {
        setPasswordCorrect(false);
      }
      setPasswordActive(true);

      if (value === "") {
        setPasswordActive(false);
      }
    }

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSignup = async (event: any) => {
    event.preventDefault();
    setIsSubmitted(true);
    if (
      loginData.email === "" ||
      (loginData.password === "" && loginData.password.length < 8) ||
      loginData.password_repeat === ""
    ) {
      setIsNotFilled(true);
      return;
    }
    if (
      loginData.email !== "" &&
      loginData.password === loginData.password_repeat
    ) {
      setIsNotFilled(false);
      console.log(loginData);
      await postRegUser(loginData)
        .then((data) => {
          dispatch(setUserData({ username: data.username, email: data.email }));
          console.log(data);
        })
        .catch((error) => {
          alert(error);
        });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <Link href="/">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            <input
              onChange={hanleInputChange}
              className={styles.modalInput}
              type="email"
              name="email"
              placeholder="Почта"
            />
            {emailActive ? (
              <div className={styles.emailExample}>
                Пример: ivan_ivanov@mail.ru
              </div>
            ) : (
              ""
            )}
            <input
              onChange={hanleInputChange}
              className={styles.modalInput}
              type="password"
              name="passwordfirst"
              placeholder="Пароль"
            />
            {passwordActive ? (
              <div
                className={classNames(
                  { [styles.passwordClueRed]: !passwordCorrect },
                  { [styles.passwordClueGreen]: passwordCorrect }
                )}
              >
                Минимум 8 символов из букв латиницей и цифр
              </div>
            ) : (
              ""
            )}
            <input
              className={styles.modalInput}
              type="password"
              name="passwordrepeat"
              placeholder="Повторите пароль"
            />
            <button onClick={handleSignup} className={styles.modalBtnSignupEnt}>
              {isNotFilled ? (
                <a>Зарегистрироваться</a>
              ) : (
                <Link href="/signin">Зарегистрироваться</Link>
              )}
            </button>
            {isNotFilled && isSubmitted ? (
              <div className={styles.notFilled}>Нужно заполнить все поля</div>
            ) : (
              ""
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
