import React from "react";
import { DialogHeader, DialogTitle } from "@/components/ui/dialog";
import GmailSvg from "../SVG/GmailSvg";
import OutLookSvg from "../SVG/OutLookSvg";
import YahooSvg from "../SVG/YahooSvg";
import SettingMailSvg from "../SVG/SettingMailSvg";

const providers = [
  {
    id: "gmail",
    name: "Gmail",
    desc: "Use an App Password for Gmail/G Suite",
    icon: GmailSvg,
  },
  {
    id: "outlook",
    name: "Outlook / Hotmail",
    desc: "Microsoft 365, Outlook.com, or Hotmail",
    icon: OutLookSvg,
  },
  {
    id: "yahoo",
    name: "Yahoo Mail",
    desc: "Yahoo or AOL Mail with App Password",
    icon: YahooSvg,
  },
  {
    id: "smtp",
    name: "Custom SMTP",
    desc: "Any provider — enter server details manually",
    icon: SettingMailSvg,
  },
];

export default function ChooseProvider({ onSelect }) {
  return (
    <div className="pb-4">
      <DialogHeader className="p-6">
        <DialogTitle className="text-xl font-bold text-slate-900">
          Choose Email Provider
        </DialogTitle>
        <p className="text-slate-500 text-sm">
          Select your provider for quick setup, or configure custom SMTP
        </p>
      </DialogHeader>

      <div className="px-6">
        <div className="w-full h-1 bg-slate-100 rounded-full mb-8 relative">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-sky-500 rounded-full" />
        </div>

        <div className="grid grid-cols-2  gap-4">
          {providers.map((p) => {
            const Icon = p.icon;

            return (
              <button
                key={p.id}
                onClick={() => onSelect(p.id)}
                className="group p-6 border border-slate-100 cursor-pointer rounded-2xl hover:border-sky-200 hover:bg-sky-50/30 transition-all text-center flex flex-col items-center gap-3 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-white transition-colors border border-slate-50">
                  {/* Simplified Icon Placeholders */}
                  <span className="font-bold p-1 text-lg text-slate-400">
                    <Icon />
                  </span>
                </div>
                <div className="space-y-1">
                  <h3 className="font-bold text-xs md:text-base text-slate-800">
                    {p.name}
                  </h3>
                  <p className="text-[11px] text-slate-400 leading-tight">
                    {p.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <p className="text-center text-[11px] text-slate-400 mt-8">
        SMTP connections support email warmup and advanced deliverability
        control
      </p>
    </div>
  );
}
