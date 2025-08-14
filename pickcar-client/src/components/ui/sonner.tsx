"use client"

import { useTheme } from "next-themes"
import { Toaster as Sonner, ToasterProps } from "sonner"

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group font-merase"
      style={
        {
          "--normal-bg": "rgb(92, 193, 185)",
          "--normal-text": "rgb(256, 256, 256)",
          "--normal-border": "rgb(92, 193, 185)",
          "--success-bg": "rgb(92, 193, 185)",
          "--success-text": "hsl(var(--card-foreground))",
          "--success-border": "rgb(92, 193, 185)",
          "--error-bg": "hsl(var(--destructive))",
          "--error-text": "hsl(var(--destructive-foreground))",
          "--error-border": "hsl(var(--destructive))",
          "--warning-bg": "rgb(92, 193, 185)",
          "--warning-text": "hsl(var(--card-foreground))",
          "--warning-border": "hsl(var(--accent))",
          "--info-bg": "rgb(92, 193, 185)",
          "--info-text": "hsl(var(--card-foreground))",
          "--info-border": "hsl(var(--secondary))",
          "--toast-radius": "var(--radius)",
          "--toast-font-family": "var(--font-merase)",
        } as React.CSSProperties
      }
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton:
            "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton:
            "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      {...props}
    />
  );
}

export { Toaster }
