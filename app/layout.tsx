"use client";
import { Inter } from "next/font/google";
import { type PropsWithChildren } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const queryClient = new QueryClient();

const RootLayout = (props: PropsWithChildren) => {
  return (
    <html lang="en">
      <QueryClientProvider client={queryClient}>
        <body className={inter.className}>{props.children}</body>
      </QueryClientProvider>
    </html>
  );
};

export default RootLayout;
