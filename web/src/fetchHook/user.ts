import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { deleteAccount, getUser, updateUser } from "@/service/user.ts"

const userKeys = {
  all: () => ["userKeys"],
  details: () => [...userKeys.all(), "details"],
}

export const useUser = () => {
  return useQuery({
    queryKey: userKeys.details(),
    queryFn: getUser,
    staleTime: 60 * 60 * 5, //5 min
  })
}

export const useUpdateUser = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      queryClient.setQueryData(userKeys.details(), data)
    },
  })
}

export const useDeleteAccount = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: deleteAccount,
    onSuccess: () => {
      queryClient.setQueryData(userKeys.all(), null)
    },
  })
}
