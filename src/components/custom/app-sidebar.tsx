"use client";

import * as React from "react";
import { Calendar, Home, Inbox, Search, Settings, TrendingUp } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

const items = [
  { title: "Home", url: "#", icon: Home, active: true },
  { title: "Popular", url: "#", icon: TrendingUp },
]

export function AppSidebar() {
  const [active, setActive] = React.useState(0);
  return (
    <Sidebar className="">
      
    </Sidebar>
  )
}