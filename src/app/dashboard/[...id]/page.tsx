"use client";

import * as React from 'react'
import { useParams } from 'next/navigation';
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from '@/components/custom/app-sidebar';

export default function UserDashboardPage() {
  const params = useParams();
  const id = params.id;
  return (
    <section className="flex min-h-screen px-4">
      test
    </section>
  )
}
