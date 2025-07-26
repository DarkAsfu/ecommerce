"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Heart,
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReusableModal } from "./reusable/ReusableModal";
import Login from "./login/Login";
import ModalManager from "./reusable/ModalManager";

// Navigation links data
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/videos", label: "Videos" },
  { href: "/offers", label: "Offers" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const languages = [
  { code: "EN", label: "English", flag: "🇺🇸" },
  { code: "ES", label: "Español", flag: "🇪🇸" },
  { code: "FR", label: "Français", flag: "🇫🇷" },
];

// Primary color
const PRIMARY_COLOR = "#CFA54B";
const PRIMARY_LIGHT = "#222222";
const PRIMARY_DARK = "#B8944A";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("EN");
  const pathname = usePathname(); // Get current pathname

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Check if link is active
  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 font-inter">
        <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold hover:opacity-80 transition-all relative z-[60]"
            style={{
              color: isMobileMenuOpen ? "white" : PRIMARY_COLOR,
              textShadow: isMobileMenuOpen
                ? "0 2px 4px rgba(0,0,0,0.3)"
                : "none",
            }}
          >
            Lorem
          </Link>

          {/* Desktop Navigation - Hidden on mobile and tablet */}
          <nav className="hidden xl:flex items-center">
            <ul className="flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => {
                const isActive = isActiveLink(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`font-medium transition-all duration-300 relative py-2 px-1 group ${
                        isActive ? "text-[#CFA54B]" : "text-zinc-900"
                      }`}
                    >
                      {link.label}
                      {/* Active underline */}
                      <span
                        className={`absolute bottom-0 left-0 h-0.5 bg-[#CFA54B] transition-all duration-300 ${
                          isActive ? "w-full" : "w-0 group-hover:w-full"
                        }`}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Desktop Language Selector - Hidden on small screens */}
            <div className="hidden md:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-2 px-3 py-2 hover:opacity-80"
                  >
                    <Globe className="h-4 w-4" />
                    {selectedLanguage}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-40">
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="cursor-pointer flex items-center gap-2 hover:opacity-80"
                      style={{
                        backgroundColor:
                          selectedLanguage === lang.code
                            ? `${PRIMARY_COLOR}20`
                            : undefined,
                      }}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Desktop Action Icons - Hidden on small screens */}
            <div className="hidden sm:flex items-center gap-3 lg:gap-4">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="hover:opacity-80"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Wishlist"
                className="hover:opacity-80"
              >
                <Heart className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                aria-label="Shopping Cart"
                className="relative hover:opacity-80"
              >
                <ShoppingCart className="h-5 w-5" />
                <span
                  className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold text-white"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  3
                </span>
              </Button>
            </div>

            {/* Login Button */}

            {/* <ReusableModal
              className="bg-heading text-white cursor-pointer"
              title="Login"
            >
              <Login />
            </ReusableModal> */}
            <ModalManager />

            {/* Mobile Icons and Menu Toggle */}
            <div className="flex items-center gap-2 xl:hidden">
              {/* Mobile Search Icon */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Search"
                className="sm:hidden hover:opacity-80 relative z-[60]"
                style={{
                  color: isMobileMenuOpen ? "white" : "#18181b",
                }}
              >
                <Search className="h-5 w-5" />
              </Button>

              {/* Mobile Cart Icon */}
              <Button
                variant="ghost"
                size="icon"
                aria-label="Shopping Cart"
                className="sm:hidden relative hover:opacity-80 z-[60]"
                style={{
                  color: isMobileMenuOpen ? "white" : "#18181b",
                }}
              >
                <ShoppingCart className="h-5 w-5" />
                <span
                  className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-semibold text-white"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  3
                </span>
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                className="relative z-[80] p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                style={{
                  backgroundColor: isMobileMenuOpen
                    ? "rgba(255,255,255,0.95)"
                    : "transparent",
                  color: isMobileMenuOpen ? PRIMARY_COLOR : "#18181b",
                  border: isMobileMenuOpen
                    ? `2px solid ${PRIMARY_COLOR}`
                    : "none",
                }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6 font-bold" strokeWidth={3} />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[70] xl:hidden transition-all duration-500 ease-in-out font-inter ${
          isMobileMenuOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeMobileMenu}
      >
        {/* Background Overlay */}
        <div
          className={`absolute inset-0 backdrop-blur-md transition-all duration-500 ${
            isMobileMenuOpen ? "scale-100" : "scale-95"
          }`}
          style={{
            background: `linear-gradient(135deg, ${PRIMARY_COLOR}F5, ${PRIMARY_DARK}F0, #A6833AF0)`,
          }}
        />

        {/* Menu Content - Now Scrollable */}
        <div
          className={`relative h-full overflow-y-auto flex flex-col text-white transition-all duration-700 delay-200 px-4 sm:px-6 py-4 ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100"
              : "-translate-y-8 opacity-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header with Close Button */}
          <div className="flex justify-end items-center mb-6 pt-2">
            <Button
              variant="ghost"
              size="icon"
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 text-white hover:bg-white/30 transition-all"
              onClick={closeMobileMenu}
            >
              <X className="h-6 w-6" strokeWidth={2.5} />
            </Button>
          </div>

          {/* Scrollable Content Container */}
          <div className="flex-1 flex flex-col justify-center min-h-0">
            {/* Navigation Links - More Compact */}
            <nav className=" mb-6">
              <ul className="space-y-2 sm:space-y-3 max-w-max">
                {navLinks.map((link, index) => {
                  const isActive = isActiveLink(link.href);
                  return (
                    <li
                      key={link.href}
                      className={`transition-all duration-500 ${
                        isMobileMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${300 + index * 60}ms` }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMobileMenu}
                        className={`block text-xl sm:text-2xl font-bold transition-all duration-300 hover:scale-105 py-2 sm:py-3 px-4 sm:px-6 rounded-lg relative group ${
                          isActive ? "scale-105" : ""
                        }`}
                        style={{
                          color: isActive ? PRIMARY_LIGHT : "#ffffff",
                          // backgroundColor: isActive ? "rgba(255,255,255,0.15)" : "transparent",
                        }}
                        onTouchStart={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor =
                              "rgba(255,255,255,0.1)";
                          }
                        }}
                        onTouchEnd={(e) => {
                          if (!isActive) {
                            e.currentTarget.style.backgroundColor =
                              "transparent";
                          }
                        }}
                      >
                        {link.label}
                        {/* Mobile underline indicator */}
                        <span
                          className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-white transition-all duration-300 ${
                            isActive ? "w-24" : "w-0 group-hover:w-8"
                          }`}
                        />
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            {/* Action Buttons Grid - Reduced to 2 items since Search and Cart are now in header */}
            <div
              className={`flex gap-3 mb-6 justify-start transition-all duration-500 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <Button
                variant="outline"
                size="sm"
                className="flex flex-col items-center gap-1 h-16 w-24 bg-white/15 border-white/40 text-white hover:bg-white/25 backdrop-blur-sm transition-all active:scale-95"
              >
                <Heart className="h-4 w-4" />
                <span className="text-xs font-medium">Wishlist</span>
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex flex-col items-center gap-1 h-16 w-24 bg-white/15 border-white/40 text-white hover:bg-white/25 backdrop-blur-sm transition-all active:scale-95"
                  >
                    <Globe className="h-4 w-4" />
                    <span className="text-xs font-medium">
                      {selectedLanguage}
                    </span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  className="w-32 bg-white/95 backdrop-blur-sm"
                >
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => handleLanguageChange(lang.code)}
                      className="cursor-pointer flex items-center gap-2 hover:opacity-80 active:scale-95 transition-all text-sm"
                      style={{
                        backgroundColor:
                          selectedLanguage === lang.code
                            ? `${PRIMARY_COLOR}25`
                            : undefined,
                      }}
                    >
                      <span>{lang.flag}</span>
                      {lang.label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Login Button */}
            <div
              className={`transition-all duration-500 ${
                isMobileMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <Button
                asChild
                size="default"
                className="font-bold px-8 py-2 text-sm rounded-md shadow-xl hover:shadow-2xl transition-all active:scale-95"
                style={{
                  backgroundColor: "white",
                  color: PRIMARY_COLOR,
                }}
              >
                <Link href="/login" onClick={closeMobileMenu}>
                  Login
                </Link>
              </Button>
            </div>
          </div>

          {/* Bottom Spacing */}
          <div className="h-4" />

          {/* Decorative Elements - Smaller and positioned better */}
          <div className="absolute top-20 left-4 w-12 h-12 bg-white/10 rounded-full blur-xl animate-pulse" />
          <div
            className="absolute bottom-20 right-4 w-16 h-16 bg-white/5 rounded-full blur-2xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </div>
      </div>
    </>
  );
}
