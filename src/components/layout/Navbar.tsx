"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { cn } from "@/lib/utils";
import { scrollToSection } from "@/lib/scroll";

export interface NavbarProps {
  brandName?: string;
  navItems?: typeof siteConfig.navigation.mainNav;
  ctaText?: string;
  ctaHref?: string;
  phone?: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  brandName = siteConfig.brand.name,
  navItems = siteConfig.navigation.mainNav,
  ctaText = siteConfig.navigation.ctaNav.label,
  ctaHref = siteConfig.navigation.ctaNav.href,
  phone = siteConfig.contact.phoneFormatted,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setMobileMenuOpen(false);
  }

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Graceful anchor scroll handler for current & future sections
  const handleNavClick = (
    e: React.MouseEvent<HTMLElement>,
    href: string,
    options?: { plan?: string }
  ) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setMobileMenuOpen(false);
      scrollToSection(href, options);
      // Double trigger on next frame after drawer unmounts/hides to guarantee exact scroll alignment
      requestAnimationFrame(() => {
        scrollToSection(href, options);
      });
    } else {
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-out",
        isScrolled
          ? "bg-bg-main/92 backdrop-blur-md border-b border-border-subtle shadow-2xl py-3.5"
          : "bg-gradient-to-b from-black/85 via-black/40 to-transparent border-b border-transparent py-5"
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Componentized Brand Logo */}
        <BrandLogo
          name={brandName}
          location={siteConfig.contact.locationLabel}
          href="#hero"
          size="md"
        />

        {/* Desktop Navigation Links */}
        <nav
          className="hidden xl:flex items-center gap-7 2xl:gap-8"
          aria-label="Main Navigation"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="font-display uppercase text-xs 2xl:text-[13px] tracking-widest font-bold text-text-secondary hover:text-white transition-colors duration-150 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-brand-red hover:after:w-full after:transition-all after:duration-200"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop / Tablet CTA & Mobile Hamburger */}
        <div className="flex items-center gap-3.5">
          <div className="hidden sm:flex items-center">
            <Button
              href={ctaHref}
              variant="primary"
              size="sm"
              className="h-10 px-5 text-xs tracking-widest"
              rightIcon={<ChevronRight className="w-3.5 h-3.5" />}
              onClick={(e) => handleNavClick(e, ctaHref)}
            >
              {ctaText}
            </Button>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden inline-flex items-center justify-center p-2.5 rounded-xs bg-surface-charcoal/90 border border-border-subtle text-text-primary hover:text-white hover:border-border-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red transition-colors"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red" />
            ) : (
              <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Navigation Drawer / Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 w-full h-[calc(100dvh-70px)] bg-bg-main/98 backdrop-blur-2xl z-50 border-t border-border-subtle overflow-y-auto flex flex-col justify-between p-6 pb-12 shadow-2xl">
          <nav className="flex flex-col space-y-1 pt-2" aria-label="Mobile Navigation">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="font-display uppercase text-xl sm:text-2xl font-bold tracking-wider text-text-secondary hover:text-white hover:text-brand-red transition-colors py-3 border-b border-border-subtle/30 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <ChevronRight className="w-4 h-4 text-brand-red/70" />
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-6 border-t border-border-subtle space-y-4">
            <Button
              href={ctaHref}
              variant="primary"
              size="lg"
              fullWidth
              onClick={(e) => handleNavClick(e, ctaHref)}
            >
              {ctaText}
            </Button>

            <div className="flex flex-col items-center justify-center text-center text-xs text-text-secondary pt-2 space-y-1">
              <span className="font-display uppercase tracking-widest text-text-muted">
                Location & Support
              </span>
              <a
                href={`tel:${phone}`}
                className="text-white font-bold text-sm hover:text-brand-red"
              >
                {phone}
              </a>
              <span className="text-[11px] text-text-muted">
                {siteConfig.contact.address.street}, {siteConfig.contact.locationLabel}
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
