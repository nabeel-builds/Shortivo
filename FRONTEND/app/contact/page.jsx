"use client";

import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "../components/ThemeProvider";

export default function Contact() {
  const { darkMode } = useTheme();

  return (
    <section
      className={`min-h-screen px-5 py-12 transition-colors duration-300 sm:px-8 sm:py-16 lg:px-10 lg:py-20 ${
        darkMode
          ? "bg-linear-to-b from-[#061a2a] via-[#0b2d43] to-[#061722]"
          : "bg-linear-to-b from-[#eef7fd] via-[#dcecf7] to-[#c8e2f2]"
      }`}
    >
      <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl items-center justify-center">

        <div
          className={`w-full overflow-hidden rounded-2xl border transition-all duration-300 ${
            darkMode
              ? "border-[#3e6278] bg-linear-to-b from-[#183c51] to-[#0d2738] shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
              : "border-[#8eafc3] bg-linear-to-b from-[#ffffff] to-[#e7f2f8] shadow-[0_10px_30px_rgba(0,60,100,0.25)]"
          }`}
        >

          <div
            className={`flex items-center justify-between border-b px-4 py-3 sm:px-5 ${
              darkMode
                ? "border-[#3e6278] bg-linear-to-b from-[#315e77] to-[#204358]"
                : "border-[#83a9c0] bg-linear-to-b from-[#dceef9] to-[#a9cce2]"
            }`}
          >

            <div
              className={`text-sm font-semibold sm:text-base ${
                darkMode ? "text-white" : "text-[#17364f]"
              }`}
            >
              Shortivo - Contact
            </div>

          </div>

          <div className="px-5 py-10 sm:px-10 sm:py-14 lg:px-16">


            <div className="mb-10 text-center">

              <p
                className={`mb-2 text-sm font-semibold uppercase tracking-widest ${
                  darkMode ? "text-[#5fc1ff]" : "text-[#0877c9]"
                }`}
              >
                Get In Touch
              </p>

              <h1
                className={`text-4xl font-bold sm:text-5xl ${
                  darkMode ? "text-white" : "text-[#123c60]"
                }`}
              >
                Contact Shortify
              </h1>

              <p
                className={`mx-auto mt-4 max-w-2xl text-sm leading-7 sm:text-base ${
                  darkMode ? "text-[#bfd1dc]" : "text-[#526b7d]"
                }`}
              >
                Have a question, feedback, or an idea for Shortify?
                Feel free to connect with me. I am always open to feedback,
                suggestions, collaborations, and new opportunities.
              </p>

            </div>

            <div className="grid gap-5 md:grid-cols-2">

              <a
                href="https://github.com/nabeel-builds"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-[#41677d] bg-linear-to-b from-[#1c455b] to-[#122f40] shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:border-[#5dbdff] hover:shadow-[0_0_18px_rgba(50,170,255,0.3)]"
                    : "border-[#9bb8ca] bg-linear-to-b from-[#f9fdff] to-[#dcecf6] shadow-[0_5px_15px_rgba(0,60,100,0.18)] hover:border-[#1689d8] hover:shadow-[0_0_18px_rgba(0,130,220,0.3)]"
                }`}
              >

                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border transition ${
                    darkMode
                      ? "border-[#55788c] bg-[#0c2636]"
                      : "border-[#9bb5c5] bg-white"
                  }`}
                >
                  <FaGithub
                    className={`text-4xl ${
                      darkMode ? "text-white" : "text-[#172f47]"
                    }`}
                  />
                </div>

                <div className="min-w-0">

                  <h2
                    className={`text-xl font-bold sm:text-2xl ${
                      darkMode ? "text-white" : "text-[#17364f]"
                    }`}
                  >
                    GitHub
                  </h2>

                  <p
                    className={`mt-1 break-all text-sm ${
                      darkMode ? "text-[#9fc0d1]" : "text-[#526b7d]"
                    }`}
                  >
                    github.com/nabeel-builds
                  </p>

                  <p
                    className={`mt-2 text-xs font-semibold ${
                      darkMode ? "text-[#5fc1ff]" : "text-[#0877c9]"
                    }`}
                  >
                    View my projects →
                  </p>

                </div>

              </a>

              <a
                href="https://www.linkedin.com/in/nabeel-ahmad-6b4133413/"
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-5 rounded-xl border p-6 transition-all duration-300 hover:-translate-y-1 ${
                  darkMode
                    ? "border-[#41677d] bg-linear-to-b from-[#1c455b] to-[#122f40] shadow-[0_5px_15px_rgba(0,0,0,0.35)] hover:border-[#5dbdff] hover:shadow-[0_0_18px_rgba(50,170,255,0.3)]"
                    : "border-[#9bb8ca] bg-linear-to-b from-[#f9fdff] to-[#dcecf6] shadow-[0_5px_15px_rgba(0,60,100,0.18)] hover:border-[#1689d8] hover:shadow-[0_0_18px_rgba(0,130,220,0.3)]"
                }`}
              >

                <div
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-lg border ${
                    darkMode
                      ? "border-[#55788c] bg-[#0c2636]"
                      : "border-[#9bb5c5] bg-white"
                  }`}
                >
                  <FaLinkedin className="text-4xl text-[#0a66c2]" />
                </div>

                <div className="min-w-0">

                  <h2
                    className={`text-xl font-bold sm:text-2xl ${
                      darkMode ? "text-white" : "text-[#17364f]"
                    }`}
                  >
                    LinkedIn
                  </h2>

                  <p
                    className={`mt-1 break-all text-sm ${
                      darkMode ? "text-[#9fc0d1]" : "text-[#526b7d]"
                    }`}
                  >
                    linkedin.com/in/nabeel-ahmad
                  </p>

                  <p
                    className={`mt-2 text-xs font-semibold ${
                      darkMode ? "text-[#5fc1ff]" : "text-[#0877c9]"
                    }`}
                  >
                    Let&apos;s connect →
                  </p>

                </div>

              </a>

            </div>

            <div
              className={`mt-8 rounded-xl border p-5 text-center ${
                darkMode
                  ? "border-[#3e6278] bg-[#0c293a]"
                  : "border-[#a3bfce] bg-[#edf7fc]"
              }`}
            >

              <p
                className={`text-sm leading-6 sm:text-base ${
                  darkMode ? "text-[#bfd1dc]" : "text-[#526b7d]"
                }`}
              >
                Interested in collaborating, discussing a project, or
                sharing feedback about Shortify?
                <span
                  className={`ml-1 font-semibold ${
                    darkMode ? "text-[#5fc1ff]" : "text-[#0877c9]"
                  }`}
                >
              I&apos;d love to hear from you
                </span>
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}