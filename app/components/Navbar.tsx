"use client";

import { useState } from "react";
import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Menu, X } from "lucide-react"; // nice hamburger icons

export default function Navbar() {
  const { data: session } = useSession();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="p-4 shadow-lg sticky top-0 z-50 bg-white text-gray-800">
      <div className="container mx-auto px-4 md:px-16 flex justify-between items-center">
        <div>
          <Link
            href={session?.user ? "/feed" : "/"}
            className="text-3xl font-bold text-teal-900 hover:text-teal-800"
          >
            FlickBox
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 md:gap-12">
          {session?.user ? (
            <>
              <Link
                href="/dashboard"
                className="text-xl font-semibold text-teal-900 hover:text-teal-800"
              >
                Dashboard
              </Link>
              <Link
                href="/upload"
                className="text-xl font-semibold text-teal-900 hover:text-teal-800"
              >
                Upload
              </Link>
              <div className="text-md font-semibold text-teal-900 hover:text-teal-800">
                {session?.user?.email?.split("@")[0]}
              </div>
              <button
                onClick={() => signOut()}
                className="border border-teal-950 bg-blue-900 text-white rounded-3xl px-4 py-2 font-bold cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/videos"
                className="text-2xl font-bold text-teal-900 hover:text-teal-800"
              >
                Videos
              </Link>
              <Link href="/login">
                <button className="border border-teal-950 bg-teal-900 text-white rounded-3xl px-4 py-2 font-bold cursor-pointer">
                  Sign in
                </button>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-teal-900"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-4 bg-white shadow-lg">
          {session?.user ? (
            <>
              <Link href="/dashboard" onClick={() => setMenuOpen(false)}>
                Dashboard
              </Link>
              <Link href="/upload" onClick={() => setMenuOpen(false)}>
                Upload
              </Link>
              <button onClick={() => setMenuOpen(false)}>
                {session?.user?.email?.split("@")[0]}
              </button>
              <button
                onClick={() => {
                  setMenuOpen(false);
                  signOut();
                }}
                className="border border-teal-950 bg-blue-900 text-white rounded-3xl px-4 py-2 font-bold cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/videos" onClick={() => setMenuOpen(false)}>
                Videos
              </Link>
              <Link href="/login" onClick={() => setMenuOpen(false)}>
                <button className="border border-teal-950 bg-teal-900 text-white rounded-3xl px-4 py-2 font-bold cursor-pointer">
                  Sign in
                </button>
              </Link>
            </>
          )}
        </div>
      )}
    </nav>
  );
}
