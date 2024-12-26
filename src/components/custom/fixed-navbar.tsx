"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ModeToggle } from "@/components/custom/toggle-theme";
import { Infinity, PackagePlus, MessagesSquare, TrendingUp, LogOut, FolderOpen, FileText, Users, Tag, } from 'lucide-react';

interface NavbarItems {
  label: string;
  href: string;
  badge?: string;
  icon: React.ReactNode;
} 

export const NavbarItems: NavbarItems[] = [
  { label: "Latest Posts", href: "/latest", icon: <FileText size={16} /> },
  { label: "Popular", href: "/popular", icon: <TrendingUp size={16} /> },
  { label: "Discussion", href: "/discussion", badge: "new", icon: <MessagesSquare size={16} /> },
  { label: "Members", href: "/members", icon: <Users size={16} /> },
  { label: "Categories", href: "/categories", icon: <FolderOpen size={16} /> },
  { label: "Tags", href: "/tags", icon: <Tag size={16} /> },
  { label: "Changelog", href: "/changelog", badge: "feature", icon: <PackagePlus size={16} /> },
  { label: "Logout", href: "/logout", icon: <LogOut size={16} /> },
];

export function FixedNavbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar className="flex justify-between" maxWidth="full" onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "close" : "open"} />
        <NavbarBrand className="space-x-2">
          <Infinity size={24} />
          <Link className="font-bold text-inherit uppercase" href="/">Pages</Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem className="flex ml-auto space-x-4">
        <Button className="border rounded-md h-9" variant="light">Login</Button>
          <Button className="hidden sm:block border rounded-md h-9" variant="light">Register</Button>
          <ModeToggle />
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {NavbarItems.map(({ label, href, badge, icon }) => (
          <NavbarMenuItem key={`navbar-item-${label.toLowerCase()}`} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href={href} className="flex items-center gap-2 w-full">{label}</Link>
              { badge ? <Badge variant="outline">{ badge }</Badge> : null }
            </div>
            <span>{icon}</span>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
