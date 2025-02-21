import { Inter } from "next/font/google";
import "./globals.css";
//import { headers } from "next/headers";
import { ThemeProvider } from "@/components/theme-provider";

import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { dark } from "@clerk/themes";
import { Toaster } from "@/components/ui/sonner";

export const metadata = {
  title: "Career Orbit Ai - AI Career guide",
  description: " ",
};
const inter = Inter({ subset: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.className}`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className="min-h-screen"> {children} </main>
             <Toaster richColors />
            <footer className="bg-muted/50 py-12 text-center ">
              <div className="container mx-auto px-4 text-center">
                <div className="container mx-auto px-4">
                  <p className="text-lg font-semibold">
                    © 2025 Career Orbit AI. All rights reserved.
                  </p>
                  <p className="mt-2 text-gray-400">
                    Empowering careers with AI-driven guidance and insights.
                  </p>
                  <div className="flex justify-center space-x-6 mt-4">
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Privacy Policy
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Terms of Service
                    </a>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
