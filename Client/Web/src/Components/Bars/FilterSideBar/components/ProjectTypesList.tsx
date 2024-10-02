import { Filters, FilterSidebarProps } from "../FliterSidebar";
import { memo, useEffect, useState } from "react";
import SelectItem from "./SelectItem";

interface ProjectTypesListProps extends FilterSidebarProps {
  filters: Filters;
  onChange: (newVal: string[]) => void;
}

const ProjectTypesList = memo(
  ({ defaultValues, filters, onChange }: ProjectTypesListProps) => {
    const [selected, setSelcted] = useState<string[]>(filters.Skills);

    useEffect(() => {
      onChange(selected);
    }, [selected]);
    return (
      <div className="mt-4">
        <div className="flex flex-row justify-between align-middle">
          <h2 className="text-xl font-semibold">ProjectTypes</h2>
          <button
            onClick={() => {
              if (filters.ProjectTypes.length == 0) {
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
          {defaultValues?.ProjectTypes?.map((projectType, index) => {
            return (
              <SelectItem
                key={`${index}-${projectType}`}
                item={projectType}
                filters={filters.ProjectTypes}
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

export default ProjectTypesList;
