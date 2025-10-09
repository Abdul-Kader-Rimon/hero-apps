import React from "react";
import logoImage from "../assets/logo.png";

const LoadingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-100">
      <img
        src={logoImage}
        alt="Loading..."
        className="w-24 h-24 md:w-32 md:h-32"
        style={{
          animation: "spinSlow 3s linear infinite",
        }}
      />

      <p className="mt-6 text-lg md:text-xl font-semibold text-gray-600">
        Loading....
      </p>
      <style>
        {`
          @keyframes spinSlow {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default LoadingPage;
