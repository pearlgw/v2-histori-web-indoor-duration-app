"use client";
import React from 'react'
import AdminDashboard from '@/components/dashboard/AdminDashboard';
import UserDashboard from '@/components/dashboard/UserDashboard';
import { DashboardSidebar } from "@/components/navigation/DashboardSidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

const page = () => {
  return (
        <AdminDashboard />
  )
}

export default page