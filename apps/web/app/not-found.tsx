import Link from "next/link";

import React from "react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-lg">Oops! Page not found.</p>

      <Link href="/" className="mt-6 rounded-lg bg-black px-6 py-3 text-white">
        Go Back Home
      </Link>
    </div>
  );
}
