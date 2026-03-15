import React from "react";

export default function MenuSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {Array.from({ length: 6 }).map((_, i) => (
        <div
          key={i}
          className="relative h-115 w-full bg-[#fff0da82] border-2 border-[#2D1E2F] rounded-2xl shadow-[6px_6px_0px_#2D1E2F] flex flex-col px-4 py-6 animate-pulse"
        >
          {/* image */}
          <div className="w-full h-48 bg-gray-300 rounded-md" />

          {/* title + description */}
          <div className="p-4 flex flex-col gap-3">
            <div className="h-5 w-3/4 bg-gray-300 rounded" />
            <div className="h-4 w-full bg-gray-200 rounded" />
            <div className="h-4 w-5/6 bg-gray-200 rounded" />
          </div>

          {/* divider */}
          <div className="w-full h-px bg-gray-300 mt-auto" />

          {/* footer */}
          <div className="flex justify-between items-center py-4">
            <div className="h-5 w-16 bg-gray-300 rounded" />
            <div className="h-8 w-24 bg-gray-300 rounded-lg" />
          </div>
        </div>
      ))}
    </div>
  );
}
