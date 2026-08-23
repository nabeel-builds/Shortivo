"use client";

import Image from "next/image";
import { useTheme } from "../components/ThemeProvider";

export default function About() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`min-h-screen transition-colors duration-300 ${
        darkMode
          ? "bg-linear-to-b from-[#061a2a] via-[#0b2d43] to-[#061722] text-white"
          : "bg-linear-to-b from-[#eef7fd] via-[#dcecf7] to-[#c8e2f2] text-[#172f47]"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10 lg:py-20">

        <div className="mb-12 text-center">

          <p
            className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
              darkMode ? "text-[#55b8ff]" : "text-[#0877c9]"
            }`}
          >
            About Our Platform
          </p>

          <h1
            className={`text-4xl font-bold sm:text-5xl lg:text-6xl ${
              darkMode ? "text-white" : "text-[#123c60]"
            }`}
          >
            About Shortify
          </h1>

          <p
            className={`mx-auto mt-5 max-w-2xl text-base leading-7 sm:text-lg ${
              darkMode ? "text-[#b8cbd7]" : "text-[#40566b]"
            }`}
          >
            Simple links. Faster sharing. No unnecessary complexity.
          </p>

        </div>

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          <div>

            <div
              className={`rounded-xl border p-6 transition-all duration-300 sm:p-8 ${
                darkMode
                  ? "border-[#31566d] bg-linear-to-b from-[#17384d] to-[#0d2738] shadow-[0_6px_20px_rgba(0,0,0,0.45)]"
                  : "border-[#9dbbd0] bg-linear-to-b from-white/95 to-[#e8f2f8] shadow-[0_5px_18px_rgba(0,60,100,0.2)]"
              }`}
            >

              <h2
                className={`mb-5 text-2xl font-bold sm:text-3xl ${
                  darkMode ? "text-[#8dccff]" : "text-[#123c60]"
                }`}
              >
                Built to make sharing links easier
              </h2>

              <p
                className={`mb-5 leading-7 ${
                  darkMode ? "text-[#c3d4df]" : "text-[#40566b]"
                }`}
              >
                Shortify is a simple and reliable URL shortening platform
                designed for people who want to turn long, complicated links
                into short and memorable URLs in seconds.
              </p>

              <p
                className={`mb-5 leading-7 ${
                  darkMode ? "text-[#c3d4df]" : "text-[#40566b]"
                }`}
              >
                Whether you are sharing a link with your customers, posting
                it on social media, adding it to a project, or simply sending
                it to a friend, Shortify keeps the process quick and
                straightforward.
              </p>

              <p
                className={`leading-7 ${
                  darkMode ? "text-[#c3d4df]" : "text-[#40566b]"
                }`}
              >
                Our goal is simple: provide a fast, accessible and
                easy-to-use URL shortening experience without unnecessary
                complexity.
              </p>

            </div>

          </div>

          <div className="flex justify-center">

            <div
              className={`rounded-2xl border p-4 transition-all duration-300 ${
                darkMode
                  ? "border-[#31566d] bg-linear-to-b from-[#183b50] to-[#0d2636] shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
                  : "border-[#9dbbd0] bg-linear-to-b from-[#f9fdff] to-[#dcecf6] shadow-[0_8px_25px_rgba(0,60,100,0.25)]"
              }`}
            >

              <Image
                src="/About-Us-Page.png"
                width={550}
                height={550}
                alt="About Shortify"
                className="h-auto w-full max-w-125 object-contain"
              />

            </div>

          </div>

        </div>

        <div className="mt-16">

          <div className="mb-8 text-center">

            <h2
              className={`text-3xl font-bold sm:text-4xl ${
                darkMode ? "text-[#8dccff]" : "text-[#123c60]"
              }`}
            >
              Why Shortify?
            </h2>

            <p
              className={`mt-3 ${
                darkMode ? "text-[#b8cbd7]" : "text-[#40566b]"
              }`}
            >
              Everything you need to create and share shorter links.
            </p>

          </div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            <div
              className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-[#31566d] bg-linear-to-b from-[#17384d] to-[#0d2738] shadow-[0_5px_18px_rgba(0,0,0,0.4)] hover:shadow-[0_7px_22px_rgba(30,150,220,0.3)]"
                  : "border-[#9dbbd0] bg-linear-to-b from-white to-[#e5f1f8] shadow-[0_4px_12px_rgba(0,60,100,0.18)] hover:shadow-[0_7px_18px_rgba(0,100,170,0.3)]"
              }`}
            >


              <h3
                className={`mt-3 text-xl font-bold ${
                  darkMode ? "text-[#8dccff]" : "text-[#123c60]"
                }`}
              >
                Fast
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  darkMode ? "text-[#b8cbd7]" : "text-[#526b7d]"
                }`}
              >
                Create short links quickly without unnecessary steps or
                complicated setup.
              </p>

            </div>

            <div
              className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-[#31566d] bg-linear-to-b from-[#17384d] to-[#0d2738] shadow-[0_5px_18px_rgba(0,0,0,0.4)] hover:shadow-[0_7px_22px_rgba(30,150,220,0.3)]"
                  : "border-[#9dbbd0] bg-linear-to-b from-white to-[#e5f1f8] shadow-[0_4px_12px_rgba(0,60,100,0.18)] hover:shadow-[0_7px_18px_rgba(0,100,170,0.3)]"
              }`}
            >

              <h3
                className={`mt-3 text-xl font-bold ${
                  darkMode ? "text-[#8dccff]" : "text-[#123c60]"
                }`}
              >
                Simple
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  darkMode ? "text-[#b8cbd7]" : "text-[#526b7d]"
                }`}
              >
                A clean and intuitive interface that makes URL shortening
                accessible to everyone.
              </p>

            </div>

            <div
              className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-[#31566d] bg-linear-to-b from-[#17384d] to-[#0d2738] shadow-[0_5px_18px_rgba(0,0,0,0.4)] hover:shadow-[0_7px_22px_rgba(30,150,220,0.3)]"
                  : "border-[#9dbbd0] bg-linear-to-b from-white to-[#e5f1f8] shadow-[0_4px_12px_rgba(0,60,100,0.18)] hover:shadow-[0_7px_18px_rgba(0,100,170,0.3)]"
              }`}
            >


              <h3
                className={`mt-3 text-xl font-bold ${
                  darkMode ? "text-[#8dccff]" : "text-[#123c60]"
                }`}
              >
                Reliable
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  darkMode ? "text-[#b8cbd7]" : "text-[#526b7d]"
                }`}
              >
                Built with a reliable backend to keep your shortened links
                working when you need them.
              </p>

            </div>

            <div
              className={`rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                darkMode
                  ? "border-[#31566d] bg-linear-to-b from-[#17384d] to-[#0d2738] shadow-[0_5px_18px_rgba(0,0,0,0.4)] hover:shadow-[0_7px_22px_rgba(30,150,220,0.3)]"
                  : "border-[#9dbbd0] bg-linear-to-b from-white to-[#e5f1f8] shadow-[0_4px_12px_rgba(0,60,100,0.18)] hover:shadow-[0_7px_18px_rgba(0,100,170,0.3)]"
              }`}
            >


              <h3
                className={`mt-3 text-xl font-bold ${
                  darkMode ? "text-[#8dccff]" : "text-[#123c60]"
                }`}
              >
                Free to Use
              </h3>

              <p
                className={`mt-2 text-sm leading-6 ${
                  darkMode ? "text-[#b8cbd7]" : "text-[#526b7d]"
                }`}
              >
                Shorten and share links without unnecessary subscriptions or
                complicated pricing.
              </p>

            </div>

          </div>

        </div>

        <div
          className={`mt-16 rounded-xl border p-7 text-center transition-all duration-300 sm:p-10 ${
            darkMode
              ? "border-[#31566d] bg-linear-to-b from-[#15374b] to-[#0b2535] shadow-[0_6px_20px_rgba(0,0,0,0.45)]"
              : "border-[#7da9c4] bg-linear-to-b from-[#eaf6fd] to-[#cfe6f4] shadow-[0_5px_18px_rgba(0,60,100,0.2)]"
          }`}
        >

          <h2
            className={`text-2xl font-bold sm:text-3xl ${
              darkMode ? "text-[#8dccff]" : "text-[#123c60]"
            }`}
          >
            Our Mission
          </h2>

          <p
            className={`mx-auto mt-4 max-w-3xl text-sm leading-7 sm:text-base ${
              darkMode ? "text-[#b8cbd7]" : "text-[#40566b]"
            }`}
          >
            We are building Shortify with one simple idea — link sharing
            should be quick, clean and accessible. As the platform grows,
            we aim to introduce more useful tools that help individuals,
            developers and businesses manage their links more effectively.
          </p>

        </div>

      </div>
    </section>
  );
}