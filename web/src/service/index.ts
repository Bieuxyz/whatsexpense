import { baseApi } from "@/constants/axios.ts"

export const signIn = async (email: string, password: string) => {
  const response = await baseApi.post<{
    accessToken: string
    refreshToken: string
  }>("auth/sign-in", {
    email,
    password,
  })

  return response.data
}

export const getTokenByRefreshToken = async (token: string) => {
  const response = await baseApi.get<{
    accessToken: string
    refreshToken: string
  }>("/auth/renew", {
    params: {
      refresh_token: token,
    },
  })

  return response.data
}
