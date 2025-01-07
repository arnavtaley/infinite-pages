
import * as React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/custom/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
        <div className="flex flex-col space-y-2">
          <SidebarTrigger />
          {children}
        </div>
    </SidebarProvider>
  );
}
