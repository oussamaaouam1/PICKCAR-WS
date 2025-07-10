"use client";
import { usePathname } from "next/navigation";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "./ui/sidebar";
import {
  Car,
  CarFrontIcon,
  FileText,
  Heart,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

const AppSidebar = ({ userType }: AppSidebarProps) => {
  const pathname = usePathname();
  const { toggleSidebar, open } = useSidebar();

  const navLinks =
    userType === "manager"
      ? [
          { icon: CarFrontIcon, label: "Cars", href: "/managers/cars" },
          {
            icon: FileText,
            label: "Application",
            href: "/managers/applications",
          },
          { icon: Settings, label: "Settings", href: "/managers/settings" },
        ]
      : [
          { icon: Heart, label: "Favorites", href: "/renters/favorites" },
          {
            icon: FileText,
            label: "Application",
            href: "/renters/applications",
          },
          { icon: Settings, label: "Settings", href: "/renters/settings" },
          { icon: Car, label: "Cars", href: "/renters/cars" },
        ];
  return (
    <div>
      <Sidebar
        collapsible="icon"
        className="fixed left-0 bg-white border-none shadow-[4px_0_8px_rgba(0,0,0,0.1)]"
        style={{
          top: `${NAVBAR_HEIGHT}px`,
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        }}
      >
        <SidebarHeader>
          <SidebarMenu className="border-none">
            <SidebarMenuItem>
              <div
                className={cn(
                  "flex min-h-[60px] w-full items-center pt-3 mb-3  ",
                  open ? "justify-between px--6 border-none" : "justify-center"
                )}
              >
                {open ? (
                  <>
                    <div className="flex items-center justify-center m-auto gap-4">
                      <h1 className="text-xl font-bold text-primary-500 font-michroma">
                        {userType === "manager"
                          ? "Manager View"
                          : "Renter View"}
                      </h1>
                      <button
                        className="ml-2 text-sm text-gray-500 cursor-pointer"
                        onClick={() => toggleSidebar()}
                      >
                        <X className="h-8 w-8 text-primary-700 font-bold " />
                      </button>
                    </div>
                  </>
                ) : (
                  <button
                    className="text-sm text-gray-500 cursor-pointer"
                    onClick={() => toggleSidebar()}
                  >
                    <Menu className="h-6 w-6 text-gray-600" />
                  </button>
                )}
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarMenu>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <SidebarMenuItem key={link.href}>
                  <SidebarMenuButton
                    asChild
                    className={cn(
                      "flex items-center px-7 py-7",
                      isActive
                        ? "bg-gray-100"
                        : "text-gray-600 hover:bg-gray-100",
                      open ? "text-primary-700" : "ml-[5px]"
                    )}
                  >
                    <Link href={link.href} className="w-full" scroll={false}>
                      <div className="flex items-center gap-4">
                        <link.icon
                          className={`h-5 w-5 ${
                            isActive ? "text-primary-700 " : "text-gray-600"
                          }`}
                        />
                        <span
                          className={`font-medium ${
                            isActive ? "text-primary-700 " : "text-gray-600"
                          }`}
                        >
                          {link.label}
                        </span>
                      </div>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarContent>
      </Sidebar>
    </div>
  );
};

export default AppSidebar;
