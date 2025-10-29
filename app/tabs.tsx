"use client";
import Link from "next/link";
import { useState } from "react";

export default function Tabs() {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:p-6 md:px-8 p-4 px-4 w-full flex gap-2 sticky top-0 left-0 h-16 justify-between bg-background z-30 items-center align-middle">
      <div>ryan&apos;s site</div>
      {/* Hamburger menu button for small screens */}
      <button
        className="md:hidden text-2xl font-mono px-2 py-1 h-full flex items-center"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        type="button"
      >
        =
      </button>
      {/* Nav links: hide on small screens */}
      <div className="w-fit gap-10 md:flex hidden">
        <Link
          href="/#awesome"
          className="text-red-400 h-full flex items-center font-extrabold underline text-lg"
        >
          {"ACTUAL INTERESTING THINGS"}
        </Link>
        <Link href="/#current" className="h-full flex items-center underline">
          current
        </Link>

        <Link href="/#connect" className="h-full flex items-center underline">
          connect
        </Link>
        <Link
          href="/#accomplishments"
          className="h-full flex items-center underline"
        >
          accomplishments
        </Link>
      </div>
      {/* Dropdown nav links for hamburger, only appear if open */}
      {open && (
        <div className="flex flex-col absolute top-16 right-4 bg-background border border-foreground/10 rounded-md w-80 shadow-lg p-4 gap-4 md:hidden z-40">
          <Link
            href="/#awesome"
            className="text-red-400 font-extrabold underline"
            onClick={() => setOpen(false)}
          >
            {"ACTUAL INTERESTING THINGS"}
          </Link>
          <Link
            href="/#current"
            className="underline"
            onClick={() => setOpen(false)}
          >
            current
          </Link>
          <Link
            href="/#accomplishments"
            className="underline"
            onClick={() => setOpen(false)}
          >
            accomplishments
          </Link>
          <Link
            href="/#connect"
            className="underline"
            onClick={() => setOpen(false)}
          >
            connect
          </Link>
        </div>
      )}
    </div>
  );
}
