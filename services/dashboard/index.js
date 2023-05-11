import CallApi from "../../configs/api";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API = "https://monumental-blini-4583b8.netlify.app/";

export async function getAll(token) {
  const url = `${ROOT_API}/${API}/dashboard/get-all`;
  return CallApi({ url, method: "GET", serverToken: token });
}
