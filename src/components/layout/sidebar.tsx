"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAVIGATION_ITEMS } from "@/constants/navigation"
import { UserCard } from "./user-card"

const Icons = {
  plus: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
    </svg>
  ),
  list: (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
      />
    </svg>
  ),
}

export function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-card h-screen flex flex-col">
      <div className="p-6">
        <h1 className="text-xl font-bold text-foreground">Reclamos</h1>
        <p className="text-sm text-muted-foreground">Sistema de gestión</p>
      </div>

      <nav className="flex-1 px-4">
        <ul className="space-y-2">
          {NAVIGATION_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  {Icons[item.icon as keyof typeof Icons]}
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      <div className="p-4 mt-auto">
        <UserCard />
      </div>
    </aside>
  )
}
