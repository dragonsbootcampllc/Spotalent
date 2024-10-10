import { memo, useEffect, useState } from "react";
import { Filters, FilterSidebarProps } from "../FliterSidebar";
import SelectItem from "./SelectItem";

interface SkillsListProps extends FilterSidebarProps {
  filters: Filters;
  onChange: (newVal: string[]) => void;
}

const SkillsList = memo(
  ({ defaultValues, filters, onChange }: SkillsListProps) => {
    const [selected, setSelcted] = useState<string[]>(filters.Skills);

    useEffect(() => {
      onChange(selected);
    }, [selected]);

    return (
      <div className="mt-4">
        <div className="flex flex-row justify-between align-middle">
          <h2 className="text-xl font-semibold">Skills</h2>
          <button
            onClick={() => {
              if (filters.Skills.length == 0) {
                return;
              }
              setSelcted([]);
            }}
            className="text-sm text-center font-semibold text-blue-700"
          >
            Clear
          </button>
        </div>
        <ul className="mt-2">
          {defaultValues?.Skills?.map((skilltype, index) => {
            return (
              <SelectItem
                key={`${index}-${skilltype}`}
                item={skilltype}
                filters={selected}
                onChange={(val, isAdded) => {
                  setSelcted((old) => {
                    if (!isAdded && old.includes(val)) {
                      const filterd = old.filter((element) => element != val);
                      return filterd;
                    }
                    if (isAdded && !old.includes(val)) {
                      return [...old, val];
                    }
                    return old;
                  });
                }}
              />
            );
          })}
        </ul>
      </div>
    );
  }
);

export default SkillsList;
