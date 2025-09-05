"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { toast } from "sonner";

export default function AuthCallback() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const { user, authStatus } = useAuthenticator((context) => [context.user, context.authStatus]);

  useEffect(() => {
    console.log("Callback page - Auth status:", authStatus);
    console.log("Callback page - User:", user);

    if (authStatus === "authenticated" && user) {
      console.log("User authenticated successfully:", user);
      toast.success("Successfully signed in!");
      router.push("/landing");
    } else if (authStatus === "unauthenticated") {
      console.log("Authentication failed, redirecting to sign-in");
      toast.error("Authentication failed");
      router.push("/sign-in");
    } else {
      // Still loading, wait a bit more
      const timer = setTimeout(() => {
        if (authStatus === "authenticated" && user) {
          console.log("User authenticated after wait:", user);
          toast.success("Successfully signed in!");
          router.push("/landing");
        } else {
          console.log("Still not authenticated after wait");
          toast.error("Authentication failed");
          router.push("/sign-in");
        }
        setIsLoading(false);
      }, 5000); // Wait 5 seconds

      return () => clearTimeout(timer);
    }
  }, [router, user, authStatus]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary-700 mx-auto mb-4"></div>
          <p className="text-gray-600 mb-2">Completing sign in...</p>
          <p className="text-sm text-gray-500">Status: {authStatus}</p>
        </div>
      </div>
    );
  }

  return null;
}
