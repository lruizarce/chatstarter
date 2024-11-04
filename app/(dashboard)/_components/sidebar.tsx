"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { SignOutButton } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { PlusIcon, User2Icon } from "lucide-react";
import Link from "next/link";
import { api } from "../../../convex/_generated/api";
import { NewDirectMessage } from "./new-direct-message";
import { usePathname } from "next/navigation";

const useTestDirectMessage = () => {
  const user = useQuery(api.functions.dm.list);
  if (!user) {
    return [];
  }
  return [user, user, user];
};

export function DashboardSidebar() {
  const user = useQuery(api.functions.user.get);
  const directMessage = useQuery(api.functions.dm.)
  const pathname = usePathname();
  if (!user) {
    return null;
  }

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuButton asChild isActive={pathname === "/friends"}>
                <Link href="/friends">
                  <User2Icon />
                  Friends
                </Link>
              </SidebarMenuButton>
            </SidebarMenu>
          </SidebarGroupContent>
          <SidebarGroup>
            <SidebarGroupLabel>Direct Messages</SidebarGroupLabel>
            <NewDirectMessage />
            <SidebarGroupContent>
              <SidebarMenu>
                {directMessage?.map((directMessage) => (
                  <SidebarMenuItem key={directMessage._id}>
                    <SidebarMenuButton
                      asChild
                      isActive={pathname === `/dms/${directMessage._id}`}
                    >
                      <Link href={`/dms/${directMessage._id}`}>
                        <Avatar className="size-6">
                          <AvatarImage src={directMessage.user.image} />
                          <AvatarFallback>
                            {directMessage.username[0]}
                          </AvatarFallback>
                        </Avatar>
                        <p className="'font-medium">{directMessage.user.username}</p>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarFooter>
            <SidebarGroup>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <SidebarMenuButton className="flex items-center">
                          <Avatar className="size-6">
                            <AvatarImage src={user.image} />
                            <AvatarFallback>{user.username[0]}</AvatarFallback>
                          </Avatar>
                        </SidebarMenuButton>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent>
                        <DropdownMenuItem asChild>
                          <SignOutButton />
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarFooter>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
