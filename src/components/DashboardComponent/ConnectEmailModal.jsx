import React, { useState } from "react";
import { DialogContent } from "@/components/ui/dialog";
import ChooseProvider from "./ChooseProvider";
import ConnectSmtp from "./ConnectSmtp";

export default function ConnectEmailModal({ setOpen }) {
  const [step, setStep] = useState(1); // 1: Choose, 2: Configure
  const [selectedProvider, setSelectedProvider] = useState(null);

  const handleSelectProvider = (provider) => {
    setSelectedProvider(provider);
    setStep(2);
  };

  return (
    <DialogContent className="sm:max-w-[550px] p-0 overflow-hidden border-none rounded-2xl bg-white">
      {step === 1 ? (
        <ChooseProvider onSelect={handleSelectProvider} />
      ) : (
        <ConnectSmtp 
          provider={selectedProvider} 
          onBack={() => setStep(1)} 
          onClose={() => setOpen(false)}
        />
      )}
    </DialogContent>
  );
}
