import { createFileRoute, Link } from "@tanstack/react-router"
import { Avatar } from "@/components/Avatar.tsx"
import { useUser } from "@/fetchHook/user.ts"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import { DeleteAccount } from "@/components/DeleteAccount.tsx"
import { Resize } from "@/components/Resize.tsx"

export const Route = createFileRoute("/setting")({
  component: Index,
})

function Index() {
  const { data: user } = useUser()

  return (
    <Resize
      leftSide={
        <div className="flex flex-col w-full items-center justify-center">
          left
        </div>
      }
      main={
        <div className="p-2">
          <Avatar src="/" />
          <p>{user?.email}</p>
          <div>
            <p className="font-semibold">General</p>
            <div className="divide-y">
              <EditField
                href="/currency"
                label="Currency"
                value={user?.currency}
              />
              <EditField
                href="/language"
                label="Language"
                value={user?.language}
              />
            </div>
          </div>
          <div>
            <p className="font-semibold">Config</p>
            <div className="divide-y">
              <EditField href="/term" label="Term of Service" />
              <EditField href="/region" label="Region" />
              <DeleteAccount />
            </div>
          </div>
        </div>
      }
    />
  )
}

const EditField = ({
  label,
  href,
  value,
}: {
  label: string
  href: string
  value?: string
}) => {
  return (
    <Link to={href} className="flex justify-between px-3 py-1.5 cursor-pointer">
      <label className="text-sm font-medium text-gray-700">{label}</label>
      <span className="flex items-center">
        {value}
        <ChevronRightIcon />
      </span>
    </Link>
  )
}
