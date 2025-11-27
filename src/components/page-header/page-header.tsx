import { SidebarTrigger } from "@ui-kit/sidebar.tsx"
import { Separator } from "@ui-kit/separator.tsx"
import type { PropsWithChildren } from "react"

export const PageHeader = ({ children }: PropsWithChildren) => {
  return (
    <header className="flex sticky top-0 z-10 bg-background h-16 shrink-0 items-center gap-2 border-b px-4">
      <SidebarTrigger />
      <Separator
        orientation="vertical"
        className="m-2 data-[orientation=vertical]:h-6"
      />
      {children}
    </header>
  )
}
