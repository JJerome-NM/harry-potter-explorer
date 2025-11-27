import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem
} from "@ui-kit/sidebar.tsx"
import type { ReactNode } from "react"
import { Users, WandSparkles } from "lucide-react"
import { Link } from "react-router"
import { routeConfig } from "@config"

type LinkItemOption = {
  label: string
  href: string
  icon?: ReactNode
}

const linkItems: LinkItemOption[] = [
  {
    label: "Characters",
    href: routeConfig.characters.characters(),
    icon: <Users />
  },
  {
    label: "Spells",
    href: routeConfig.spells.spells(),
    icon: <WandSparkles />
  }
]

export const RootSidebar = () => {
  return (
    <Sidebar
      variant="sidebar"
      collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              asChild>
              <a
                href="https://devmood.tech/"
                target="_blank">
                <img
                  src="/logo.png"
                  className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg"
                  alt="DevMood Logo"
                />
                <span className="font-medium">DevMood</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Harry Potter Explorer</SidebarGroupLabel>
          <SidebarMenu>
            {linkItems.map(item => (
              <SidebarMenuItem key={item.href}>
                <SidebarMenuButton
                  key={item.href}
                  asChild>
                  <Link to={item.href}>
                    {item.icon} {item.label}
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
