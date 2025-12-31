import React, { useState, useEffect, useMemo } from "react";
import CountryDropdown from "./CountryDropdown";
import { Clock, MapPin, ChevronDown, Check } from "lucide-react";

const AdvancedTimezoneDropdown = ({
  value,
  onChange,
  country,
  placeholder = "Select timezone",
}) => {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  // Get all timezones using Intl API
  const allTimezones = useMemo(() => {
    try {
      return Intl.supportedValuesOf("timeZone") || [];
    } catch (error) {
      console.warn(
        "Intl.supportedValuesOf not available, using fallback timezones"
      );
      return [
        "UTC",
        "America/New_York",
        "America/Chicago",
        "America/Denver",
        "America/Los_Angeles",
        "Europe/London",
        "Europe/Paris",
        "Europe/Berlin",
        "Asia/Tokyo",
        "Asia/Shanghai",
        "Asia/Dubai",
        "Australia/Sydney",
        "Pacific/Auckland",
        "America/Toronto",
        "America/Vancouver",
        "Asia/Singapore",
        "Asia/Hong_Kong",
        "Asia/Kolkata",
        "Africa/Johannesburg",
        "America/Sao_Paulo",
      ];
    }
  }, []);

  // Filter timezones based on search and country
  const filteredTimezones = useMemo(() => {
    let tzs = allTimezones;

    // Filter by search
    if (search) {
      tzs = tzs.filter(
        (tz) =>
          tz.toLowerCase().includes(search.toLowerCase()) ||
          tz.split("/").pop()?.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Filter by country if provided (using common country-timezone mapping)
    if (country) {
      const countryTimezones = {
        US: [
          "America/New_York",
          "America/Chicago",
          "America/Denver",
          "America/Los_Angeles",
        ],
        GB: ["Europe/London"],
        CA: ["America/Toronto", "America/Vancouver"],
        AU: ["Australia/Sydney", "Australia/Melbourne", "Australia/Brisbane"],
        DE: ["Europe/Berlin"],
        FR: ["Europe/Paris"],
        JP: ["Asia/Tokyo"],
        CN: ["Asia/Shanghai"],
        IN: ["Asia/Kolkata"],
        BR: ["America/Sao_Paulo"],
        MX: ["America/Mexico_City"],
        ES: ["Europe/Madrid"],
        RU: ["Europe/Moscow"],
        ZA: ["Africa/Johannesburg"],
        NZ: ["Pacific/Auckland"],
        SG: ["Asia/Singapore"],
        AE: ["Asia/Dubai"],
      };

      const countrySpecific = countryTimezones[country] || [];
      if (countrySpecific.length > 0) {
        tzs = tzs.filter((tz) => countrySpecific.includes(tz));
      }
    }

    return tzs.slice(0, 50);
  }, [allTimezones, search, country]);

  // Auto-detect user's timezone
  const autoDetectTimezone = () => {
    const detectedTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (detectedTimezone && allTimezones.includes(detectedTimezone)) {
      onChange && onChange(detectedTimezone);
      setOpen(false);
    }
  };

  // Format timezone for display
  const formatTimezone = (timezone) => {
    if (!timezone) return "";

    // Convert "America/New_York" to "America - New York"
    const parts = timezone.split("/");
    const region = parts[0];
    const city = parts.slice(1).join(" - ").replace(/_/g, " ");

    // Get offset
    try {
      const now = new Date();
      const offset = now.toLocaleString("en-US", {
        timeZone: timezone,
        timeZoneName: "short",
      });
      const offsetText = offset.split(", ")[1] || "";

      return `${region} - ${city} (${offsetText})`;
    } catch (error) {
      return `${region} - ${city}`;
    }
  };

  const getCurrentTime = (timezone) => {
    if (!timezone) return "";
    try {
      return new Date().toLocaleTimeString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      });
    } catch (error) {
      return "";
    }
  };

  return (
    <div className="relative">
      <label
        htmlFor="timezone"
        className="block text-xs font-medium text-gray-700 mb-1"
      >
        Timezone
      </label>

      {/* Auto-detect button */}
      <div className="mb-2">
        <button
          type="button"
          onClick={autoDetectTimezone}
          className="inline-flex items-center px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full hover:bg-blue-200"
        >
          <MapPin size={12} className="mr-1" />
          Auto-detect my timezone
        </button>
      </div>

      {/* Timezone Selector */}
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-left focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <div className="flex items-center space-x-2">
            <Clock size={16} className="text-gray-400" />
            <div>
              {value ? (
                <div className="text-sm">
                  <div className="font-medium">{formatTimezone(value)}</div>
                  <div className="text-xs text-gray-500">
                    Current time: {getCurrentTime(value)}
                  </div>
                </div>
              ) : (
                <span className="text-gray-500">{placeholder}</span>
              )}
            </div>
          </div>
          <ChevronDown
            size={16}
            className={`text-gray-400 transition-transform ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Dropdown Menu */}
        {open && (
          <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
            {/* Search */}
            <div className="p-2 border-b">
              <input
                type="text"
                placeholder="Search timezones..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                autoFocus
              />
            </div>

            {/* Timezone List */}
            <div className="max-h-64 overflow-y-auto">
              {filteredTimezones.length > 0 ? (
                filteredTimezones.map((timezone) => (
                  <button
                    key={timezone}
                    type="button"
                    onClick={() => {
                      onChange && onChange(timezone);
                      setOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 hover:bg-blue-50 text-left ${
                      value === timezone
                        ? "bg-blue-50 border-l-4 border-blue-500"
                        : ""
                    }`}
                  >
                    <div className="flex-1">
                      <div className="text-sm font-medium">
                        {formatTimezone(timezone)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {getCurrentTime(timezone)}
                      </div>
                    </div>
                    {value === timezone && (
                      <Check size={16} className="text-blue-500 shrink-0" />
                    )}
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No timezones found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdvancedTimezoneDropdown;
