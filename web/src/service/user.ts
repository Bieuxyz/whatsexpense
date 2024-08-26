import { baseApi } from "@/constants/axios.ts"
import { User } from "@/type/user.ts"

export const getUser = async () => {
  const response = await baseApi.get<User>("/users/me")

  return response.data
}

export const updateUser = async (data: Partial<User>) => {
  const response = await baseApi.patch<User>("/users/me", data)

  return response.data
}

export const deleteAccount = async () => {
  const response = await baseApi.remove("/users/me")

  return response.data
}
