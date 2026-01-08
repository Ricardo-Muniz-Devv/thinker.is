import React from "react";
import { useState } from "react";
import { Play } from 'lucide-react';

export default function Chat() {
  const [value, setValue] = useState("");
  const [step, setStep] = useState(0);

  const handleSend = () => {
    if (value.trim()) {
      console.log("Sending:", value);
      setValue("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="min-h-screen w-full bg-neutral-300 flex items-center justify-center p-4">
      {/* App Shell */}
      <div className="relative w-full max-w-full h-[95vh] bg-neutral-200 rounded-[30px] shadow-2xl overflow-hidden flex flex-col">

        {/* Top Indicator */}
        <div className="flex justify-center pt-6">

          <div className="px-16 py-3 bg-neutral-900 text-white text-lg font-medium rounded-full shadow-xl">
            {step} / 20
          </div>
        </div>

        {/* Content Area (future messages) */}
        <div className="flex-1 px-5 py-6 overflow-y-auto">
          <div className="text-center text-neutral-400 text-sm mt-20">
            Waiting for interaction…
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-5 bg-neutral-200">
          <div className="flex items-center gap-4">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Resposta..."
              className="flex-1 h-15 rounded-2xl shadow-2xl mb-2 bg-neutral-100 px-5 text-lg text-neutral-800 placeholder-neutral-400 outline-none focus:ring-2 focus:ring-orange-200 transition"
            />

            {/* Send Button */}
            <button
              onClick={handleSend}
              className="w-14 h-14 bg-[#EF6B51] rounded-full mb-2 flex items-center cursor-pointer justify-center shadow-lg active:scale-95 transition"
            >
              <Play color="white" fill="white" size={20} />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
