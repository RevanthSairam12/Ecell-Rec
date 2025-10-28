"use client"

import Link from "next/link"
import { Dock, DockIcon } from "@/components/ui/dock"
import {
  Home,
  Handshake,
  PartyPopper,
  BookOpen,
  Building2,
  Compass,
} from "lucide-react"

const NavBar = () => {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <Dock className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl px-3 py-2 flex items-center justify-center gap-3">
        <Tooltip label="Home"><Link href="/"><DockIcon><Home /></DockIcon></Link></Tooltip>
        <Tooltip label="About"><Link href="/advisory-board"><DockIcon><Compass /></DockIcon></Link></Tooltip>
        <Tooltip label="Team"><Link href="/team"><DockIcon><Handshake /></DockIcon></Link></Tooltip>
        <Tooltip label="Events"><Link href="/events"><DockIcon><PartyPopper /></DockIcon></Link></Tooltip>
        <Tooltip label="Resources"><Link href="/resources"><DockIcon><BookOpen /></DockIcon></Link></Tooltip>
        <Tooltip label="Startups"><Link href="/startups"><DockIcon><Building2 /></DockIcon></Link></Tooltip>

      </Dock>
    </div>
  )
}

// Simple tooltip using Tailwind
const Tooltip = ({ label, children }: { label: string; children: React.ReactNode }) => {
  return (
    <div className="group relative flex items-center justify-center">
      {children}
      <span className="absolute -top-9 scale-0 transition-all rounded-md bg-black text-white text-xs px-2 py-1 group-hover:scale-100 whitespace-nowrap">
        {label}
      </span>
    </div>
  )
}

export default NavBar
