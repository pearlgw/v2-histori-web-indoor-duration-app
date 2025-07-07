"use client"
import { DashboardSidebar } from "@/components/navigation/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import UserProfile from "@/components/UserProfile";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function DashboardLayout({ children }: { children: React.ReactNode }){
  const [isAdmin,SetIsAdmin] = React.useState(true)
  return (
    <><SessionProvider>
      <SidebarProvider>
      <DashboardSidebar/>

        <div className="flex items-center justify-center">
          <SidebarTrigger className="md:hidden h-full w-10"/>
        </div>
        {children}

      </SidebarProvider>
    </SessionProvider>
    </>
  );
}