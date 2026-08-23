"use client";

import { Poppins } from "next/font/google";
import Link from "next/link";
import {  useState } from "react";
import { useTheme } from "./components/ThemeProvider";
import { useRouter } from "next/navigation";
import { RiClipboardFill } from "@remixicon/react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

function Home() {

  const [homeUrl, setHomeUrl] = useState("")
  const { darkMode } = useTheme();
  const router = useRouter()

  return (
    <main
      className={`${poppins.className} min-h-screen transition-colors duration-300 ${darkMode
        ? "bg-linear-to-b from-[#020b18] via-[#071b31] to-[#0b1625] text-white"
        : "bg-linear-to-b from-[#0875d1] via-[#dcecf8] to-[#eef5fa] text-[#102b49]"
        }`}
    >
      {/* MAIN WINDOW */}
      <div className="min-h-screen p-2 sm:p-4 lg:p-5">
        <div
          className={`mx-auto min-h-[calc(100vh-2rem)] max-w-362.5 overflow-hidden rounded-[18px] border-2 shadow-[0_0_35px_rgba(0,0,0,0.35)] transition-colors duration-300 ${darkMode
            ? "border-[#24577f] bg-[#101c2b]"
            : "border-[#164d7b] bg-[#edf4fa]"
            }`}
        >
          <section
            className={`px-4 py-8 transition-colors duration-300 sm:px-7 sm:py-10 lg:px-12 lg:py-12 ${darkMode
              ? "bg-linear-to-b from-[#101d2d] to-[#0b1420]"
              : "bg-linear-to-b from-[#f7fbfe] to-[#e7f0f7]"
              }`}
          >
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-8">
              <div className="flex flex-col justify-center">
                <h1
                  className={`max-w-xl text-4xl font-bold leading-[1.12] sm:text-5xl lg:text-[54px] ${darkMode
                    ? "text-white"
                    : "text-[#102b49]"
                    }`}
                >
                  The Smarter Way to Shorten Your URLs.
                </h1>

                <div
                  className={`my-6 h-px w-full max-w-xl ${darkMode
                    ? "bg-[#36556d]"
                    : "bg-[#9db9cf]"
                    }`}
                />

                <p
                  className={`max-w-xl text-sm leading-7 sm:text-base ${darkMode
                    ? "text-[#c3d2df]"
                    : "text-[#172f47]"
                    }`}
                >
                  Turn long and complicated links into short, clean, and memorable URLs in seconds. Shortivo makes link sharing simple, fast, and accessible — without unnecessary complexity.
                </p>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">

                  <Link href="/shorten">
                    <button className="flex w-full items-center justify-center gap-2 rounded-md border border-[#075aa4] bg-linear-to-b from-[#35a4f2] via-[#087bd1] to-[#0563b1] px-2 py-1 cursor-pointer font-bold text-white shadow-[0_2px_5px_rgba(0,0,0,0.3)] transition hover:from-[#45aff7] hover:to-[#0868bb] sm:w-auto">
                      {/* ICON PLACEHOLDER */}
                      <span className="flex items-center"><img height={60} width={60} src="/Windows7.svg" alt="" /> <h1 className="">Try Now</h1></span>
                    </button>
                  </Link>

                  <Link
                    href="https://github.com/nabeel-builds"
                    target="_blank"
                  >
                    <button
                      className={`flex w-full items-center justify-center gap-2 rounded-md border px-2 py-1 cursor-pointer font-bold shadow-[0_2px_5px_rgba(0,0,0,0.2)] transition sm:w-auto ${darkMode
                        ? "border-[#587185] bg-linear-to-b from-[#344b5d] to-[#202f3b] text-white hover:from-[#405a6d] hover:to-[#293b49]"
                        : "border-[#8d9ba7] bg-linear-to-b from-white to-[#d9e1e6] text-[#172f47] hover:from-white hover:to-[#cbd6de]"
                        }`}
                    >
                      <span className="flex items-center"><img height={60} width={60} className={darkMode ? "invert" : ""} src="./GithubLogo.svg" alt="" /><h1>GitHub</h1></span>
                    </button>
                  </Link>

                </div>
              </div>

              <div
                className={`rounded-[10px] border-2 shadow-[0_4px_12px_rgba(0,0,0,0.25)] ${darkMode
                  ? "border-[#3c5d75] bg-linear-to-b from-[#1c2d3d] to-[#111d29]"
                  : "border-[#7898b2] bg-linear-to-b from-[#f9fcff] to-[#e6eef5]"
                  }`}
              >
                <div
                  className={`flex h-12 items-center justify-between border-b px-4 ${darkMode
                    ? "border-[#45657c] bg-linear-to-b from-[#3d617c] to-[#253f53]"
                    : "border-[#83a7c5] bg-linear-to-b from-[#d8ecfb] to-[#a9c9e2]"
                    }`}
                >

                  <span
                    className={`text-base font-semibold sm:text-lg ${darkMode ? "text-white" : "text-[#102b49]"
                      }`}
                  >
                    New Shorten
                  </span>

                  <div className="flex gap-1">

                    <button
                      aria-label="Minimize"
                      className={`group relative flex h-7 w-9 items-center justify-center overflow-hidden rounded-sm border transition-all duration-200
                        ${darkMode
                          ? "border-[#3f6988] bg-linear-to-b from-[#4f7d9d] via-[#315b79] to-[#24455d]"
                          : "border-[#5d88a8] bg-linear-to-b from-[#dff3ff] via-[#a8d1eb] to-[#75a9ca]"
                        } shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_1px_3px_rgba(0,0,0,0.35)cursor-pointer hover:border-[#168fe0] hover:bg-linear-to-b hover:from-[#69c5ff] hover:via-[#2099df] hover:to-[#0872b8] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_0_12px_rgba(0,145,255,0.85),0_2px_5px_rgba(0,0,0,0.4)] active:scale-[0.96]`}
                    >
                      <span
                        className="pointer-events-none cursor-pointer absolute left-0 top-0 h-1/2 w-full bg-linear-to-b from-white/50 to-transparent opacity-80"
                      />
                      <span
                        className=" relative z-10 h-0.75 w-[12px] rounded-full cursor-pointer bg-white shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 group-hover:w-[14px] group-hover:shadow-[0_0_5px_rgba(255,255,255,0.9)]"
                      />
                    </button>

                    <button
                      aria-label="Close"
                      className=" group relative flex h-7 w-9 items-center justify-center cursor-pointer overflow-hidden rounded-[4px] border border-[#a9362c] bg-linear-to-b from-[#ff8b7b] via-[#ed4b3c] to-[#c92f25] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_3px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-[#ff6b5b] hover:from-[#ff9d91] hover:via-[#ff4b3d] hover:to-[#d72d22] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_0_12px_rgba(255,60,45,0.8),0_2px_5px_rgba(0,0,0,0.4)] active:scale-[0.96]"
                    >
                      <span
                        className=" pointer-events-none absolute left-0 top-0 h-1/2 w-full bg-linear-to-b from-white/40 to-transparent opacity-80"
                      />
                      <span
                        className="relative z-10 text-[22px] font-bold leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-110"
                      >
                        ×
                      </span>
                    </button>

                  </div>
                </div>
                <div className="p-5 sm:p-8">

                  <div className="flex items-center gap-3">

                    <div className="h-12 w-12 shrink-0" />

                    <label
                      className={`text-sm font-semibold sm:text-lg ${darkMode ? "text-white" : "text-[#102b49]"
                        }`}
                    >
                      Enter a URL to shorten:
                    </label>

                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">

                    <input
                      type="url"
                      placeholder="Enter you url here"
                      value={homeUrl}
                      onChange={(e)=>setHomeUrl(e.target.value)}
                      className={`h-14 min-w-0 flex-1 rounded-md border-2 px-4 text-sm outline-none shadow-inner transition sm:text-base ${darkMode
                        ? "border-[#526b7e] bg-[#0b1622] text-white focus:border-[#2495e8]"
                        : "border-[#a9bac8] bg-white text-[#172f47] focus:border-[#187dcc]"
                        }`}
                    />

                    <button 
                      className={`flex h-14 items-center justify-center gap-2 rounded-md border px-7 font-semibold cursor-pointer shadow-sm transition ${darkMode
                        ? "border-[#536979] bg-linear-to-b from-[#506675] to-[#334652] text-white hover:from-[#607684] hover:to-[#3d515e]"
                        : "border-[#7e8e9b] bg-linear-to-b from-white to-[#d9e1e7] text-[#172f47] hover:from-white hover:to-[#cbd7df]"
                        }`}
                        onClick={() => {
                          if(!homeUrl.trim()) return
                          router.push(
                            `/shorten?url=${encodeURIComponent(homeUrl)}`
                          )
                        }}
                    >
                      Shorten
                      <span>→</span>
                    </button>

                  </div>
                </div>
              </div>
            </div>
            <div
              className={`mt-8 rounded-[10px] border-2 shadow-[0_4px_12px_rgba(0,0,0,0.25)] ${darkMode
                ? "border-[#3c5d75] bg-linear-to-b from-[#1c2d3d] to-[#111d29]"
                : "border-[#7898b2] bg-linear-to-b from-[#f9fcff] to-[#e6eef5]"
                }`}
            >
              <div
                className={`flex h-12 items-center justify-between border-b px-4 ${darkMode
                  ? "border-[#45657c] bg-linear-to-b from-[#3d617c] to-[#253f53]"
                  : "border-[#83a7c5] bg-linear-to-b from-[#d8ecfb] to-[#a9c9e2]"
                  }`}
              >

                <div className="flex items-center gap-2">
                  <div className="h-7 w-7" />

                  <span
                    className={`text-base font-semibold sm:text-lg ${darkMode ? "text-white" : "text-[#102b49]"
                      }`}
                  >
                    Your Shortened URL
                  </span>

                </div>

                <div className="flex gap-1">

                  <button
                    aria-label="Minimize"
                    className={`group relative flex h-7 w-9 cursor-pointer items-center justify-center overflow-hidden rounded-[4px] border transition-all duration-200
                        ${darkMode
                        ? "border-[#3f6988] bg-linear-to-b from-[#4f7d9d] via-[#315b79] to-[#24455d]"
                        : "border-[#5d88a8] bg-linear-to-b from-[#dff3ff] via-[#a8d1eb] to-[#75a9ca]"
                      } shadow-[inset_0_1px_1px_rgba(255,255,255,0.75),0_1px_3px_rgba(0,0,0,0.35)cursor-pointer hover:border-[#168fe0] hover:bg-linear-to-b hover:from-[#69c5ff] hover:via-[#2099df] hover:to-[#0872b8] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),0_0_12px_rgba(0,145,255,0.85),0_2px_5px_rgba(0,0,0,0.4)] active:scale-[0.96]`}
                  >
                    {/* Aero glossy highlight */}
                    <span
                      className="pointer-events-none cursor-pointer absolute left-0 top-0 h-1/2 w-full bg-linear-to-b from-white/50 to-transparent opacity-80"
                    />

                    {/* Minimize line */}
                    <span
                      className=" relative z-10 h-[3px] w-[12px] rounded-full cursor-pointer bg-white shadow-[0_1px_2px_rgba(0,0,0,0.5)] transition-all duration-200 group-hover:w-[14px] group-hover:shadow-[0_0_5px_rgba(255,255,255,0.9)]"
                    />
                  </button>

                  <button
                    aria-label="Close"
                    className=" group relative flex h-7 w-9 items-center justify-center cursor-pointer overflow-hidden rounded-sm border border-[#a9362c] bg-linear-to-b from-[#ff8b7b] via-[#ed4b3c] to-[#c92f25] shadow-[inset_0_1px_1px_rgba(255,255,255,0.7),0_1px_3px_rgba(0,0,0,0.35)] transition-all duration-200 hover:border-[#ff6b5b] hover:from-[#ff9d91] hover:via-[#ff4b3d] hover:to-[#d72d22] hover:shadow-[inset_0_1px_2px_rgba(255,255,255,0.8),0_0_12px_rgba(255,60,45,0.8),0_2px_5px_rgba(0,0,0,0.4)] active:scale-[0.96]"
                  >
                    <span
                      className="pointer-events-none absolute left-0 top-0 h-1/2 w-full bg-linear-to-b from-white/40 to-transparent opacity-80"
                    />
                    <span
                      className="relative z-10 text-[22px] font-bold leading-none text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.45)] transition-transform duration-200 group-hover:scale-110"
                    >
                      ×
                    </span>
                  </button>

                </div>
              </div>
              <div className="p-5 sm:p-7">

                <div className="grid grid-cols-1 gap-5 sm:grid-cols-[80px_1fr]">

                  <div className="hidden h-20 w-20 sm:block" />

                  <div className="min-w-0">

                    <p
                      className={`text-sm font-semibold sm:text-base ${darkMode ? "text-white" : "text-[#102b49]"
                        }`}
                    >
                      Original URL:
                    </p>

                    <a
                      href="#"
                      className={`mt-1 block max-w-full truncate text-sm underline sm:text-base ${darkMode
                        ? "text-[#52b3ff]"
                        : "text-[#0969c5]"
                        }`}
                    >
                      https://stackoverflow.com/questions/123456
                    </a>

                    <div
                      className={`my-4 h-px ${darkMode
                        ? "bg-[#344e62]"
                        : "bg-[#a8bac9]"
                        }`}
                    />

                    <p
                      className={`text-sm font-semibold sm:text-base ${darkMode ? "text-white" : "text-[#102b49]"
                        }`}
                    >
                      Shortened URL:
                    </p>

                    <div className="mt-2 flex flex-col gap-3 sm:flex-row">

                      <input
                        readOnly
                        value="http://shortivo.in/abc123"
                        className={`h-12 min-w-0 flex-1 rounded-md border-2 px-3 font-semibold outline-none ${darkMode
                          ? "border-[#526b7e] bg-[#0b1622] text-[#5db9ff]"
                          : "border-[#9eb2c2] bg-[#f7fbfe] text-[#075da9]"
                          }`}
                      />

                      <div className="flex gap-2">

                        <button
                          className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-md border px-5 font-semibold cursor-pointer shadow-sm transition sm:flex-none ${darkMode
                            ? "border-[#536979] bg-linear-to-b from-[#506675] to-[#334652] text-white hover:from-[#607684] hover:to-[#3d515e]"
                            : "border-[#8799a7] bg-linear-to-b from-white to-[#d9e1e7] text-[#172f47] hover:to-[#cbd7df]"
                            }`}
                        >
                          <span className="flex"><RiClipboardFill /><h1>Copy</h1></span>
                        </button>

                        <button
                          className={`flex h-12 flex-1 items-center justify-center gap-2 rounded-md border px-5 font-semibold cursor-pointer shadow-sm transition sm:flex-none ${darkMode
                            ? "border-[#536979] bg-linear-to-b from-[#506675] to-[#334652] text-white hover:from-[#607684] hover:to-[#3d515e]"
                            : "border-[#8799a7] bg-linear-to-b from-white to-[#d9e1e7] text-[#172f47] hover:to-[#cbd7df]"
                            }`}
                        >
                          Open
                          <span>→</span>
                        </button>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

          </section>
          <footer
            className={`border-t px-4 py-4 text-center text-xs ${darkMode
              ? "border-[#30495d] bg-linear-to-b from-[#172738] to-[#101b27] text-[#9eb4c5]"
              : "border-[#9bb3c6] bg-linear-to-b from-[#e6f0f7] to-[#c7d8e5] text-[#40576b]"
              }`}
          >
            Shortivo © 2026 — Simple. Fast. No Account Required.
          </footer>

        </div>
      </div>
    </main>
  );
}

export default Home