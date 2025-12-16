import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-center px-4 pt-6">
      <div className="flex w-full max-w-md rounded-full bg-gray-200 p-1">
        <button className="flex-1 rounded-full bg-teal-800 py-2 text-xs font-medium text-white">
          Crypto to cash
        </button>
        <button className="flex-1 rounded-full py-2 text-xs font-medium text-gray-700">
          Cash to crypto
        </button>
        <button className="flex-1 rounded-full py-2 text-xs font-medium text-gray-700">
          Crypto to fiat loan
        </button>
      </div>
    </div>
  );
};

export default Navbar;
