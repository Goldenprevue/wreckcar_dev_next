import axios from "axios"
import { getCookie } from "./Cookie"

const instance = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${getCookie("access_token")}`,
    "X-Refresh-Token": `Bearer ${getCookie("refresh_token")}`,
    "Cache-Control": "no-cache, no-store, must-revalidate",
  },
})

export const setClientHeaders = (
  access_token: string,
  refresh_token: string
) => {
  instance.interceptors.request.use(async function (config: any) {
    config.headers.Authorization = `Bearer ${access_token}`
    config.headers["X-Refresh-Token"] = `Bearer ${refresh_token}`
    return config
  })
}

export default instance
