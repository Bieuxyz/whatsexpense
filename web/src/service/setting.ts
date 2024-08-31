import { baseApi } from "@/constants/axios.ts"
import { Currency, Region } from "@/type/user.ts"

export const getLanguages = async () => {
  const response = await baseApi.get<string[]>("/assets/languages")

  return response.data
}

export const getCurrencies = async () => {
  const response = await baseApi.get<Currency[]>("/assets/currencies")

  return response.data
}

export const getRegions = async () => {
  const response = await baseApi.get<Region[]>("/assets/regions")

  return response.data
}
