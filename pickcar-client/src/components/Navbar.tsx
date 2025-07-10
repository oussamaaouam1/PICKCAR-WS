"use client";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useGetAuthUserQuery } from "@/state/api";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "aws-amplify/auth";
import { Bell, MessageCircle, Plus, Search } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { SidebarTrigger } from "./ui/sidebar";

export const Navbar = () => {
  const { data: authUser } = useGetAuthUserQuery();
  const router = useRouter();
  const pathname = usePathname();

  const isDashboardPage =
    pathname.includes("/managers") || pathname.includes("/renters");
  const handleSignOut = async () => {
    await signOut(); // Sign out the user
    router.push("/landing"); // Redirect to the landing page
    window.location.href = "/landing"; // Refresh the page to ensure the sign-out is effective
  };
  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-primary-50 shadow-xl"
      style={{ height: `${NAVBAR_HEIGHT}px` }}
    >
      {" "}
      {/* Navbar will take 52px height look back to constant file */}
      <div
        className="flex justify-between items-center w-full px-8 text-white"
        style={{ height: "100%" }}
      >
        <div className="flex items-center gap-4 md:gap-24">
          {isDashboardPage && (
            <div className="md:hidden z-30 text-primary-250   ">
              <SidebarTrigger className="h-9 w-9 cursor-pointer hover:bg-primary-700 hover:text-white" />
            </div>
          )}
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-300"
            scroll={false}
          >
            <div className="flex items-center gap-5">
              <h1 className="text-2xl font-bold text-primary-250 font-merase hover:text-primary-700 duration-300">
                PickCar
              </h1>
            </div>
          </Link>
          {isDashboardPage && authUser && (
            <Button
              variant="secondary"
              className="md:ml-4 bg-primary-700 text-primary-250 hover:bg-primary-50 border border-primary-700 hover:text-primary-700 duration-200 font-michroma font-bold tracking-widest rounded-2xl p-6 cursor-pointer hover:border-primary-700 hover:border-1"
              onClick={() => {
                router.push(
                  authUser.userRole?.toLowerCase() === "manager"
                    ? "/managers/new-car"
                    : "/search"
                );
              }}
            >
              {authUser.userRole?.toLowerCase() === "manager" ? (
                <>
                  <Plus className="h-4 w-4 mr-2" />
                  <span className="hidden md:block ml-2">Add New Car</span>
                </>
              ) : (
                <>
                  <Search className="h-4 w-4 mr-2" />
                  <span className="hidden md:block ml-2">Search Car</span>
                </>
              )}
            </Button>
          )}
        </div>
        <div className="hidden md:flex items-center gap-16">
          {/* -------------------navbar section----------------------*/}
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-700 text-primary-250 duration-300 font-michroma font-bold tracking-widest text-lg"
          >
            Home
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-700 text-primary-250 duration-300 font-michroma font-bold tracking-widest text-lg"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="cursor-pointer hover:!text-primary-700 text-primary-250 duration-300 font-michroma font-bold tracking-widest text-lg"
          >
            Contact Us
          </Link>
        </div>
        <div className="flex items-center gap-5">
          {authUser ? (
            <>
              <div className="relative hidden md:block">
                <MessageCircle className="h-8 w-8 text-primary-250 hover:text-primary-700 duration-300 cursor-pointer" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-950 rounded-full"></span>
              </div>
              <div className="relative hidden md:block">
                <Bell className="h-8 w-8 text-primary-250 hover:text-primary-700 duration-300 cursor-pointer" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-secondary-950 rounded-full"></span>
              </div>
            {/* -----------------------------dropdownMenu------------------------------ */}
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center gap-2 cursor-pointer focus:outline-none border-none">
                  <Avatar>
                    <AvatarImage
                      src={authUser?.userInfo?.image}//need to be reviewed in phone mode
                      alt="Profile Picture"
                      className="w-9 h-9 rounded-full"
                    />
                    <AvatarFallback className="bg-secondary-900 font-michroma  ">
                      {authUser.userRole?.[0].toUpperCase()||'U'}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-primary-250 hidden md:block">
                    {authUser.userInfo?.name || "User"}
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white text-primary-250">
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-white font-bold"
                    onClick={() => {
                      router.push(
                        authUser.userRole?.toLowerCase() === "manager"
                          ? "/managers/cars"
                          : "/renters/favorites",
                        { scroll: false }
                      );
                    }}
                  >
                    Go to Dashboard
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-primary-500" />
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-primary-700 hover:!text-white font-bold"
                    onClick={() => {
                      router.push(
                        `/${authUser.userRole?.toLowerCase()}s/settings`,
                        { scroll: false }
                      );
                    }}
                  >
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    className="cursor-pointer hover:!bg-red-500 hover:!text-white font-bold"
                    onClick={handleSignOut}
                  >
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <>
              <Link href="/sign-in">
                <Button
                  variant="outline"
                  className="text-black hover:text-primary-50 hover:bg-primary-700  duration-300 font-michroma font-bold tracking-widest rounded-2xl p-6 cursor-pointer bg-primary-700 border-none"
                >
                  Sign In
                </Button>
              </Link>
              <Link
                href="/sign-up"
                // className="text-black hover:text-primary-700 duration-300"
              >
                <Button
                  variant="outline"
                  className="text-black hover:text-primary-50 hover:bg-red-500  duration-300 font-michroma font-bold tracking-widest rounded-2xl p-6 cursor-pointer  "
                >
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
