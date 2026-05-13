"use client";

import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.name} logo`}
              width={130}
              height={40}
              className="h-11 w-auto brightness-110 drop-shadow-md"
              priority
            />
          </Link>

          <ul className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.map(({ label, href }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative text-sm font-medium text-white transition-all duration-300 group pb-1 px-1 ${
                      isActive ? "text-(--color-accent)" : "hover:text-white"
                    }`}
                  >
                    {label}

                    <span
                      className={`absolute bottom-0 left-0 h-[2.5px] bg-(--color-accent) transition-all duration-300 ease-out
                        ${isActive ? "w-full" : "w-0 group-hover:w-full"}`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <Link
            href="/contact"
            className="hidden lg:inline-flex items-center px-6 py-2.5 text-sm font-medium rounded-lg 
              bg-(--color-accent) hover:bg-(--color-accent-dark) 
              text-white transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
          >
            Get in Touch
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`block w-6 h-0.5 bg-white transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
              />
            </div>
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden mt-6 bg-black/90 backdrop-blur-md border-t border-white/10 py-6 rounded-2xl">
            <ul className="flex flex-col gap-2 px-6 text-white">
              {siteConfig.nav.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 hover:text-(--color-accent) transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-4">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center py-3.5 bg-(--color-accent) hover:bg-(--color-accent-dark) text-white rounded-xl transition-all hover:scale-105"
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}
