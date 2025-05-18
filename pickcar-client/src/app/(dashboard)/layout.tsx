"use client";
import { Navbar } from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { NAVBAR_HEIGHT } from "@/lib/constants";
import React, { useEffect,useState } from "react";
import { useGetAuthUserQuery } from "@/state/api";
import AppSidebar from "@/components/AppSidebar";
import { usePathname, useRouter } from "next/navigation";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const { data: authUser, isLoading:authLoading } = useGetAuthUserQuery();

  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole.toLowerCase();
      if (
        (userRole === "manager" && pathname.startsWith("/renters")) ||
        (userRole === "renter" && pathname.startsWith("/managers"))
      ) {
        router.push(
          userRole === "manager" ? "/managers/cars" : "/renters/favorites",
          { scroll: false } // Prevent scroll restoration
        ); // Redirect to the appropriate dashboard
      } else {
        setIsLoading(false); // Set loading to false if the user is on the correct dashboard
      }
    }
  },[authUser, pathname, router]);

  if (!authUser?.userRole) return null; // or handle loading state

  if (isLoading || authLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (!authUser?.userRole) {
    return <div>Access Denied</div>;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen h-full bg-primary-100">
        <Navbar />
        <div style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}>
          <main className="flex">
            <AppSidebar userType={authUser?.userRole.toLowerCase()} />
            <div className="flex-grow transition-all duration-300">
              {children}
            </div>
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
