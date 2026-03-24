"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => router.back()}
      className="text-sm text-gray-600 hover:text-emerald-600 transition-colors duration-200 mb-4"
      aria-label="Go back"
    >
      ← Back
    </button>
  );
}
