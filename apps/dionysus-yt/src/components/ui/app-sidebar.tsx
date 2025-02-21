'use client'

import {
  Bot,
  CreditCard,
  LayoutDashboard,
  Plus,
  Presentation,
} from 'lucide-react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from './sidebar'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'
import { Button } from './button'
import Image from 'next/image'

const APPLICATION_MENUS = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    url: '/dashboard',
  },
  {
    title: 'Q&A',
    icon: Bot,
    url: '/qa',
  },
  {
    title: 'Meetings',
    icon: Presentation,
    url: '/meetings',
  },
  {
    title: 'Billing',
    icon: CreditCard,
    url: '/billing',
  },
]

const MOCKED_PROJECTS = [
  {
    name: 'Project 1',
  },
  {
    name: 'Project 2',
  },
  {
    name: 'Project 3',
  },
]

const AppSidebar = () => {
  const pathname = usePathname()
  const { open } = useSidebar()

  return (
    <Sidebar collapsible="icon" variant="floating">
      <SidebarHeader>
        <div className="flex gap-3 items-center">
          <Image src="/jira.png" alt="jira logo" width={32} height={32} />
          {open && (
            <h1 className="text-xl font-bold text-primary/80">Dionysus</h1>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {APPLICATION_MENUS.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link
                      href={item.url}
                      className={cn({
                        '!bg-primary !text-white': pathname === item.url,
                      })}
                    >
                      <item.icon></item.icon>
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Your Projects</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {MOCKED_PROJECTS.map((project) => (
                <SidebarMenuItem key={project.name}>
                  <SidebarMenuButton asChild>
                    <div>
                      <div
                        className={cn(
                          'rounded-sm border size-6 flex items-center justify-center text-center bg-white text-primary',
                          {
                            'bg-primary text-white': false,
                          },
                        )}
                      >
                        {project.name[0]}
                      </div>
                      <span>{project.name}</span>
                    </div>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <div className="h-2" />
              {open && (
                <SidebarMenuItem>
                  <Link href="/create">
                    <Button variant="outline" size="sm">
                      <Plus />
                      <span>Create Project</span>
                    </Button>
                  </Link>
                </SidebarMenuItem>
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}

export default AppSidebar
