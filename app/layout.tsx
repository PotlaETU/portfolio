import type {Metadata} from "next";
import "./globals.css";
import {Inter} from "next/font/google";
import {ThemeProvider} from 'next-themes';
import React from "react";
import Header from "@/components/Header/Header";

const inter = Inter({
    weight: ["400", "700"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "ROLLAND Anthony - Portfolio",
    description: "IT Student and developer",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true} className="dark:bg-background dark:text-foreground">
        <body
            className={`${inter.className} antialiased`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            {children}
        </ThemeProvider>
        </body>
        </html>
    );
}
