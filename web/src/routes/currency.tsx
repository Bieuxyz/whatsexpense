import { createFileRoute } from "@tanstack/react-router"
import { useUpdateUser, useUser } from "@/fetchHook/user.ts"
import { useCurrencies } from "@/fetchHook/setting.tsx"

export const Route = createFileRoute("/currency")({
  component: () => <Page />,
})

const Page = () => {
  const { mutate: update } = useUpdateUser()
  const { data: user } = useUser()
  const { data: currencies } = useCurrencies()

  return (
    <div>
      <h1>Currency</h1>
      <div>{user?.currency}</div>
      <button onClick={() => update({ currency: "VND" })}>VND</button>
      <button onClick={() => update({ currency: "USD" })}>USD</button>
    </div>
  )
}
