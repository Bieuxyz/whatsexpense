import { createFileRoute } from "@tanstack/react-router"
import { useUpdateUser, useUser } from "@/fetchHook/user.ts"
import { useRegions } from "@/fetchHook/setting.tsx"

export const Route = createFileRoute("/region")({
  component: () => <Page />,
})

const Page = () => {
  const { mutate: update } = useUpdateUser()
  const { data: user } = useUser()
  const { data: regions } = useRegions()

  console.log(regions)

  return (
    <div>
      <h1>Region</h1>
      <div>{user?.regions}</div>
    </div>
  )
}
