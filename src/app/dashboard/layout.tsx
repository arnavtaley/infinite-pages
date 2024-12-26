
import * as React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/app-sidebar";
import { ResponsiveMenubar } from "@/components/custom/responsive-menubar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        <div className="flex flex-col space-y-2">
          <ResponsiveMenubar>
            <SidebarTrigger />
          </ResponsiveMenubar>
          {children}
        </div>
    </SidebarProvider>
  );
}
