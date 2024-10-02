import { memo, useEffect, useState } from "react";
import { Filters, FilterSidebarProps } from "../FliterSidebar";
import { Input } from "@lemonsqueezy/wedges";

interface LocationProps extends FilterSidebarProps {
  filters: Filters;
  onChange: (Location?: string) => void;
}

const LocationFilter = memo(({ filters, onChange }: LocationProps) => {
  const [location, setLocation] = useState(filters.Location);
  
  useEffect(()=>{
    console.log(filters);
  },[])

  useEffect(() => {
    setLocation(location);
  }, [filters]);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row justify-between align-middle">
        <h2 className="text-xl font-semibold">location</h2>
        <button
          onClick={() => {
            if (filters.Location == "") {
              return;
            }
            setLocation("");
            onChange("");
          }}
          className="text-sm text-center font-semibold text-blue-700"
        >
          Clear
        </button>
      </div>
      <Input
        value={location}
        // Explicit casting to React.ChangeEvent<HTMLInputElement>
        onChange={(e) => {
          const inputEvent = e as React.ChangeEvent<HTMLInputElement>; // Explicit cast
          setLocation(inputEvent.target.value); // Update location state
        }}
        onBlur={(e) => {
          const inputEvent = e as React.FocusEvent<HTMLInputElement>; // Explicit cast
          // Trigger onChange if the location is modified
          if (inputEvent.target.value !== filters.Location) {
            onChange(inputEvent.target.value);
          }
        }}
      />
    </div>
  );
},
    (prev, next) => {
    if (
        prev.filters.Location !== next.filters.Location 
    ) {
        console.log("location changed");
        console.log(prev.filters.Location);
        return false;
    }
    return true;
    }
);

export default LocationFilter;
