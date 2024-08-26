import { useQuery } from "@tanstack/react-query"
import { getCurrencies, getLanguages, getRegions } from "@/service/setting.ts"

export const useLanguages = () => {
  return useQuery({
    queryKey: ["languages"],
    queryFn: getLanguages,
    staleTime: Infinity,
  })
}

export const useCurrencies = () => {
  return useQuery({
    queryKey: ["currencies"],
    queryFn: getCurrencies,
    staleTime: Infinity,
  })
}

export const useRegions = () => {
  return useQuery({
    queryKey: ["regions"],
    queryFn: getRegions,
    staleTime: Infinity,
  })
}
