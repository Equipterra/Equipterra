"use client"

import * as React from "react"
import { GripVerticalIcon } from "lucide-react"

type ResizableProps = {
  left: React.ReactNode
  right: React.ReactNode
  initial?: number
  className?: string
}

export function Resizable({
  left,
  right,
  initial = 50,
  className,
}: ResizableProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [size, setSize] = React.useState(initial)

  const startDrag = (e: React.MouseEvent) => {
    e.preventDefault()
    const startX = e.clientX
    const container = containerRef.current
    if (!container) return

    const { width } = container.getBoundingClientRect()
    const startWidth = (size / 100) * width

    const onMove = (ev: MouseEvent) => {
      const delta = ev.clientX - startX
      const next = ((startWidth + delta) / width) * 100
      setSize(Math.min(90, Math.max(10, next)))
    }

    const onUp = () => {
      window.removeEventListener("mousemove", onMove)
      window.removeEventListener("mouseup", onUp)
    }

    window.addEventListener("mousemove", onMove)
    window.addEventListener("mouseup", onUp)
  }

  return (
    <div
      ref={containerRef}
      className={`flex w-full h-full select-none ${className ?? ""}`}
    >
      <div style={{ width: `${size}%` }} className="h-full">
        {left}
      </div>

      <div
        onMouseDown={startDrag}
        className="w-2 bg-border hover:bg-muted flex items-center justify-center cursor-col-resize"
      >
        <GripVerticalIcon className="h-4 w-4 text-muted-foreground" />
      </div>

      <div style={{ width: `${100 - size}%` }} className="h-full">
        {right}
      </div>
    </div>
  )
}