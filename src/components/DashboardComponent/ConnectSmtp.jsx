import React, { useState } from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import {
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  Settings2,
  ChevronUp,
  ChevronDown,
  CheckCircle2,
  ShieldCheck,
  EyeOff,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ConnectSmtp({ provider, onBack, onClose }) {
  const isGmail = provider === "gmail";
  const [showPassword, setShowPassword] = useState(false);
  const toggleVisibility = () => setShowPassword(!showPassword);

  const [showServerSettings, setShowServerSettings] = useState(true);
  const [sslEnabled, setSslEnabled] = useState(true);

  return (
    <div className="pb-4">
      <DialogHeader className="p-6 flex-col md:flex-row md:items-center gap-4 space-y-0">
        <button
          onClick={onBack}
          className="p-2 hover:bg-slate-100 w-fit rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-slate-500" />
        </button>
        <div>
          <DialogTitle className="md:text-xl font-bold text-slate-900">
            Connect SMTP Account
          </DialogTitle>
          <p className="text-slate-400 text-sm capitalize">
            {provider} — enter your credentials below
          </p>
        </div>
      </DialogHeader>

      <div className="px-6 space-y-6">
        <div className="w-full h-1 bg-sky-500 rounded-full" />

        {/* Email + Auth */}
        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
              <Input
                placeholder="your.name@gmail.com"
                className="pl-10 bg-slate-50 border-slate-100 h-11"
              />
            </div>
          </div>

          <div className="grid  md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Username
              </label>
              <Input
                placeholder="John Dev"
                className="bg-slate-50 border-slate-100 h-11 text-slate-600"
              />
            </div>

          <div className="space-y-2">
      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
        App Password
      </label>
      <div className="relative">
        <Lock className="absolute left-3 top-3 w-4 h-4 text-slate-400" />
        
        <Input
          // 3. Dynamically change the type
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="pl-10 pr-10 bg-slate-50 border-slate-100 h-11"
        />

        {/* 4. Clickable icon with conditional rendering */}
        <div 
          onClick={toggleVisibility}
          className="absolute right-3 top-3.5 cursor-pointer hover:text-slate-600 transition-colors"
        >
          {showPassword ? (
            <EyeOff className="w-4 h-4 text-slate-400" />
          ) : (
            <Eye className="w-4 h-4 text-slate-400" />
          )}
        </div>
      </div>
    </div>
          </div>
        </div>

        {/* Gmail Guide */}
        {isGmail && (
          <div className="bg-blue-50/50 border border-blue-100 rounded-xl p-4 space-y-3">
            <div className="flex gap-3 text-blue-600">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <div className="text-xs">
                <p className="font-bold">How to get your App Password</p>
                <p className="mt-1 text-slate-600 text-[13px]">
                  Go to{" "}
                  <span className="font-semibold text-xs text-slate-800">
                    Google Account → Security → 2-Step Verification → App Passwords.
                  </span>{" "}
                  Create a new one named "Oppora".
                </p>
                <p className="mt-2 text-blue-600 text-xs">
                  Type the 16-letter code without spaces.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Server Settings Header */}
        <div
          onClick={() => setShowServerSettings(!showServerSettings)}
          className="flex items-center justify-center gap-2 text-slate-400 text-xs font-medium cursor-pointer"
        >
          <Settings2 className="w-4 h-4" />
          Server Settings
          {showServerSettings ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </div>

        {/* Server Settings Body */}
        {showServerSettings && (
          <div className="bg-slate-50/50 border border-slate-100 rounded-2xl p-4 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="bg-emerald-100 p-1 rounded-md">
                  <ArrowLeft className="w-3 h-3 text-emerald-600 rotate-135" />
                </div>
                <span className="text-[10px] font-bold text-slate-800 uppercase tracking-wider">
                  SMTP (Outgoing)
                </span>
              </div>

              <div className="flex flex-col md:flex-row gap-2 md:items-center">
                <Input placeholder="smtp.gmail.com" className="bg-white" />
               <div className="flex items-center gap-2">
                 <Input placeholder="587" className="w-20 bg-white" />

                {/* Custom Toggle */}
                <div
                  onClick={() => setSslEnabled(!sslEnabled)}
                  className={`flex items-center gap-2 px-3  rounded-md cursor-pointer transition`}
                >
                  <span className="text-[10px] font-bold text-slate-400">
                    SSL
                  </span>

                  <div
                    className={`w-8 h-4 flex items-center rounded-full p-1 transition ${
                      sslEnabled ? "bg-sky-500" : "bg-gray-300"
                    }`}
                  >
                    <div
                      className={`bg-white w-3 h-3 rounded-full shadow-md transform transition ${
                        sslEnabled ? "translate-x-4" : "translate-x-0"
                      }`}
                    />
                  </div>
                </div>
               </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="flex flex-col-reverse md:flex-row gap-2 items-center justify-between pt-2">
          <div className="flex items-center gap-2 text-[11px] text-slate-400">
            <Settings2 className="w-3 h-3" />
            We'll verify your connection before saving
          </div>

          <Button
            onClick={onClose}
            className="bg-sky-500 hover:bg-sky-600 text-white gap-2 rounded-xl px-6 h-11"
          >
            <CheckCircle2 className="w-4 h-4" />
            Connect Account
          </Button>
        </div>
      </div>
    </div>
  );
}