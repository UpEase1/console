"use client"
import React from 'react';
import { CrossCircledIcon } from '@radix-ui/react-icons';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <CrossCircledIcon className="mx-auto h-12 w-12 text-red-500" /> {/* Adjust icon size and color as needed */}
        <h1 className="text-xl font-semibold text-gray-900 mt-4">Error</h1>
        <p className="text-gray-500">{error.digest}</p>
        <button
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => reset()}
        >
          Click to Retry
        </button>
      </div>
    </div>
  );
};
