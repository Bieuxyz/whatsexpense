import { createFileRoute } from "@tanstack/react-router"
import { useUpdateUser, useUser } from "@/fetchHook/user.ts"
import { useLanguages } from "@/fetchHook/setting.tsx"

export const Route = createFileRoute("/language")({
  component: () => <Page />,
})

const Page = () => {
  const { mutate: update } = useUpdateUser()
  const { data: user } = useUser()
  const { data: languages } = useLanguages()

  console.log(languages)

  return (
    <div>
      <h1>Language</h1>
      <div>{user?.language}</div>
      <button onClick={() => update({ language: "en" })}>en</button>
      <button onClick={() => update({ language: "vi" })}>vi</button>
    </div>
  )
}
