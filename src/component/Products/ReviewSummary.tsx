// ReviewSummary.tsx
import React from "react";

export default function ReviewSummary() {
  return (
    <div className="flex items-center justify-between w-full max-w-xl">
      {/* Left: stars + rating */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1" aria-hidden="true">
          {/* 4 filled stars */}
          {Array.from({ length: 4 }).map((_, i) => (
            <svg
              key={`filled-${i}`}
              className="w-5 h-5 text-[#14a085]"
              viewBox="0 0 20 20"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L9.05 2.927z" />
            </svg>
          ))}

          {/* 1 outline star */}
          <svg
            className="w-5 h-5 text-[#14a085]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.45a1 1 0 00-.364 1.118l1.287 3.957c.3.92-.755 1.688-1.54 1.118l-3.37-2.45a1 1 0 00-1.176 0l-3.37 2.45c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.063 9.384c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69L11.05 2.927z"
              fill="none"
            />
          </svg>
        </div>

        {/* Numeric rating */}
        <div className="text-sm font-medium text-gray-800">
          <span className="text-lg font-semibold">4.8</span>
          <span className="text-gray-500">/5</span>
        </div>
      </div>

      {/* Right: reviews count with underline */}
      <div>
        <button
          type="button"
          className="text-sm text-[#14a085] underline underline-offset-4 decoration-gray-400 hover:decoration-gray-600 focus:outline-none"
          aria-label="145 reviews"
        >
          145 Reviews
        </button>
      </div>
    </div>
  );
}
