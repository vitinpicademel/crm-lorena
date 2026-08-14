"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Users, LayoutDashboard, Calendar, Columns, Megaphone, Contact, Settings, LogOut, FileText } from "lucide-react"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()

  const mainNavItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Clientes", href: "/clients", icon: Users },
    { name: "Agenda & Retornos", href: "/calendar", icon: Calendar },
    { name: "Funil de Vendas", href: "/funnel", icon: Columns },
  ]

  const secondaryNavItems = [
    { name: "Prospecção", href: "/prospects", icon: Contact },
    { name: "Campanhas", href: "/campaigns", icon: Megaphone },
    { name: "Relatórios", href: "/reports", icon: FileText },
  ]

  return (
    <div className="flex min-h-screen flex-col md:flex-row bg-[#FAF7F2] font-sans">
      {/* Sidebar - Ultra Luxury Deep Brown */}
      <aside className="hidden w-64 flex-col bg-[#221A14] text-[#FAF7F2] shadow-sm md:flex z-10 relative">
        <div className="flex h-24 items-center px-6 mb-2 border-b border-[#3D2E22]">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="h-10 w-10 flex items-center justify-center rounded border border-[#B08D57]">
              <span className="text-[13px] font-serif font-bold text-[#B08D57] tracking-wider">LP</span>
            </div>
            <div className="flex flex-col">
              <span className="leading-tight tracking-[0.05em] font-serif text-[16px] text-[#FAF7F2]">Lorena de Paula</span>
              <span className="leading-tight tracking-[0.18em] text-[9px] uppercase text-[#B08D57]/80 mt-1">Real Estate</span>
            </div>
          </Link>
        </div>
        <div className="flex-1 overflow-auto py-6">
          <nav className="grid items-start px-3 text-sm font-medium gap-1">
            {mainNavItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={
                    isActive 
                      ? "flex items-center gap-3 bg-[#2B2119] px-[9px] py-3 text-[#B08D57] transition-all rounded-md border-l-[3px] border-[#B08D57]"
                      : "flex items-center gap-3 px-3 py-3 rounded-md text-[#B8A993] transition-all hover:text-[#B08D57] group"
                  }
                >
                  <item.icon strokeWidth={1.5} className={`h-5 w-5 transition-colors ${isActive ? 'text-[#B08D57]' : 'group-hover:text-[#B08D57]'}`} />
                  {item.name}
                </Link>
              )
            })}
            
            <div className="my-4 border-t border-[#3D2E22] mx-3"></div>
            
            {secondaryNavItems.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`)
              return (
                <Link 
                  key={item.href} 
                  href={item.href} 
                  className={
                    isActive 
                      ? "flex items-center gap-3 bg-[#2B2119] px-[9px] py-3 text-[#B08D57] transition-all rounded-md border-l-[3px] border-[#B08D57]"
                      : "flex items-center gap-3 px-3 py-3 rounded-md text-[#B8A993] transition-all hover:text-[#B08D57] group"
                  }
                >
                  <item.icon strokeWidth={1.5} className={`h-5 w-5 transition-colors ${isActive ? 'text-[#B08D57]' : 'group-hover:text-[#B08D57]'}`} />
                  {item.name}
                </Link>
              )
            })}
          </nav>
        </div>
        <div className="mt-auto p-6 border-t border-[#3D2E22]">
          <nav className="grid gap-1">
            <Link 
              href="/settings" 
              className={
                pathname.startsWith("/settings")
                  ? "flex items-center gap-3 bg-[#2B2119] px-[9px] py-3 text-[#B08D57] transition-all rounded-md border-l-[3px] border-[#B08D57] text-sm"
                  : "flex items-center gap-3 px-3 py-3 rounded-md text-[#B8A993] transition-all hover:text-[#B08D57] text-sm group"
              }
            >
              <Settings strokeWidth={1.5} className={`h-5 w-5 transition-colors ${pathname.startsWith("/settings") ? 'text-[#B08D57]' : 'group-hover:text-[#B08D57]'}`} />
              Configurações
            </Link>
            <button className="flex w-full items-center gap-3 px-3 py-3 rounded-md text-[#B8A993] transition-all hover:text-[#A64B3D] text-sm group">
              <LogOut strokeWidth={1.5} className="h-5 w-5 transition-colors group-hover:text-[#A64B3D]" />
              Sair
            </button>
          </nav>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex w-full flex-1 flex-col overflow-hidden">
        <header className="flex h-16 items-center gap-4 border-b bg-white px-6 md:hidden shadow-sm">
          <Link href="/dashboard" className="font-serif font-bold text-[#1F1811]">Lorena de Paula</Link>
        </header>
        <div className="flex-1 overflow-y-auto p-4 md:p-10 lg:px-14 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  )
}
