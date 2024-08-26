import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/term-of-service")({
  component: () => <div>Hello /term!</div>,
})
