import axios from "axios"
import { API_URL } from "@config/servers.config.ts"

export const apiInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json"
  }
})
