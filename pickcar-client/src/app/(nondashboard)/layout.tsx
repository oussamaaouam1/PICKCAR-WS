"use client"
import { NAVBAR_HEIGHT } from '@/lib/constants'
import React from 'react'
import { Navbar } from '@/components/Navbar'
import { useGetAuthUserQuery } from '@/state/api'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'


const Layout = ({children}: {children: React.ReactNode}) => {
  const { data: authUser, isLoading: authLoading } = useGetAuthUserQuery();
  console.log("authUser", authUser)

const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    if (authUser) {
      const userRole = authUser.userRole.toLowerCase();
      if (
        (userRole === "manager" && pathname.startsWith("/search")) ||
        (userRole === "manager" && pathname === "/")
      ) {
        router.push(
          "/managers/cars",
          { scroll: false } // Prevent scroll restoration
        ); // Redirect to the appropriate dashboard
      } else {
        setIsLoading(false); // Set loading to false if the user is on the correct dashboard
      }
    }
  },[authUser, pathname, router]);


  // if (isLoading || authLoading) {
  //   return (
  //     <div className="flex items-center justify-center h-screen">
  //       <span className="loading loading-spinner loading-lg"></span>
  //     </div>
  //   );
  // }




  return (
    <div>
      <Navbar />
      {/* <h1>Navebar</h1> */}
      <main className={`h-full flex flex-col w-full `}
      style={{ paddingTop: `${NAVBAR_HEIGHT}px` }} // to be changed to pickcar logo height!!!!!!!!!!!!!!!!!!
      >
      {children}
      
      </main>
    </div>
  )
}

export default Layout
