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

interface FixedNavbarProps { title: string; }
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

export function FixedNavbar({ title }: FixedNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar maxWidth={"full"} onMenuOpenChange={setIsMenuOpen} isBordered>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" aria-label={isMenuOpen ? "close" : "open"} />
        <NavbarBrand>
          <Infinity size={24} />
          <Link className="font-bold text-inherit uppercase" href="/">{title}</Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem className="space-x-4">
            {NavbarItems.filter(item => ["Popular", "Changelog", "Discussion"].includes(item.label)).map(({ label, href }) => (
            <Link className="hover:underline" key={`navbar-item-${label.toLowerCase()}`} href={href}>{label}</Link>
            ))}
        </NavbarItem>
      </NavbarContent>  
      <NavbarContent className="sm:flex gap-4" justify="end">
        <Button className="border rounded-md h-9" variant="light">Login</Button>
        <Button className="hidden sm:block border rounded-md h-9" variant="light">Register</Button>
        <ModeToggle />
      </NavbarContent>
      <NavbarMenu className="py-2">
        {NavbarItems.map(({ label, href, badge, icon }) => (
          <NavbarMenuItem key={`navbar-item-${label.toLowerCase()}`} className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Link href={href} className="flex items-center gap-2 w-full">{label}</Link>
              {badge ? <Badge variant="outline">{badge}</Badge> : null}
            </div>
            <span>{icon}</span>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
