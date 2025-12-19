import React, {
  useCallback,
  useState,
  forwardRef,
  useEffect,
  useMemo,
} from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { ChevronDown, Check, MapPin } from "lucide-react";
import { CircleFlag } from "react-circle-flags";
import { countries } from "country-data-list";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { FaLocationPinLock } from "react-icons/fa6";

const CountryDropdownComponent = (
  {
    value,
    onChange,
    placeholder = "Select country",
    className,
    disabled = false,
  },
  ref
) => {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(undefined);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and memoize country options
  const countryOptions = useMemo(() => {
    try {
      return (
        countries.all
          ?.filter(
            (country) =>
              country.emoji &&
              country.status !== "deleted" &&
              country.ioc !== "PRK" &&
              country.name &&
              country.alpha2 &&
              country.alpha3
          )
          // Sort countries alphabetically by name
          .sort((a, b) => a.name.localeCompare(b.name)) || []
      );
    } catch (error) {
      console.error("Error processing country data:", error);
      return [];
    }
  }, []);

  // Find selected country from value
  const resolvedCountry = useMemo(() => {
    if (!value || !countryOptions.length) return undefined;

    const normalizedValue = value.toLowerCase();
    return (
      countryOptions.find(
        (country) =>
          (country.alpha2 &&
            country.alpha2.toLowerCase() === normalizedValue) ||
          (country.alpha3 &&
            country.alpha3.toLowerCase() === normalizedValue) ||
          (country.name && country.name.toLowerCase() === normalizedValue)
      ) ?? undefined
    );
  }, [value, countryOptions]);

  // Keep internal state in sync
  useEffect(() => {
    setSelectedCountry(resolvedCountry);
  }, [resolvedCountry]);

  // Filter countries based on search query
  const filteredCountries = useMemo(() => {
    if (!searchQuery.trim()) return countryOptions;

    const query = searchQuery.toLowerCase();
    return countryOptions.filter(
      (country) =>
        (country.name && country.name.toLowerCase().includes(query)) ||
        (country.alpha2 && country.alpha2.toLowerCase().includes(query)) ||
        (country.alpha3 && country.alpha3.toLowerCase().includes(query))
    );
  }, [countryOptions, searchQuery]);

  // Prevent body scroll when dropdown is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      // Reset search query when closing
      setSearchQuery("");
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  const handleSelect = useCallback(
    (country) => {
      if (!country || !country.alpha2) {
        console.error("Invalid country selected");
        return;
      }

      setSelectedCountry(country);
      onChange?.(country.alpha2);
      setOpen(false);
      setSearchQuery("");
    },
    [onChange]
  );

  // Handle search input change
  const handleSearchChange = (value) => {
    setSearchQuery(value);
  };

  const triggerClasses = cn(
    // Base styles
    "flex py-2 sm:py-3.5 w-full items-center justify-between cursor-pointer",
    "px-4 ps-8 sm:ps-10 text-black border border-gray-300 bg-white outline-0",
    "rounded-md",
    "transition-colors duration-200 hover:border-gray-400",
    "disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-gray-300",
    // Focus styles
    "focus:ring-1 focus:border-0 focus:ring-primary focus:ring-offset-2 focus:ring-offset-white",
    open && "ring-2 ring-primary ring-offset-2 ring-offset-white",
    className
  );

  return (
    <div className="relative w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            ref={ref}
            className={triggerClasses}
            disabled={disabled}
            type="button"
            aria-label={selectedCountry ? selectedCountry.name : placeholder}
            aria-expanded={open}
          >
            <div className="flex items-center flex-1 min-w-0 gap-3 overflow-hidden">
              {selectedCountry ? (
                <>
                  <div className="shrink-0 w-5 h-5 overflow-hidden rounded-full">
                    <CircleFlag
                      countryCode={selectedCountry.alpha2?.toLowerCase() || ""}
                      height={20}
                      width={20}
                      style={{ objectFit: "cover" }}
                      title={selectedCountry.name}
                    />
                  </div>
                  <span className="overflow-hidden text-sm font-medium text-ellipsis whitespace-nowrap">
                    {selectedCountry.name}
                  </span>
                </>
              ) : (
                <span className="text-sm font-medium text-gray-500">
                  {placeholder}
                </span>
              )}
            </div>
            <ChevronDown
              size={16}
              className={cn(
                "shrink-0 text-gray-400 transition-transform duration-200",
                open && "rotate-180 text-gray-600"
              )}
              aria-hidden="true"
            />
          </button>
        </PopoverTrigger>

        <PopoverContent
          className="w-full p-0 min-w-(--radix-popper-anchor-width) max-w-[95vw] sm:max-w-none"
          align="start"
          sideOffset={8}
          onOpenAutoFocus={(e) => e.preventDefault()}
          onCloseAutoFocus={(e) => e.preventDefault()}
          collisionPadding={16}
          style={{ zIndex: 9999 }}
        >
          <Command className="w-full" shouldFilter={false}>
            <CommandInput
              placeholder="Search country..."
              className="h-12 border-b"
              value={searchQuery}
              onValueChange={handleSearchChange}
              autoFocus
            />
            <CommandList className="max-h-[250px] sm:max-h-[300px] overflow-auto">
              <CommandEmpty className="py-6 text-sm text-center text-gray-500">
                No country found. Try a different search.
              </CommandEmpty>
              <CommandGroup className="overflow-auto">
                {filteredCountries.map((country) => {
                  const isSelected =
                    selectedCountry &&
                    selectedCountry.alpha3 === country.alpha3;

                  return (
                    <CommandItem
                      key={country.alpha3}
                      value={country.name}
                      onSelect={() => handleSelect(country)}
                      className={cn(
                        "flex items-center w-full gap-3 px-2 sm:px-3 py-2 sm:py-3 text-sm transition-colors cursor-pointer",
                        "hover:bg-gray-100 focus:bg-gray-100",
                        isSelected && "bg-blue-50 hover:bg-blue-100"
                      )}
                      aria-selected={isSelected}
                    >
                      <div className="flex items-center flex-1 min-w-0 gap-3">
                        <div className="shrink-0 w-5 h-5 overflow-hidden rounded-full">
                          <CircleFlag
                            countryCode={country.alpha2?.toLowerCase() || ""}
                            height={20}
                            width={20}
                            style={{ objectFit: "cover" }}
                            title={country.name}
                          />
                        </div>
                        <span className="overflow-hidden font-medium text-ellipsis whitespace-nowrap">
                          {country.name}
                        </span>
                      </div>
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4 shrink-0 transition-opacity",
                          isSelected ? "opacity-100 text-blue-600" : "opacity-0"
                        )}
                        aria-hidden="true"
                      />
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      {/* Location Icon */}
      <div
        className="absolute top-1/2 left-3 -translate-y-1/2 pointer-events-none"
        aria-hidden="true"
      >
        <MapPin className="w-4 h-4 text-gray-400" />
      </div>
    </div>
  );
};

CountryDropdownComponent.displayName = "CountryDropdown";

const CountryDropdown = forwardRef(CountryDropdownComponent);

export default CountryDropdown;

// Optional: Prop validation helper
export const validateCountryCode = (code) => {
  if (!code) return false;

  try {
    const countryList = countries.all || [];
    return countryList.some(
      (country) =>
        country.alpha2 === code ||
        country.alpha3 === code ||
        country.name === code
    );
  } catch (error) {
    console.error("Error validating country code:", error);
    return false;
  }
};
