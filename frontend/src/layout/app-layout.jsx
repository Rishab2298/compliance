import React from 'react'
import { Outlet } from 'react-router-dom'
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Building2,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
  User,
} from "lucide-react"
import { NavMain } from "@/components/nav-main"
import { NavProjects } from "@/components/nav-projects"
import { NavUser } from "@/components/nav-user"
import { TeamSwitcher } from "@/components/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Smart Upload",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Driver's License",
          url: "/client/smart-upload-driver-license",
        },
        {
          title: "Passports",
          url: "/client/smart-upload-passport",
        },
        
      ],
    },
    {
      title: "Configure",
      url: "/",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "Document Types",
          url: "#",
        },
        {
          title: "Departments",
          url: "#",
        },
        
      ],
    },
    {
      title: "Templates",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Email",
          url: "#",
        },
        {
          title: "SMS",
          url: "#",
        },
        {
          title: "Whatsapp",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
        
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
     
      ],
    },
  ],
  projects: [
    {
      name: "Dashboard",
      url: "/client/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Drivers",
      url: "/client/drivers",
      icon: User,
    },
    {
      name: "Company Compliance",
      url: "/client/compliance",
      icon: Building2,
    },
     {
      name: "Calendar",
      url: "/client/calendar",
      icon: Frame,
    },
    {
      name: "Storage",
      url: "/client/storage",
      icon: PieChart,
    },
    {
      name: "Billing",
      url: "/client/billing",
      icon: Map,
    },
  ],
  
}
const AppLayout = ({ ...props }) => {
  return (
    <>
    
    <div className='w-full h-full flex '>
        <div className='w-fit min-h-full bg-pink-100'>
     <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
           <NavProjects projects={data.projects} />
        <NavMain items={data.navMain} />
       
     
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
        </div>
    <Outlet />
    </div>
    </>
  )
}

export default AppLayout