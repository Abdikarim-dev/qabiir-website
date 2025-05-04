"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, X, Sun, Moon, ChevronDown, MenuIcon } from "lucide-react";
import { useTheme } from "next-themes";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isSearchOpen, setIsSearchOpen] = React.useState(false);
  const [is3DDropdownOpen, setIs3DDropdownOpen] = React.useState(false);
  const [isVFXDropdownOpen, setIsVFXDropdownOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const searchInputRef = React.useRef<HTMLInputElement>(null);
  const dropdown3DRef = React.useRef<HTMLDivElement>(null);
  const dropdownVFXRef = React.useRef<HTMLDivElement>(null);
  
  if (pathname === '/maintenance') {
    return null; // Don't show on the maintenance page
  }

  // Handle mounting to avoid hydration mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Handle scroll effect
  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Focus search input when opened
  React.useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdown3DRef.current &&
        !dropdown3DRef.current.contains(event.target as Node)
      ) {
        setIs3DDropdownOpen(false);
      }
      if (
        dropdownVFXRef.current &&
        !dropdownVFXRef.current.contains(event.target as Node)
      ) {
        setIsVFXDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  React.useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setIs3DDropdownOpen(false);
    setIsVFXDropdownOpen(false);
  }, [pathname]);

  const isActive = (path: string) =>
    pathname === path || pathname.startsWith(path + "/");

  // Don't render anything until mounted to avoid hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <header
      className={`w-full fixed top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="max-w-md md:max-w-2xl mx-auto px-4">
        {isSearchOpen ? (
          <div className="bg-[#363635] dark:bg-gray-800 rounded-full px-4 py-2 flex items-center">
            <Search size={20} className="text-gray-400 mr-2" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search projects..."
              className="bg-transparent border-none outline-none text-white w-full"
            />
            <button
              onClick={() => setIsSearchOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        ) : (
          <div className="bg-[#363635] dark:bg-gray-800 rounded-full px-4 py-2">
            <div className="flex items-center justify-between">
              {/* Mobile Menu Button */}
              <button
                className="md:hidden text-gray-400 hover:text-white"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={20} /> : <MenuIcon />}
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-6">
                <Link
                  href="/"
                  className={
                    isActive("/")
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white transition-colors"
                  }
                >
                  Home
                </Link>
                <Link
                  href="/branding"
                  className={
                    isActive("/branding")
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white transition-colors"
                  }
                >
                  Branding
                </Link>
                <Link
                  href="/designs"
                  className={
                    isActive("/designs")
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white transition-colors"
                  }
                >
                  Designs
                </Link>
                <div className="relative" ref={dropdown3DRef}>
                  <button
                    onClick={() => setIs3DDropdownOpen(!is3DDropdownOpen)}
                    className={`flex items-center ${
                      isActive("/3d")
                        ? "font-medium text-white"
                        : "text-gray-400 hover:text-white transition-colors"
                    }`}
                  >
                    3D
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {is3DDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                      <Link
                        href="/3d/visualization"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        3D Visualization
                      </Link>
                      <Link
                        href="/3d/animation"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        3D Animation
                      </Link>
                    </div>
                  )}
                </div>
                <div className="relative" ref={dropdownVFXRef}>
                  <button
                    onClick={() => setIsVFXDropdownOpen(!isVFXDropdownOpen)}
                    className={`flex items-center ${
                      isActive("/vfx")
                        ? "font-medium text-white"
                        : "text-gray-400 hover:text-white transition-colors"
                    }`}
                  >
                    VFX
                    <ChevronDown size={16} className="ml-1" />
                  </button>
                  {isVFXDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-gray-800 rounded-lg shadow-lg py-2 z-50">
                      <Link
                        href="/vfx/cgi"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        CGI
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/about"
                  className={
                    isActive("/about")
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white transition-colors"
                  }
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={
                    isActive("/contact")
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white transition-colors"
                  }
                >
                  Contact
                </Link>
              </nav>

              {/* Right side items: Search and Theme toggle */}
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Search"
                >
                  <Search size={20} />
                </button>
                <button
                  onClick={() =>
                    setTheme(resolvedTheme === "dark" ? "light" : "dark")
                  }
                  className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center text-white"
                  aria-label="Toggle theme"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun size={16} />
                  ) : (
                    <Moon size={16} />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 bg-[#363635] dark:bg-gray-800 rounded-lg p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={
                  isActive("/")
                    ? "font-medium text-white"
                    : "text-gray-400 hover:text-white"
                }
              >
                Home
              </Link>
              <Link
                href="/branding"
                className={
                  isActive("/branding")
                    ? "font-medium text-white"
                    : "text-gray-400 hover:text-white"
                }
              >
                Branding
              </Link>
              <Link
                href="/designs"
                className={
                  isActive("/designs")
                    ? "font-medium text-white"
                    : "text-gray-400 hover:text-white"
                }
              >
                Designs
              </Link>
              <div ref={dropdown3DRef}>
                <button
                  onClick={() => setIs3DDropdownOpen(!is3DDropdownOpen)}
                  className={`flex items-center ${
                    isActive("/3d")
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  3D
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {is3DDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/3d/visualization"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      3D Visualization
                    </Link>
                    <Link
                      href="/3d/animation"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      3D Animation
                    </Link>
                  </div>
                )}
              </div>
              <div ref={dropdownVFXRef}>
                <button
                  onClick={() => setIsVFXDropdownOpen(!isVFXDropdownOpen)}
                  className={`flex items-center ${
                    isActive("/vfx")
                      ? "font-medium text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  VFX
                  <ChevronDown size={16} className="ml-1" />
                </button>
                {isVFXDropdownOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <Link
                      href="/vfx/cgi"
                      className="block text-sm text-gray-300 hover:text-white"
                    >
                      CGI
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/about"
                className={
                  isActive("/about")
                    ? "font-medium text-white"
                    : "text-gray-400 hover:text-white"
                }
              >
                About
              </Link>
              <Link
                href="/contact"
                className={
                  isActive("/contact")
                    ? "font-medium text-white"
                    : "text-gray-400 hover:text-white"
                }
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
