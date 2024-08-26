import { createRootRoute, Outlet } from "@tanstack/react-router"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Sidebar } from "@/components/Sidebar"

const queryClient = new QueryClient()

export const Route = createRootRoute({
  component: () => (
    <QueryClientProvider client={queryClient}>
      {/*<Header />*/}
      <div className="flex h-screen w-screen">
        <Sidebar />
        <Outlet />
      </div>
    </QueryClientProvider>
  ),
})
