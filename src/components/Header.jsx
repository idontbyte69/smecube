import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  const [openServices, setOpenServices] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkBase = 'hover:opacity-90'
  const activeUnderline = (
    <span className="absolute left-1/2 -translate-x-1/2 -bottom-2 block h-[3px] w-16 rounded bg-[#6fcf97]" />
  )

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-[var(--brand-bg)]/95 backdrop-blur border-b border-white/70">
        <div className="container-max flex justify-between items-center py-5">
          {/* Logo */}
          <Link to="https://smecube.com/" className="flex items-center gap-2">
            <img src="/SME-Cube-logo.png" alt="SME CUBE" className="h-9" />
          </Link>

          {/* Center Nav (desktop) */}
          <nav className="hidden md:flex justify-center flex-1">
            <ul className="flex items-center gap-12 text-[var(--brand-accent)] font-bold text-lg">
              <li className="relative">
                <NavLink to="/" className={navLinkBase} end>
                  {({ isActive }) => (
                    <span className="relative inline-block">হোম{isActive && activeUnderline}</span>
                  )}
                </NavLink>
              </li>
              <li className="relative" onMouseEnter={() => setOpenServices(true)} onMouseLeave={() => setOpenServices(false)}>
                <button className="flex items-center gap-1 hover:opacity-90">
                  <span>সার্ভিস</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.186l3.71-3.955a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
                </button>
                {openServices && (
                  <div className="absolute left-0 mt-3 w-64 rounded-xl bg-white shadow-soft border border-slate-100 p-2">
                    <NavLink to="/services/domain-hosting" className={({ isActive }) => `flex items-center justify-between px-3 py-2 rounded-lg ${isActive ? 'bg-[var(--brand-bg)] text-[var(--brand-text)]' : 'hover:bg-slate-50'}`}>ডোমেইন ও হোস্টিং</NavLink>
                    <NavLink to="/services/web-development" className={({ isActive }) => `flex items-center justify-between px-3 py-2 rounded-lg ${isActive ? 'bg-[var(--brand-bg)] text-[var(--brand-text)]' : 'hover:bg-slate-50'}`}>ওয়েবসাইট ডেভেলপমেন্ট</NavLink>
                    <NavLink to="/services/landing-page" className={({ isActive }) => `flex items-center justify-between px-3 py-2 rounded-lg ${isActive ? 'bg-[var(--brand-bg)] text-[var(--brand-text)]' : 'hover:bg-slate-50'}`}>ল্যান্ডিং পেজ</NavLink>
                    <NavLink to="/services/ecommerce" className={({ isActive }) => `flex items-center justify-between px-3 py-2 rounded-lg ${isActive ? 'bg-[var(--brand-bg)] text-[var(--brand-text)]' : 'hover:bg-slate-50'}`}>ই-কমার্স সল্যুশন</NavLink>
                    <NavLink to="/services/facebook-marketing" className={({ isActive }) => `flex items-center justify-between px-3 py-2 rounded-lg ${isActive ? 'bg-[var(--brand-bg)] text-[var(--brand-text)]' : 'hover:bg-slate-50'}`}>ফেসবুক মার্কেটিং</NavLink>
                  </div>
                )}
              </li>
              <li>
                <a href="/services/domain-hosting#domain" className={navLinkBase}>প্রাইসিং</a>
              </li>
              <li><a href="#tools" className={navLinkBase}>টুলস</a></li>
              <li><a href="#contact" className={navLinkBase}>যোগাযোগ</a></li>
            </ul>
          </nav>

          {/* CTA + mobile trigger */}
          <div className="flex items-center gap-3">
            <a href="https://my.smecube.com/authentication/login" className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[var(--brand-accent)] text-white font-semibold shadow-soft hover:opacity-90">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/><path fillRule="evenodd" d="M3.75 20.1a8.25 8.25 0 0116.5 0 .9.9 0 01-.9.9H4.65a.9.9 0 01-.9-.9z" clipRule="evenodd"/></svg>
              <span>ক্লায়েন্ট এরিয়া</span>
            </a>
            <button aria-label="Toggle menu" className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-slate-300 text-[var(--brand-text)]" onClick={() => setMobileOpen((v) => !v)}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6"><path fillRule="evenodd" d="M3.75 6.75A.75.75 0 014.5 6h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75zm0 5.25a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z" clipRule="evenodd"/></svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="container-max py-4 space-y-2">
            <NavLink to="/" className={({ isActive }) => `block px-3 py-2 rounded-lg ${isActive ? 'bg-[var(--brand-bg)]' : 'hover:bg-slate-50'}`} onClick={() => setMobileOpen(false)}>হোম</NavLink>
            <details className="group">
              <summary className="px-3 py-2 cursor-pointer rounded-lg hover:bg-slate-50 flex items-center justify-between">
                <span>সার্ভিস</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-5 group-open:rotate-180 transition-transform"><path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.186l3.71-3.955a.75.75 0 111.08 1.04l-4.24 4.52a.75.75 0 01-1.08 0l-4.24-4.52a.75.75 0 01.02-1.06z" clipRule="evenodd" /></svg>
              </summary>
              <div className="mt-1 pl-3 space-y-1">
                <NavLink to="/services/domain-hosting" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>ডোমেইন ও হোস্টিং</NavLink>
                <NavLink to="/services/web-development" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>ওয়েবসাইট ডেভেলপমেন্ট</NavLink>
                <NavLink to="/services/landing-page" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>ল্যান্ডিং পেজ</NavLink>
                <NavLink to="/services/ecommerce" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>ই-কমার্স সল্যুশন</NavLink>
                <NavLink to="/services/facebook-marketing" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>ফেসবুক মার্কেটিং</NavLink>
              </div>
            </details>
            <a href="/services/domain-hosting#domain" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>প্রাইসিং</a>
            <a href="#tools" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>টুলস</a>
            <a href="#contact" className="block px-3 py-2 rounded-lg hover:bg-slate-50" onClick={() => setMobileOpen(false)}>যোগাযোগ</a>
            <a href="#client-area" className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[var(--brand-accent)] text-white font-semibold shadow-soft hover:opacity-90 mt-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5"><path d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0z"/><path fillRule="evenodd" d="M3.75 20.1a8.25 8.25 0 0116.5 0 .9.9 0 01-.9.9H4.65a.9.9 0 01-.9-.9z" clipRule="evenodd"/></svg>
              <span>ক্লায়েন্ট এরিয়া</span>
            </a>
          </div>
        </div>
      )}

      {/* Subtle pink strip under header like the design */}
      {/* <div className="h-12 bg-[linear-gradient(180deg,#f6e3ec_0%,#f6d7e1_100%)]" /> */}
    </header>
  )
}
