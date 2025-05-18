"use client";
import { Amplify } from "aws-amplify";
import { Authenticator, Radio, RadioGroupField } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

// import awsExports from './aws-exports';
Amplify.configure({
  //https://docs.amplify.aws/gen1/javascript/tools/libraries/configure-categories/
  Auth: {
    Cognito: {
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID!,
      userPoolClientId:
        process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID!,
    },
  }, 
});

// export default function App() {
const Auth = ({ children }: { children: React.ReactNode }) => {
  // Retrieve the authenticated user
  const { user } = useAuthenticator((context) => [context.user]);
  // Get the current route pathname
  const pathname = usePathname();
  // Initialize the router for navigation
  const router = useRouter();
  // Check if the current page is an authentication page
  const isAuthPage = pathname.match(/^\/(sign-in|sign-up)$/);
  //this variable determin if we are in dashboard pages (manager or renter)
  const isDashboardPage =
    pathname.startsWith("/manager") || pathname.startsWith("/renter");

  useEffect(() => {
    // If the user is authenticated , redirect to the landing page
    if (user && isAuthPage) {
      router.push("/landing");
    }
  }, [user, isAuthPage, router]);

  // List of public routes that don't require authentication
  // If the current route is public, render children directly
  if (!isAuthPage && !isDashboardPage) {
    return <>{children}</>;
  }
  const FormFields = {
    signIn: {
      username: {
        placeholder: "Enter your email address",
        label: "Email",
        isRequired: true,
        type: "email",
      },
      password: {
        placeholder: "Enter your Password",
        label: "Password",
        isRequired: true,
      },
    },
    signUp: {
      username: {
        placeholder: "Choose a username",
        order: 1,
        label: "Username",
        isRequired: true,
      },
      email: {
        placeholder: "Enter your email address",
        order: 2,
        label: "Email",
        isRequired: true,
      },
      password: {
        placeholder: "Create a password",
        order: 3,
        label: "Password",
        isRequired: true,
      },
      confirm_password: {
        placeholder: "Confirm your password",
        order: 4,
        label: "Confirm Password",
        isRequired: true,
      },
    },
  };
  const components = {
    Header() {
      return (
        <div className="mt-4 mb-7 text-left">
          <a className="text-2xl font-bold  font-merase text-primary-250 text-left cursor-pointer"
          onClick={() => router.push("/landing")}>
            PickCar
          </a>
          <p className="mt-2 text-bold text-muted-foreground font-michroma">
            <span className="font-bold text-primary-250 tracking-widest">
              Welcome!{" "}
            </span>
            Please sign in to continue.
          </p>
        </div>
      );
    },
    SignIn: {
      Footer() {
        const { toSignUp } = useAuthenticator();
        return (
          <div className="mt-4 mb-7 text-left">
            <p className="text-sm text-muted-foreground font-michroma">
              Don&apos;t have an account?{" "}
              <a
                href="/sign-up"
                className="text-primary-250 hover:text-primary-700 font-bold transition-colors duration-200 tracking-widest"
                onClick={(event) => {
                  event.preventDefault();
                  toSignUp();
                  router.push("/sign-up");
                }}
              >
                Sign Up
              </a>
            </p>
          </div>
        );
      },
    },
    SignUp: {
      FormFields() {
        const { validationErrors } = useAuthenticator();

        return (
          <>
            <Authenticator.SignUp.FormFields />
            <RadioGroupField
              legend="Select your role"
              name="custom:role"
              errorMessage={validationErrors?.["custom:role"]}
              hasError={!!validationErrors?.["custom:role"]}
              isRequired={true}
            >
              <Radio value="renter">Renter</Radio>
              <Radio value="manager">Manager</Radio>
            </RadioGroupField>
          </>
        );
      },
      Footer() {
        const { toSignIn } = useAuthenticator();
        return (
          <div className="mt-4 mb-7 text-left">
            <p className="text-sm text-muted-foreground font-michroma">
              already have an account?{" "}
              <a
                href="/sign-up"
                className="text-primary-250 hover:text-primary-700 font-bold transition-colors duration-200 tracking-widest"
                onClick={(event) => {
                  event.preventDefault();
                  toSignIn();
                  router.push("/sign-in");
                }}
              >
                Sign In
              </a>
            </p>
          </div>
        );
      },
    },
  };

  // For protected routes, require authentication
  return (
    <div className="h-full">
      <Authenticator
        initialState={pathname.includes("sign-up") ? "signUp" : "signIn"}
        components={components}
        formFields={FormFields}
      >
        {() => <>{children}</>}
      </Authenticator>
    </div>
  );
};

export default Auth;
