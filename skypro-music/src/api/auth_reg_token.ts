import { UserType } from "@/types";

const apiUrlUser = "https://skypro-music-api.skyeng.tech/user/";

const signup = "signup";
const login = "login";
const token = "token";
const tokenRefresh = "token/refresh";

type SignupType = {
  email: string;
  username: string;
  password: string;
};

type SigninType = {
  email: string;
  password: string;
};

//Зарегистрироваться

export async function postRegUser({ email, password }: SignupType) {
  const res = await fetch(apiUrlUser + signup, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: email,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка");
  }
  const data = await res.json();
  console.log(data);
  return data;
}

//Войти

export async function postAuthUser({ email, password }: SigninType) {
  const res = await fetch(apiUrlUser + login, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка");
  }
  const data = await res.json();
  return data;
}

//Получить токен

export async function postToken({ email, password }: SigninType) {
  const res = await fetch(apiUrlUser + token, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const data = await res.json();
  return data;
}

//Обновить токен

export async function postRefreshToken({ refresh }: UserType) {
  const res = await fetch(apiUrlUser + tokenRefresh, {
    method: "POST",
    body: JSON.stringify({
      refresh: refresh,
    }),
    headers: {
      "content-type": "application/json",
    },
  });
  if (!res.ok) {
    throw new Error("Ошибка при получении данных");
  }
  const data = await res.json();
  return data;
}
