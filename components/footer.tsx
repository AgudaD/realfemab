"use client";

import { FaInstagram, FaLinkedin, FaTwitter, FaTiktok } from "react-icons/fa";

import { Button } from "./button";

export default function Footer() {
  return (
    <footer className="bg-(--background) text-zinc-300 border-t border-zinc-800 px-6 lg:px-12 py-16 cursor-pointer">
      <div className="max-w-7xl mx-auto grid gap-12 md:grid-cols-4">
        <div className="space-y-4 md:col-span-1">
          <h2 className="text-accent text-xl font-semibold">
            FEMAB PROPERTIES LIMITED
          </h2>

          <p className="text-sm leading-relaxed text-zinc-400">
            A pre-eminent focused property company with a large, well-balanced
            portfolio comprised of residential, commercial and mixed-use
            properties.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-white font-semibold">About Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">About Us</li>
            <li className="hover:text-white transition">Our Services</li>
            <li className="hover:text-white transition">Leadership</li>
            <li className="hover:text-white transition">Contact Us</li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-white font-semibold">Subsidiaries</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white transition">HONGYANG</li>
            <li className="hover:text-white transition">CRYSTAL BLOCKS</li>
            <li className="hover:text-white transition">ALLIANCE MORTGAGE</li>
            <li className="hover:text-white transition">
              SFA LOGISTICS QUARRIES
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="text-white font-semibold">Newsletter</h3>

          <p className="text-sm text-zinc-400">
            Signup to get updates, information, news & insight about Femab.
          </p>

          <div className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-zinc-500"
            />

            <Button className="w-full">Subscribe</Button>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-zinc-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-zinc-500">
        <p>
          © {new Date().getFullYear()} Femab Properties Limited. All rights
          reserved.
        </p>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="hover:text-white transition"
            aria-label="TikTok"
          >
            <FaTiktok size={18} />
          </a>

          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Twitter"
          >
            <FaTwitter size={18} />
          </a>

          <a
            href="#"
            className="hover:text-white transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={18} />
          </a>

          <a
            href="#"
            className="hover:text-white transition"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}
