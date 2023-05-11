import CallApi from "../../configs/api";

const ROOT_API = https://monumental-blini-4583b8.netlify.app/;
const API = "api/v1";

export async function register(data) {
  const url = `${ROOT_API}/${API}/auth/register`;
  return CallApi({ url, method: "POST", data });
}

export async function login(data) {
  const url = `${ROOT_API}/${API}/auth/login`;
  return CallApi({ url, method: "POST", data });
}

export async function ubahPassword(id, data) {
  const url = `${ROOT_API}/${API}/auth/ubah-password/${id}`;
  return CallApi({ url, method: "PUT", token: true, data });
}
