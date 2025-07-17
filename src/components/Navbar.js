// src/components/Navbar.jsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Search, Heart, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";

// --- Self-contained utilities and components for preview ---

// Utility for combining class names
const cn = (...classes) => classes.filter(Boolean).join(' ');

// Simplified Button component for preview
const Button = React.forwardRef(({ asChild, variant = 'default', className, ...props }, ref) => {
  const baseStyle = "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    default: "bg-zinc-900 text-white hover:bg-zinc-900/90",
    ghost: "hover:bg-zinc-100 hover:text-zinc-900",
  };

  const style = cn(baseStyle, variants[variant], className);

  if (asChild) {
    return React.cloneElement(props.children, { ref, className: style, ...props });
  }

  return <button className={style} ref={ref} {...props} />;
});
Button.displayName = 'Button';


// --- Main Navbar Component ---

// Navigation links data
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/#products", label: "Products" },
  { href: "/#videos", label: "Videos" },
  { href: "/#offers", label: "Offers" },
  { href: "/#blog", label: "Blog" },
  { href: "/#contact", label: "Contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setLangMenuOpen] = useState(false);
  const langMenuRef = useRef(null);

  // For preview, we'll hardcode the active path
  const pathname = "/";

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target)) {
        setLangMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [langMenuRef]);


  const renderNavLinks = (isMobile = false) => (
    <ul
      className={cn(
        "flex items-center gap-6 md:gap-8",
        { "flex-col items-start gap-4": isMobile },
        isMobile ? "text-lg" : "text-base"
      )}
    >
      {navLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            onClick={() => {
                if (isMobile) setIsMobileMenuOpen(false);
            }}
            className={cn(
              "font-medium transition-colors hover:text-amber-500",
              pathname === link.href
                ? "text-amber-500 underline underline-offset-4 decoration-2"
                : "text-zinc-900"
            )}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="text-4xl md:text-5xl text-Heebo font-bold text-amber-500">
            Lorem
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {renderNavLinks()}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="hidden sm:flex items-center gap-6">
              <div className="relative" ref={langMenuRef}>
                 <Button variant="ghost" className="flex items-center gap-2 px-2 text-base" onClick={() => setLangMenuOpen(!isLangMenuOpen)}>
                    EN <ChevronDown className={`h-4 w-4 transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
                 </Button>
                 {isLangMenuOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                       <div className="py-1">
                          <a href="#" onClick={e => {e.preventDefault(); setLangMenuOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                          <a href="#" onClick={e => {e.preventDefault(); setLangMenuOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                          <a href="#" onClick={e => {e.preventDefault(); setLangMenuOpen(false);}} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
                       </div>
                    </div>
                 )}
              </div>

              <button aria-label="Search" className="transition-colors hover:text-amber-500">
                <Search className="h-6 w-6" />
              </button>

              <a href="#wishlist" onClick={e => e.preventDefault()} aria-label="Wishlist" className="transition-colors hover:text-amber-500">
                <Heart className="h-6 w-6" />
              </a>

              <a href="#cart" onClick={e => e.preventDefault()} aria-label="Shopping Cart" className="relative transition-colors hover:text-amber-500">
                <ShoppingCart className="h-6 w-6" />
                <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] font-semibold text-white">
                  3
                </span>
              </a>
            </div>

            <Button asChild>
              <Link href="/login">Login</Link>
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur border-t border-neutral-200">
              <nav className="flex flex-col p-6 gap-6">
                  {renderNavLinks(true)}
                  <div className="border-t border-neutral-200 pt-6 flex items-center justify-around sm:hidden">
                       <div className="relative">
                           <Button variant="ghost" className="flex items-center gap-2 px-2 text-base">
                              EN <ChevronDown className="h-4 w-4"/>
                           </Button>
                       </div>
                      <button aria-label="Search" className="transition-colors hover:text-amber-500">
                        <Search className="h-6 w-6" />
                      </button>
                      <a href="#wishlist" onClick={e => e.preventDefault()} aria-label="Wishlist" className="transition-colors hover:text-amber-500">
                        <Heart className="h-6 w-6" />
                      </a>
                      <a href="#cart" onClick={e => e.preventDefault()} aria-label="Shopping Cart" className="relative transition-colors hover:text-amber-500">
                        <ShoppingCart className="h-6 w-6" />
                        <span className="absolute -top-2 -right-2 flex h-4 w-4 items-center justify-center rounded-full bg-amber-500 text-[9px] font-semibold text-white">
                          3
                        </span>
                      </a>
                  </div>
              </nav>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;