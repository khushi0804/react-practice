import React from 'react';

function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Loading spinner */}
      <div className="animate-spin border-t-4 border-blue-500 border-solid w-16 h-16 rounded-full mb-4"></div>
      {/* Loading text */}
      <p className="text-xl text-gray-700 font-semibold">Loading, please wait...</p>
    </div>
  );
}

export default Loading;
