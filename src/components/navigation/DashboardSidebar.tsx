"use client"; // Ensure it's a Client Component

import { usePathname } from "next/navigation";
import { UsersRound, Home, Inbox } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Logo from "../Logo";

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: Home,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: UsersRound,
  },
  {
    title: "History",
    url: "/dashboard/history",
    icon: Inbox,
  },
];

export function DashboardSidebar() {
  const pathname = usePathname(); // Get the current route

  return (
    <Sidebar>
      <SidebarContent className="my-4 mx-4">
        <SidebarGroup>
          <Logo />
          <SidebarGroupLabel className="mt-4 text-md font-semibold text-gray-400">
            Dashboard
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => {
                const isActive = pathname === item.url;

                return (
                  <SidebarMenuItem key={item.title} className="rounded-lg w-auto py-1">
                    <SidebarMenuButton
                      asChild
                      className={`px-1 py-[18px] transition-all ${
                        isActive ? "bg-primary text-white rounded-xl hover:bg-primary hover:text-white" : "hover:bg-[#DBEAFE] hover:text-black hover:rounded-xl"
                      }`}
                    >
                      <a href={item.url}>
                        <div
                          className={`flex items-center justify-center rounded-lg w-7 h-7 border ${
                            isActive ? "bg-white text-primary" : "bg-white text-gray-800 border-gray-300"
                          }`}
                        >
                          <item.icon width={15} height={15} />
                        </div>
                        <span className="ml-2">{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
