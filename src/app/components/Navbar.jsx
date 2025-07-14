"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

function Navbar() {
    const pathname = usePathname()
    // console.log(pathname);

  return (
    <nav className="flex gap-x-2">
        <Link className="underline" href="/">Accueil</Link>
        <Link className="underline" href="/blog">Blog</Link>
        <Link className="underline" href="/dashboards">Dashboards</Link>
        <Link className={`underline ${pathname === "/contact" && "bg-red-600" }`} href="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar
