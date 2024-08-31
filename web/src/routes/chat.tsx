import { createFileRoute } from "@tanstack/react-router"
import { ChatComposer } from "@/components/ChatComposer.tsx"
import { ChatSection } from "@/components/ChatSection.tsx"
import { Resize } from "@/components/Resize.tsx"

export const Route = createFileRoute("/chat")({
  component: () => <Page />,
})

const Page = () => {
  return (
    <Resize
      leftSide={
        <div className="flex flex-col w-full items-center justify-center">
          left
        </div>
      }
      main={
        <div className="relative flex flex-col w-full items-center justify-center">
          <ChatSection />
          <ChatComposer />
        </div>
      }
    />
  )
  // return (
  //   <div className="relative flex flex-col w-full items-center justify-center">
  //     <ChatSection />
  //     <ChatComposer />
  //   </div>
  // )
}
