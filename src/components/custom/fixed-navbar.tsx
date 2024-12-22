"use client";

import * as React from "react";
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
import { Infinity } from 'lucide-react';

interface FixedNavbarProps {
  title: string;
  navbarItems?: { label: string; href: string }[];
}

export function FixedNavbar({ title, navbarItems }: FixedNavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar maxWidth={"full"} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle className="sm:hidden" />
        <NavbarBrand>
          <Infinity size={24} />
          <Link className="font-bold text-inherit uppercase" href="/">{title}</Link>
        </NavbarBrand>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {navbarItems?.map((item, index) => (
          <NavbarItem key={`${item}-${index}`}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarItem>
        ))}
        <Button className="border rounded-md h-9" variant="light">Login</Button>
        <Button className="border rounded-md h-9" variant="light">Register</Button>
        <ModeToggle />
      </NavbarContent>  
      <NavbarMenu>
        {navbarItems?.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link href={item.href}>{item.label}</Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
