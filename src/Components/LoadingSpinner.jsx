import React from "react";

const LoadingSpinner = () => {
  return (
    <div class="flex items-center justify-center h-screen">
      <img
        src="logo.png"
        alt="Loading..."
        class="w-36 h-36 animate-spin"
      />
    </div>
  );
};

export default LoadingSpinner;
