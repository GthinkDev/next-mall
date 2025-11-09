"use client";

import * as React from "react";
import { ArrowUpCircleIcon } from "lucide-react";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import NavMall from "./nav/nav-mall";
import { siteConfig } from "@/config/site";
import NavMerchants from "@/components/nav/nav-merchants";
import Dashboard from "@/components/nav/dashboard";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props} variant="floating">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <a href="#">
                <ArrowUpCircleIcon className="h-5 w-5" />
                <span className="text-base font-semibold">Acme Inc.</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
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
