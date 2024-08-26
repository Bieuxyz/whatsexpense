import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable.tsx"
import { ElementRef, FC, ReactNode, useEffect, useRef, useState } from "react"
import { PanelGroupProps, PanelProps } from "react-resizable-panels"
import { usePanelCollapse } from "@/store/collapse.ts"

export const Resize: FC<{
  leftSide?: ReactNode
  main: ReactNode
  leftSideProps?: PanelProps
  mainProps?: PanelProps
  groupProps?: PanelGroupProps
}> = ({ leftSide, main, leftSideProps, mainProps, groupProps }) => {
  const isPanelCollapse = usePanelCollapse()
  const ref = useRef<ElementRef<typeof ResizablePanel>>(null)
  const [collapsible, setCollapsible] = useState(true)

  useEffect(() => {
    if (ref.current) {
      isPanelCollapse ? ref.current?.collapse() : ref.current?.expand()
    }
  }, [ref.current, isPanelCollapse])

  return (
    <ResizablePanelGroup direction="horizontal" {...groupProps}>
      <ResizablePanel
        ref={ref}
        maxSize={35}
        minSize={10}
        defaultSize={20}
        {...leftSideProps}
        collapsible={collapsible}
      >
        {leftSide}
      </ResizablePanel>
      <ResizableHandle
        onDragging={(isDragging) =>
          isDragging ? setCollapsible(false) : setCollapsible(true)
        }
      />
      <ResizablePanel {...mainProps}>{main}</ResizablePanel>
    </ResizablePanelGroup>
  )
}
