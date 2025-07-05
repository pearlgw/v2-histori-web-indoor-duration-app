"use client"
import { DashboardSidebar } from "@/components/navigation/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }){
  const [isAdmin,SetIsAdmin] = React.useState(true)
  return (
    <>
      <SidebarProvider>
      <DashboardSidebar/>

        <div className="flex items-center justify-center">
          <SidebarTrigger className="md:hidden h-full w-10"/>
        </div>
        {children}

      </SidebarProvider>
    </>
  );
}