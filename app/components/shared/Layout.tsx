"use client"
import { ThemeProvider } from 'next-themes'
import React from 'react'

type Props = {
    children: React.ReactNode
}

export default function Layout({ children }: Props) {
    return (
        <ThemeProvider attribute="class">
            
            {children}
        </ThemeProvider>
    )
}