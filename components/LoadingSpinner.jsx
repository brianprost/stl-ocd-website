import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const LoadingSpinner = () => {
  return (
    <div role="status">
      <AiOutlineLoading3Quarters className="animate-spin text-blue-800 text-5xl" />
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingSpinner;
