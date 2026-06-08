'use client'
import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons

export default function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "HOME",
    "ABOUT US",
    "INSTRUMENTS",
    "BRANDS",
    "SHOP",
    "ORDER TRACKING",
    "COMPLAINTS",
    "CONTACT US",
  ];

  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="container mx-auto px-5">
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 py-3">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-sm font-medium text-foreground transition-colors duration-200
                         hover:text-brand-primary
                         after:absolute after:left-0 after:-bottom-2 after:w-full
                         after:border-b-2 after:border-brand-primary after:scale-x-0
                         hover:after:scale-x-100 after:transition-transform after:duration-200
                         after:origin-center"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="flex items-center justify-between md:hidden py-3">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6 border border-[#ddd]" /> : <Menu className="w-6 h-6 border border-[#ddd]" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="flex flex-col space-y-4 py-4 md:hidden">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium text-foreground hover:text-brand-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
