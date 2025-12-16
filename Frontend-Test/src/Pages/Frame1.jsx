import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import EthIcon from "../assets/eth.svg";
import NgFlag from "../assets/ng-flag.svg";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Frame1 = ({ onNext }) => {
  const [pay, setPay] = useState("1.00");
  const [receive, setReceive] = useState("1.00");
  const [payFrom, setPayFrom] = useState("");
  const [payTo, setPayTo] = useState("");

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <form className="mx-auto max-w-md px-4 pt-6 pb-28 space-y-5">
        {/* You Pay */}
        <div className="rounded-2xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">You pay</p>

          <div className="mt-2 flex items-center gap-3">
            <input
              type="number"
              value={pay}
              onChange={(e) => setPay(e.target.value)}
              className="
  min-w-0
  flex-1
  bg-transparent
  text-2xl
  font-semibold
  outline-none
  appearance-none
  [&::-webkit-inner-spin-button]:appearance-none
  [&::-webkit-outer-spin-button]:appearance-none
"
            />

            <div className="relative">
              <button
                type="button"
                className="flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                <img src={EthIcon} alt="ETH" className="h-5 w-5 rounded-full" />
                ETH
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* You Receive */}
        <div className="rounded-2xl border border-gray-200 p-4">
          <p className="text-sm text-gray-500">You receive</p>

          <div className="mt-2 flex items-center gap-3">
            <input
              type="number"
              value={receive}
              onChange={(e) => setReceive(e.target.value)}
              className="
  min-w-0
  flex-1
  bg-transparent
  text-2xl
  font-semibold
  outline-none
  appearance-none
  [&::-webkit-inner-spin-button]:appearance-none
  [&::-webkit-outer-spin-button]:appearance-none
"
            />

            <div className="relative">
              <button
                type="button"
                className="flex shrink-0 items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium whitespace-nowrap"
              >
                <img
                  src={NgFlag}
                  alt="NGN"
                  className="h-5 w-5 rounded-full object-cover"
                />
                NGN
                <ChevronDownIcon className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>
        </div>

        {/* Pay From */}
        <div>
          <label className="mb-2 block text-sm text-gray-500">Pay from</label>
          <div className="relative">
            <select
              value={payFrom}
              onChange={(e) => setPayFrom(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none"
            >
              <option value="" disabled>
                Select an option
              </option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Pay To */}
        <div>
          <label className="mb-2 block text-sm text-gray-500">Pay to</label>
          <div className="relative">
            <select
              value={payTo}
              onChange={(e) => setPayTo(e.target.value)}
              className="w-full appearance-none rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-700 focus:outline-none"
            >
              <option value="" disabled>
                Select an option
              </option>
            </select>
            <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </form>

      {/* Fixed CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white px-4 pb-6 pt-3">
        <button
          type="submit"
          onClick={onNext}
          className="mx-auto block w-full max-w-md rounded-full bg-gradient-to-r from-teal-800 to-teal-900 py-4 text-sm font-semibold text-white shadow-md active:scale-[0.98]"
        >
          Convert now
        </button>
      </div>
    </div>
  );
};

export default Frame1;
