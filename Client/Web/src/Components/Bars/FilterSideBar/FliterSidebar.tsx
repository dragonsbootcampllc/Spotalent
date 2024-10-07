import { useEffect, useState, useCallback } from "react";

import PriceRange from "./components/PriceRange";
import ProjectTypesList from "./components/ProjectTypesList";
import SkillsList from "./components/SkillsList";
import LocationFilter from "./components/LocationFilter";

export type Filters = {
  ProjectTypes: string[];
  Price: {
    min: number;
    max: number;
  };
  Skills: string[];
  Location: string;
};

export interface FilterSidebarProps {
  defaultValues?: {
    ProjectTypes?: string[];
    Skills?: string[];
    Price?: {
      min?: number;
      max?: number;
      maximumSearch?: number;
      minimumSearch?: number;
    };
    Location?: string;
  };
}

export default function FilterSidebar({
  defaultValues,
}: FilterSidebarProps): JSX.Element {

  const [filters, setFilters] = useState<Filters>({
    ProjectTypes: [],
    Price: { min: 0, max: 0 },
    Location:"",
    Skills: [],
  });

  useEffect(() => {
    setFilters(
      {...filters,
      Price: { min: defaultValues?.Price?.min || 0, max: defaultValues?.Price?.max || 0 },
      Location: defaultValues?.Location || "",})
  },[]);

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const handleProjectTypesChange = useCallback((newProjectTypes: string[]) => {
    setFilters((oldData) => {
      return { ...oldData, ProjectTypes: newProjectTypes };
    });
  }, []);

  const handlePriceChange = useCallback(
    (newVal: { min?: number; max?: number }) => {
      setFilters((oldData) => ({
        ...oldData,
        Price: { ...oldData.Price, ...newVal },
      }));
    },
    []
  );
  const handleLocationChange = useCallback((newVal?: string) => {
    setFilters((oldData) => ({ ...oldData, Location: newVal || "" }));
  }, []);

  const handleSkillsChange = useCallback((newSkills: string[]) => {
    setFilters((oldData) => ({ ...oldData, Skills: newSkills }));
  }, []);

  return (
    <div className="bg-white border w-1/3 p-4">
      <h1 className="text-4xl font-semibold">Filters</h1>
      <ProjectTypesList
        defaultValues={defaultValues}
        filters={filters}
        onChange={handleProjectTypesChange}
      />
      <PriceRange
        defaultValues={defaultValues}
        filters={filters}
        onChange={handlePriceChange}
      />
      <SkillsList
        defaultValues={defaultValues}
        filters={filters}
        onChange={handleSkillsChange}
      />
      <LocationFilter
        filters={filters}
        onChange={handleLocationChange}
      />
    </div>
  );
}
