import React, { useState, useEffect } from "react";
import UseCurrencyInfo from "../../Currency/src/Hooks/UseCurrencyInfo";

export default function CurrencyConverter() {
  const [amount, setAmount] = useState(100);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertAmount, setConvertAmount] = useState(1);

  const currencyInfo = UseCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const getFlagCode = (currency) => {
    return currency.slice(0, 2).toUpperCase();
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
  };

  useEffect(() => {
    if (currencyInfo && currencyInfo[to]) {
      setConvertAmount(amount * currencyInfo[to]);
    }
  }, [amount, from, to, currencyInfo]);

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4 relative"
      style={{
        backgroundImage: 'url("https://www.shutterstock.com/image-vector/abstract-money-exchange-two-hands-600nw-2413796235.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

      <div className="w-full max-w-md relative z-10">
        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Top colored accent bar */}
          <div className="h-1 bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>

          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-1">
                Currency Converter
              </h1>
              <p className="text-sm text-gray-500">Fast & Reliable Rates</p>
            </div>

            <form className="space-y-6">
              {/* Amount Input */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Amount
                </label>
                <div className="relative">
                  <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    className="w-full h-12 bg-gray-50 border-2 border-gray-200 rounded-lg px-4 text-base font-semibold outline-none transition-all focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
                    placeholder="Enter amount"
                  />
                  <span className="absolute right-4 top-3.5 text-sm font-semibold text-gray-600">
                    {from.toUpperCase()}
                  </span>
                </div>
              </div>

              {/* Currency Selection */}
              <div className="space-y-4">
                {/* From */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    From
                  </label>
                  <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 rounded-lg p-3 hover:border-indigo-300 transition-all">
                    <img
                      src={`https://flagsapi.com/${getFlagCode(from)}/flat/64.png`}
                      alt={from}
                      className="w-7 h-5 rounded"
                    />
                    <select
                      value={from}
                      onChange={(e) => setFrom(e.target.value)}
                      className="flex-1 outline-none bg-transparent font-semibold text-gray-800 cursor-pointer text-sm"
                    >
                      {options.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Swap Button */}
                <div className="flex justify-center -my-2">
                  <button
                    type="button"
                    onClick={swap}
                    className="bg-indigo-500 hover:bg-indigo-600 text-white p-2.5 rounded-full transition-all hover:scale-110 active:scale-95 shadow-md"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </button>
                </div>

                {/* To */}
                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    To
                  </label>
                  <div className="flex items-center gap-3 bg-gray-50 border-2 border-gray-200 rounded-lg p-3 hover:border-indigo-300 transition-all">
                    <img
                      src={`https://flagsapi.com/${getFlagCode(to)}/flat/64.png`}
                      alt={to}
                      className="w-7 h-5 rounded"
                    />
                    <select
                      value={to}
                      onChange={(e) => setTo(e.target.value)}
                      className="flex-1 outline-none bg-transparent font-semibold text-gray-800 cursor-pointer text-sm"
                    >
                      {options.map((currency) => (
                        <option key={currency} value={currency}>
                          {currency.toUpperCase()}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Result Display */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-100 rounded-lg p-5 text-center">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2">
                  You Get
                </p>
                <p className="text-4xl font-bold text-indigo-600 mb-1">
                  {convertAmount.toFixed(2)}
                </p>
                <p className="text-xs text-gray-500">
                  {amount} {from.toUpperCase()} = {convertAmount.toFixed(2)} {to.toUpperCase()}
                </p>
              </div>

              {/* Button */}
              <button
                type="button"
                onClick={() => {
                  if (currencyInfo && currencyInfo[to]) {
                    setConvertAmount(amount * currencyInfo[to]);
                  }
                }}
                className="w-full h-12 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold rounded-lg cursor-pointer shadow-lg hover:shadow-xl hover:from-indigo-600 hover:to-blue-600 transition-all active:scale-95"
              >
                Convert Now
              </button>
            </form>

            {/* Footer */}
            <p className="text-center text-xs text-gray-400 mt-6">
              Real-time exchange rates • Secure payment
            </p>
          </div>
        </div>

        {/* Trust badge */}
        <div className="text-center mt-4 text-xs text-gray-500">
          ✓ Trusted by millions
        </div>
      </div>
    </div>
  );
}