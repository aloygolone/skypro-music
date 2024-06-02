import { UserType } from "@/types";

const apiUrlUser = "https://skypro-music-api.skyeng.tech/user/";

const signup = "signup";
const login = "login";
const token = "token";
const tokenRefresh = "token/refresh";

//Зарегистрироваться

export async function postRegUser({ email, password, username }: UserType) {
  await fetch(apiUrlUser + signup, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
      username: username,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Войти

export async function postAuthUser({ email, password }: UserType) {
  await fetch(apiUrlUser + login, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Получить токен

export async function postToken({ email, password }: UserType) {
  await fetch(apiUrlUser + token, {
    method: "POST",
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//Обновить токен

export async function postRefreshToken({refresh}: UserType) {
  fetch(apiUrlUser + tokenRefresh, {
    method: "POST",
    body: JSON.stringify({
      refresh: refresh,
    }),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
