"use client";

import React, { Suspense, useState } from "react";
import Link from "next/link";
import { toast } from "react-toastify";
import { useSearchParams } from "next/navigation";

const ShortenForm = () => {
  const searchParams = useSearchParams();

  const urlFromHome = searchParams.get("url");

  const [url, setUrl] = useState(urlFromHome || "");
  const [shorturl, setShorturl] = useState("");
  const [generated, setGenerated] = useState("");

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
    <div
      className="
        mx-auto my-16 flex max-w-lg flex-col gap-4 rounded-xl
        border border-[#9dbbd0]
        bg-gradient-to-b from-white to-[#e5f1f8]
        p-8
        shadow-[0_6px_20px_rgba(0,60,100,0.2)]
      "
    >
      <h1 className="text-2xl font-bold text-[#123c60]">
        Generate your short URLs
      </h1>

      <div className="flex flex-col gap-3">

        <input
          type="text"
          placeholder="Enter your URL"
          value={url}
          className="
            rounded-md border border-[#a8c1d3]
            bg-white px-4 py-2
            text-[#17304b]
            outline-none
            focus:border-[#0877c9]
            focus:ring-2 focus:ring-[#0877c9]/20
          "
          onChange={(e) => setUrl(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your preferred short URL text"
          value={shorturl}
          onChange={(e) => setShorturl(e.target.value)}
          className="
            rounded-md border border-[#a8c1d3]
            bg-white px-4 py-2
            text-[#17304b]
            outline-none
            focus:border-[#0877c9]
            focus:ring-2 focus:ring-[#0877c9]/20
          "
        />

        <button
          onClick={generateUrl}
          className="
            cursor-pointer rounded-md
            border border-[#075aa4]
            bg-gradient-to-b
            from-[#35a4f2]
            via-[#087bd1]
            to-[#0563b1]
            py-2
            font-bold
            text-white
            shadow-[0_3px_8px_rgba(0,0,0,0.25)]
            transition
            hover:from-[#45aff7]
            hover:to-[#0868bb]
            hover:shadow-[0_0_12px_rgba(30,150,255,0.6)]
          "
        >
          Generate
        </button>

      </div>

      {generated && (
        <div className="mt-2">
          <span className="font-bold text-[#123c60]">
            Your Link:
          </span>

          <div className="mt-2 break-all">
            <Link
              target="_blank"
              href={generated}
              className="font-medium text-[#0877c9] underline"
            >
              {generated}
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};


export default function Shorten() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-[#eef7fd] via-[#dcecf7] to-[#c8e2f2] px-4">

      <Suspense
        fallback={
          <div className="flex min-h-[400px] items-center justify-center">
            <p className="font-semibold text-[#123c60]">
              Loading...
            </p>
          </div>
        }
      >
        <ShortenForm />
      </Suspense>

    </main>
  );
}