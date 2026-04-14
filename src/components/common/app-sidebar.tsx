"use client";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  Sidebar,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  useSidebar,
} from "../ui/sidebar";
import {
  Coffee01Icon,
  EllipsisVertical,
  Logout,
} from "@hugeicons/core-free-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AppSidebar() {
  const { isMobile } = useSidebar();

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <div className="font-semibold">
                <div className="p-2 rounded-full bg-amber-500">
                  <HugeiconsIcon icon={Coffee01Icon} />
                </div>
                <p className="text-base">POS Apps</p>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="px-2">
        <SidebarSeparator className="mx-0" />
      </div>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton size={"lg"}>
                  <Avatar className="w-8 h-8 rounded-lg">
                    <AvatarImage src={""} alt="" className="rounded-lg" />
                    <AvatarFallback className="rounded-full">A</AvatarFallback>
                  </Avatar>
                  <div className="leading-tight">
                    <h4 className="font-medium truncate">John Doe</h4>
                    <p className="text-muted-foreground">Admin</p>
                  </div>
                  <HugeiconsIcon
                    icon={EllipsisVertical}
                    className="ml-auto size-4"
                  />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="rounded-lg min-w-56"
                side={isMobile ? "bottom" : "right"}
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div className="flex items-center gap-4 px-1 py-1.5">
                    <Avatar className="w-8 h-8 rounded-lg">
                      <AvatarImage src={""} alt="" className="rounded-lg" />
                      <AvatarFallback className="rounded-full">
                        A
                      </AvatarFallback>
                    </Avatar>
                    <div className="leading-tight">
                      <h4 className="font-medium truncate">John Doe</h4>
                      <p className="text-muted-foreground">Admin</p>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="text-red-500 cursor-pointer">
                    <HugeiconsIcon icon={Logout} />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
