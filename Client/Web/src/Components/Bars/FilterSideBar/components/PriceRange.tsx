import { memo, useEffect, useState } from "react";
import { Filters, FilterSidebarProps } from "../FliterSidebar";
import { Slider } from "@lemonsqueezy/wedges";

interface PriceRangeProps extends FilterSidebarProps {
  filters: Filters;
  onChange: (newVal: { min?: number; max?: number }) => void;
}

const PriceRange = memo(
  ({ defaultValues, filters, onChange }: PriceRangeProps) => {
    const [price, setPrice] = useState([filters.Price.min, filters.Price.max]);
    useEffect(() => {
        console.log("PriceRange")
      setPrice([filters.Price.min, filters.Price.max]);
    }, [filters]);

    return (
      <div className="mt-4">
        <div className="flex flex-row justify-between align-middle">
          <h2 className="text-xl font-semibold">Price</h2>
          <button
            onClick={() => {
                if (filters.Price.min == 0 && filters.Price.max == 0) {
                    setPrice([0, 0]);
                    return;
                }
                onChange({ min: 0, max: 0 });
            }}
            className="text-sm text-center font-semibold text-blue-700"
          >
            Clear
          </button>
        </div>
        <Slider
          after={defaultValues?.Price?.maximumSearch?.toString() + "$"}
          before={defaultValues?.Price?.minimumSearch?.toString() + "$"}
          defaultValue={[0, 0]}
          value={price}
          max={defaultValues?.Price?.maximumSearch || 10000}
          min={defaultValues?.Price?.minimumSearch || 1000}
          showTooltip="hover"
          onValueCommit={(val) => {onChange({ min: val[0], max: val[1] }) }}
          onValueChange={(val) => {
            setPrice(val);
          }}
          helperText={
            "Selected range: $" +
            price[0]?.toLocaleString("en-us") +
            " - $" +
            price[1]?.toLocaleString("en-us")
          }
          renderTooltip={(val) => {
            if (val) {
              return "$" + val.toLocaleString("en-US");
            }
            return "";
          }}
          step={Number((defaultValues?.Price?.maximumSearch || 1) / 100)}
        />
      </div>
    );
  },
  (prev, next) => {
    if (
      prev.filters.Price.min !== next.filters.Price.min ||
      prev.filters.Price.max !== next.filters.Price.max
    ) {
      return false;
    }
    return true;
  }
);

export default PriceRange;
