import AppSidebar from "@/components/common/app-sidebar";
import { DarkmodeToggle } from "@/components/common/darkmode-toggle";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { ReactNode } from "react";
import DashboardBreadcrumb from "./_components/dashboard_breadcrumb";
import { TooltipProvider } from "@/components/ui/tooltip";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <TooltipProvider>
        <AppSidebar />
      </TooltipProvider>
      <SidebarInset className="overflow-x-hidden">
        <header className="flex items-center justify-between h-16 gap-2 shrink-0 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="cursor-pointer" size="icon-lg" />
            <Separator
              orientation="vertical"
              className="self-center h-8 mr-2"
            />
            <DashboardBreadcrumb />
          </div>
          <div className="px-4">
            <DarkmodeToggle />
          </div>
        </header>
        <main className="flex flex-col items-start flex-1 gap-4 px-4 py-2">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
