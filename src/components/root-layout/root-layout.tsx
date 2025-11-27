import { Outlet } from "react-router"
import { SidebarProvider } from "@ui-kit/sidebar.tsx"
import { RootSidebar } from "../root-sidebar/root-sidebar.tsx"

export const RootLayout = () => {
  return (
    <SidebarProvider>
      <RootSidebar />
      <Outlet />
    </SidebarProvider>
  )
}
