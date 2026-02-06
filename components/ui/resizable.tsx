"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"
import {
  Root,
  Panel,
  Handle
} from "react-resizable-panels"

import { cn } from "@/lib/utils"

function ResizablePanelGroup({
  className,
  direction = "horizontal",
  ...props
}: React.ComponentProps<typeof Root>) {
  return (
    <Root
      data-slot="resizable-panel-group"
      direction={direction}
      className={cn(
        "flex h-full w-full data-[direction=vertical]:flex-col",
        className
      )}
      {...props}
    />
  )
}

function ResizablePanel({
  ...props
}: React.ComponentProps<typeof Panel>) {
  return <Panel data-slot="resizable-panel" {...props} />
}

function ResizableHandle({
  withHandle,
  className,
  ...props
}: React.ComponentProps<typeof Handle> & {
  withHandle?: boolean
}) {
  return (
    <Handle
      data-slot="resizable-handle"
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
    </Handle>
  )
}

export { ResizablePanelGroup, ResizablePanel, ResizableHandle }