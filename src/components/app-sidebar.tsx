"use client";

import * as React from "react";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
} from "@/components/ui/sidebar";
import NavMall from "./nav/nav-mall";
import { siteConfig } from "@/config/site";
import NavMerchants from "@/components/nav/nav-merchants";
import Dashboard from "@/components/nav/dashboard";
import SideHeader from "@/components/nav/header";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} variant="floating">
      <SideHeader />
      <SidebarContent>
        <Dashboard />
        <NavMall />
        <NavMerchants />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={siteConfig.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
