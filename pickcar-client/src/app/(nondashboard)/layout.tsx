"use client"
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React from 'react'
import { Navbar } from '@/components/Navbar'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


const Layout = ({children}: {children: React.ReactNode}) => {
  // API query to get authenticated user data
  // authLoading: true when the API call is in progress
  // authUser: contains user data when authenticated, null/undefined when not authenticated
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  console.log("authUser", authUser)

  // Next.js router and pathname hooks for navigation and route detection
  const router = useRouter();
  const pathname = usePathname();
  
  // Local loading state to handle component-specific loading logic
  // This controls when we show the loading UI vs the actual content
  // Starts as true to prevent flash of content before auth check completes
  const [isLoading, setIsLoading] = useState(true);

  // Effect to handle authentication-based redirects and loading state management
  useEffect(() => {
    // Only proceed when we have a definitive auth state (not loading)
    if (!authLoading) {
      // Case 1: User is authenticated
      if (authUser) {
        const userRole = authUser.userRole.toLowerCase();
        
        // Manager role protection: redirect managers away from search/landing pages
        // Managers should only access their dashboard, not public search pages
        if (
          (userRole === "manager" && pathname.startsWith("/search")) ||
          (userRole === "manager" && pathname === "/")
        ) {
          router.push(
            "/managers/cars",
            { scroll: false } // Prevent scroll restoration for smooth UX
          );
          // Keep isLoading true during redirect to prevent content flash
        } else {
          // User is on correct page for their role, stop loading
          setIsLoading(false);
        }
      } else {
        // Case 2: No authenticated user (guest/public access)
        // Auth loading is complete and no user found - allow access to public pages
        setIsLoading(false);
      }
    }
    // Re-run effect when any of these dependencies change
  }, [authUser, authLoading, pathname, router]);

  // Loading UI: Show when either API is loading OR component is handling redirects
  // This prevents content flash and provides user feedback during auth/redirect process
  if (isLoading || authLoading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg mb-4"></div>
          <p className="text-gray-600">
            {authLoading ? "Checking authentication..." : "Loading..."}
          </p>
        </div>
      </div>
    );
  }

  // Main layout: Only renders when loading is complete and user is on correct page
  return (
    <div>
      <Navbar />
      <main 
        className="h-full flex flex-col w-full"
        style={{ paddingTop: `${NAVBAR_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  )
}

export default Layout
