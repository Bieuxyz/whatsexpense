import { useLocation, useRouter } from "@tanstack/react-router"

export function Header() {
  const { pathname } = useLocation()
  const router = useRouter()
  const onBack = () => router.history.back()

  return (
    <div className="shadow">
      {pathname === "/chat" ? (
        <span>chat</span>
      ) : (
        <div onClick={onBack}>back</div>
      )}
    </div>
  )
}
