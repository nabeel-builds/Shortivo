"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";
import { useTheme } from "../components/ThemeProvider";

const Shorten = () => {

  const searchParams = useSearchParams();

const urlFromHome = searchParams.get("url");

  const [url, setUrl] = useState(urlFromHome || "");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

  


  const { darkMode } = useTheme();

    



  const generateUrl = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/url/shorten`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            url: url,
            shorturl: shorturl,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.message || "Something went wrong");
        return;
      }

      setGenerated(
        `${process.env.NEXT_PUBLIC_API_URL}/${shorturl}`
      );

      setUrl("");
      setShorturl("");

      toast.success("URL Generated Successfully");

    } catch (error) {
      console.error(error);
      toast.error("Unable to connect to server");
    }
  };

  return (
    <main
      className={`min-h-screen px-4 py-12 transition-colors duration-300 sm:px-6 sm:py-16 ${
        darkMode
          ? "bg-linear-to-b from-[#061a2a] via-[#0b2d43] to-[#061722]"
          : "bg-linear-to-b from-[#eef7fd] via-[#dcecf7] to-[#c8e2f2]"
      }`}
    >
      <div
        className={`mx-auto w-full max-w-xl rounded-xl border p-6 transition-all duration-300 sm:p-8 ${
          darkMode
            ? "border-[#45677c] bg-linear-to-b from-[#1b4056] to-[#102d3d] shadow-[0_8px_25px_rgba(0,0,0,0.5)]"
            : "border-[#91b3c9] bg-linear-to-b from-[#f9fdff] to-[#dcecf6] shadow-[0_8px_25px_rgba(0,60,100,0.25)]"
        }`}
      >

        <div
          className={`-mx-6 -mt-6 mb-6 flex items-center justify-center rounded-t-xl border-b px-4 py-3 sm:-mx-8 sm:-mt-8 ${
            darkMode
              ? "border-[#3c6075] bg-linear-to-b from-[#315d76] to-[#1d4054]"
              : "border-[#77a4c0] bg-linear-to-b from-[#d9edf9] to-[#a9cce2]"
          }`}
        >

          <h1
            className={`text-lg font-bold sm:text-xl ${
              darkMode ? "text-white" : "text-[#12344f]"
            }`}
          >
            Generate your short URL <span className="font-bold">↓</span>
          </h1>

     
        </div>

        <div className="flex flex-col gap-4">

          <div>

            <label
              className={`mb-2 block text-sm font-semibold ${
                darkMode ? "text-[#cfe3ef]" : "text-[#284a63]"
              }`}
            >
              Enter your URL
            </label>

            <input
              type="text"
              placeholder="https://example.com/your-long-url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className={`w-full rounded-md border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 ${
                darkMode
                  ? "border-[#527388] bg-[#0c2636] text-white focus:border-[#52b8ff] focus:ring-2 focus:ring-[#52b8ff]/30"
                  : "border-[#91afc1] bg-white text-[#172f47] focus:border-[#0877c9] focus:ring-2 focus:ring-[#0877c9]/20"
              }`}
            />

          </div>


          {/* Short URL Input */}
          <div>

            <label
              className={`mb-2 block text-sm font-semibold ${
                darkMode ? "text-[#cfe3ef]" : "text-[#284a63]"
              }`}
            >
              Preferred short URL
            </label>

            <input
              type="text"
              placeholder="Enter your preferred short URL text"
              value={shorturl}
              onChange={(e) => setShorturl(e.target.value)}
              className={`w-full rounded-md border px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 ${
                darkMode
                  ? "border-[#527388] bg-[#0c2636] text-white focus:border-[#52b8ff] focus:ring-2 focus:ring-[#52b8ff]/30"
                  : "border-[#91afc1] bg-white text-[#172f47] focus:border-[#0877c9] focus:ring-2 focus:ring-[#0877c9]/20"
              }`}
            />

          </div>


          <button
            onClick={generateUrl}
            className={`mt-1 w-full cursor-pointer rounded-md border px-5 py-3 font-bold text-white shadow-[0_3px_7px_rgba(0,0,0,0.3)] transition-all duration-200 hover:-translate-y-px ${
              darkMode
                ? "border-[#07538a] bg-linear-to-b from-[#168ed5] via-[#0872b9] to-[#05558d] hover:shadow-[0_0_15px_rgba(50,170,255,0.55)]"
                : "border-[#075aa4] bg-linear-to-b from-[#35a4f2] via-[#087bd1] to-[#0563b1] hover:shadow-[0_0_15px_rgba(0,140,255,0.5)]"
            }`}
          >
            Generate
          </button>

        </div>


        {generated && (
          <div
            className={`mt-6 rounded-lg border p-4 ${
              darkMode
                ? "border-[#41687d] bg-[#0d2939]"
                : "border-[#91b3c9] bg-linear-to-b from-white to-[#e8f2f8]"
            }`}
          >

            <p
              className={`mb-2 font-bold ${
                darkMode ? "text-[#8dccff]" : "text-[#123c60]"
              }`}
            >
              Your Shortened Link
            </p>

            <Link
              target="_blank"
              href={generated}
              className={`block break-all text-sm font-semibold underline transition ${
                darkMode
                  ? "text-[#62c2ff] hover:text-white"
                  : "text-[#0877c9] hover:text-[#00528d]"
              }`}
            >
              {generated}
            </Link>

          </div>
        )}

      </div>

    </main>
  );
};

export default Shorten;