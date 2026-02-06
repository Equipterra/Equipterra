"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import {
  PanelGroup,
  Panel,
  PanelResizeHandle
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  direction = "horizontal",
  ...props
}: React.ComponentProps<typeof PanelGroup>) {
  return (
    <PanelGroup
      direction={direction}
      className={cn(
        "flex h-full w-full data-[direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel(props: React.ComponentProps<typeof Panel>) {
  return <Panel {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof PanelResizeHandle> & {
  withHandle?: boolean
}) {
  return (
    <PanelResizeHandle
      className={cn(
        "bg-border relative flex w-px items-center justify-center data-[direction=vertical]:h-px data-[direction=vertical]:w-full",
        className
      )}
      {...props}
    >
      {withHandle && (
        <div className="bg-border z-10 flex h-4 w-3 items-center justify-center rounded-xs border">
          <GripVerticalIcon className="size-2.5" />
        </div>
      )}
    </PanelResizeHandle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }