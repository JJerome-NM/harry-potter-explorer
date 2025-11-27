import { Outlet } from "react-router"
import { SidebarProvider } from "@ui-kit/sidebar.tsx"
import { RootSidebar } from "@components"

export const RootLayout = () => {
  return (
    <SidebarProvider>
      <RootSidebar />
      <Outlet />
    </SidebarProvider>
  )
}
