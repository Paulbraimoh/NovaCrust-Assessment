import React, { useState } from "react";
import { ArrowLeftIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Frame3 = ({ onBack }) => {
  const [bank, setBank] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName] = useState("ODUTUGA GBEKE");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white-50 px-4 pt-6 pb-8">
      {/* Header */}
      <div className="relative flex items-center justify-center mb-8">
        <button className="absolute left-0">
          <ArrowLeftIcon className="h-6 w-6 text-gray-700" />
        </button>
        <h2 className="text-lg font-semibold text-gray-900">
          Recipient details
        </h2>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Bank */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Bank
          </label>
          <div className="relative">
            <select
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              className="w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="" disabled>
                Select an option
              </option>
              <option value="gtb">GTBank</option>
              <option value="access">Access Bank</option>
            </select>
            <ChevronDownIcon className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Account Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account number
          </label>
          <input
            type="tel"
            placeholder="Enter your account number"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            className="w-full rounded-full border border-gray-300 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Account Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Account name
          </label>
          <input
            type="text"
            value={accountName}
            disabled
            className="w-full rounded-full border border-gray-200 bg-gray-100 px-4 py-3 text-sm text-gray-600"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          onClick={onBack}
          className="mt-10 w-full rounded-full bg-gradient-to-r from-teal-800 to-teal-900 py-4 text-sm font-semibold text-white shadow-md active:scale-[0.98]"
        >
          Next
        </button>
      </form>
    </div>
  );
};

export default Frame3;
