"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useTheme } from "./ThemeProvider";

const Navbar = () => {
  const { darkMode, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`relative z-50 border-b px-4 py-3 text-white transition-colors duration-300 sm:px-7 ${darkMode
          ? "border-[#062d4c] bg-linear-to-b from-[#075b96] via-[#043e6d] to-[#022b4c]"
          : "border-[#0d4e86] bg-linear-to-b from-[#1686df] via-[#086bc0] to-[#07559d]"
        }`}
    >
      {/* Navbar Main */}
      <div className="flex items-center justify-between gap-4">

        {/* Logo */}
        <Link
          href="/"
          onClick={closeMenu}
          className="flex items-center gap-2 text-xl font-bold sm:text-2xl"
        >
          <img
            width={40}
            height={40}
            src="/ShortivoLogo.png"
            alt="Shortivo"
            className="h-10 w-10 object-contain"
          />

          <span>Shortivo</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 md:flex">

          <Link
            href="/"
            className="rounded-md px-4 py-2 text-sm font-medium transition hover:bg-white/15"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="rounded-md px-4 py-2 text-sm font-medium transition hover:bg-white/15"
          >
            About
          </Link>

          <Link
            href="/shorten"
            className="rounded-md px-4 py-2 text-sm font-medium transition hover:bg-white/15"
          >
            Shorten
          </Link>

          <Link
            href="/contact"
            className="rounded-md px-4 py-2 text-sm font-medium transition hover:bg-white/15"
          >
            Contact Me
          </Link>
        </div>

        <div className="hidden items-center gap-2 sm:flex">

          <Link href="/shorten">
            <button
              className={`cursor-pointer rounded-md border px-4 py-2 text-sm font-bold shadow-md transition ${darkMode
                  ? "border-[#51738d] bg-linear-to-b from-[#e1edf4] to-[#aebfca] text-[#12283a] hover:from-white hover:to-[#c4d5df]"
                  : "border-[#b6cddd] bg-linear-to-b from-white to-[#d9e6ef] text-[#17304b] hover:from-white hover:to-[#c9dce9]"
                }`}
            >
              Try Now
            </button>
          </Link>

          <Link
            href="https://github.com/nabeel-builds"
            target="_blank"
          >
            <button
              className={`cursor-pointer rounded-md border px-4 py-2 text-sm font-bold shadow-md transition ${darkMode
                  ? "border-[#51738d] bg-linear-to-b from-[#e1edf4] to-[#aebfca] text-[#12283a] hover:from-white hover:to-[#c4d5df]"
                  : "border-[#b6cddd] bg-linear-to-b from-white to-[#d9e6ef] text-[#17304b] hover:from-white hover:to-[#c9dce9]"
                }`}
            >
              GitHub
            </button>
          </Link>

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-md border border-white/30 bg-white/10 transition hover:bg-white/20"
          >
            {darkMode ? (
              <img
                src="/sun.png"
                alt="Light Mode"
                className="h-5 w-5 object-contain"
              />
            ) : (
              <img
                src="/moon.png"
                alt="Dark Mode"
                className="h-5 w-5 object-contain"
              />
            )}
          </button>
        </div>

        <div className="flex items-center gap-2 md:hidden">

          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex h-9 w-10 cursor-pointer items-center justify-center rounded-md border border-white/30 bg-white/10 transition hover:bg-white/20"
          >
            {darkMode ? (
              <img
                src="/sun.png"
                alt="Light Mode"
                className="h-5 w-5 object-contain"
              />
            ) : (
              <img
                src="/moon.png"
                alt="Dark Mode"
                className="h-5 w-5 object-contain"
              />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-9 w-10 cursor-pointer flex-col items-center justify-center gap-[5px] rounded-md border border-white/30 bg-white/10 transition hover:bg-white/20"
          >

            <span
              className={`block h-[2px] w-6 rounded bg-white transition-all duration-300 ${menuOpen
                  ? "translate-y-[7px] rotate-45"
                  : ""
                }`}
            />

            <span
              className={`block h-[2px] w-6 rounded bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : "opacity-100"
                }`}
            />


            <span
              className={`block h-[2px] w-6 rounded bg-white transition-all duration-300 ${menuOpen
                  ? "-translate-y-[7px] -rotate-45"
                  : ""
                }`}
            />
          </button>
        </div>
      </div>

      <div
        className={`absolute left-0 top-full w-full overflow-hidden border-b transition-all duration-300 md:hidden ${darkMode
            ? "border-[#062d4c] bg-linear-to-b from-[#075b96] to-[#022b4c]"
            : "border-[#0d4e86] bg-linear-to-b from-[#1686df] to-[#07559d]"
          } ${menuOpen
            ? "max-h-[500px] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col px-4 pb-5 pt-3">

          <Link
            href="/"
            onClick={closeMenu}
            className="border-b border-white/20 py-3 text-sm font-medium transition hover:bg-white/10 hover:pl-2"
          >
            Home
          </Link>

          <Link
            href="/about"
            onClick={closeMenu}
            className="border-b border-white/20 py-3 text-sm font-medium transition hover:bg-white/10 hover:pl-2"
          >
            About
          </Link>

          <Link
            href="/shorten"
            onClick={closeMenu}
            className="border-b border-white/20 py-3 text-sm font-medium transition hover:bg-white/10 hover:pl-2"
          >
            Shorten
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="border-b border-white/20 py-3 text-sm font-medium transition hover:bg-white/10 hover:pl-2"
          >
            Contact Me
          </Link>

          <div className="mt-4 flex gap-2">

            <Link
              href="/shorten"
              onClick={closeMenu}
              className="flex-1"
            >
              <button
                className={`w-full cursor-pointer rounded-md border px-4 py-2 text-sm font-bold shadow-md transition ${darkMode
                    ? "border-[#51738d] bg-linear-to-b from-[#e1edf4] to-[#aebfca] text-[#12283a] hover:from-white hover:to-[#c4d5df]"
                    : "border-[#b6cddd] bg-linear-to-b from-white to-[#d9e6ef] text-[#17304b] hover:from-white hover:to-[#c9dce9]"
                  }`}
              >
                Try Now
              </button>
            </Link>

            <Link
              href="https://github.com/nabeel-builds"
              target="_blank"
              onClick={closeMenu}
              className="flex-1"
            >
              <button
                className={`w-full cursor-pointer rounded-md border px-4 py-2 text-sm font-bold shadow-md transition ${darkMode
                    ? "border-[#51738d] bg-linear-to-b from-[#e1edf4] to-[#aebfca] text-[#12283a] hover:from-white hover:to-[#c4d5df]"
                    : "border-[#b6cddd] bg-linear-to-b from-white to-[#d9e6ef] text-[#17304b] hover:from-white hover:to-[#c9dce9]"
                  }`}
              >
                GitHub
              </button>
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;