import { Checkbox } from "@lemonsqueezy/wedges";

interface SelecteItemComponentProps {
  item: string;
  filters: string[];
  onChange: (newVal: string, isAdded: boolean) => void;
}

const SelectItem = ({ item, filters, onChange }: SelecteItemComponentProps) => {
  return (
    <li className="flex items-center">
      <Checkbox
        className="mr-2"
        checked={filters.includes(item)}
        label={item}
        onCheckedChange={(e) => {
          onChange(item, e.valueOf() as boolean);
        }}
      ></Checkbox>
    </li>
  );
};

export default SelectItem;
