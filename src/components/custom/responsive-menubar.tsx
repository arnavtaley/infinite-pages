"use client"

import * as React from "react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface BreadcrumbItem {
  href?: string
  label: string
  active?: boolean
}

interface ResponsiveMenubarProps {
  className?: string
  children?: React.ReactNode
}

const BreadcrumbNavigation: BreadcrumbItem[] = [
  { href: "/", label: "Home" },
  { href: "/example", label: "Example" },
  { href: "/test", label: "Test" },
  { label: "Current", active: true }
]

const ITEMS_TO_DISPLAY = 3

export function ResponsiveMenubar({ className, children }: ResponsiveMenubarProps) {
  const [open, setOpen] = React.useState(false)
  const isMobile = useIsMobile()

  return (
    <div className={`
      sticky top-0 
      flex h-10 items-center 
      space-x-2 border-b 
      bg-background/60 px-2 
      backdrop-blur
      ${className}
    `}>
      {children}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href={BreadcrumbNavigation[0].href}>
              {BreadcrumbNavigation[0].label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          {BreadcrumbNavigation.length > ITEMS_TO_DISPLAY && (
            <>
              <BreadcrumbItem>
                {!isMobile ? (
                  <DropdownMenu open={open} onOpenChange={setOpen}>
                    <DropdownMenuTrigger 
                      className="flex items-center gap-1"
                      aria-label="Show more navigation items"
                    >
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      {BreadcrumbNavigation.slice(1, -2).map((item, index) => (
                        <DropdownMenuItem key={index}>
                          <Link href={item.href ?? "#"}>{item.label}</Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Drawer open={open} onOpenChange={setOpen}>
                    <DrawerTrigger aria-label="Show navigation menu">
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader className="text-left">
                        <DrawerTitle>Navigation</DrawerTitle>
                        <DrawerDescription>
                          Select a page to navigate to
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="grid gap-1 px-4">
                        {BreadcrumbNavigation.slice(1, -2).map((item, index) => (
                          <Link
                            key={index}
                            href={item.href ?? "#"}
                            className="py-1 text-sm hover:underline"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                      <DrawerFooter className="pt-2">
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                )}
              </BreadcrumbItem>
              <BreadcrumbSeparator />
            </>
          )}
          {BreadcrumbNavigation.slice(-ITEMS_TO_DISPLAY + 1).map((item, index) => (
            <BreadcrumbItem key={index}>
              {!item.active ? (
                <>
                  <BreadcrumbLink 
                    asChild 
                    className="max-w-[120px] truncate md:max-w-[200px]"
                  >
                    <Link href={item.href ?? "#"}>{item.label}</Link>
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              ) : (
                <BreadcrumbPage className="max-w-[120px] truncate md:max-w-[200px]">
                  {item.label}
                </BreadcrumbPage>
              )}
            </BreadcrumbItem>
          ))}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}