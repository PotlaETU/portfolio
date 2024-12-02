"use client"

import * as React from "react"
import {ModeToggle} from "@/components/theme/theme-toggle"
import Nav from "@/components/Header/nav/Nav";

export default function Header() {
    return (
        <>
            <header className="py-5 xl:py-10">
                <div className="container mx-auto flex justify-between items-center">
                    <div/>
                    <Nav/>
                    <ModeToggle/>
                </div>
            </header>
        </>
    )
}