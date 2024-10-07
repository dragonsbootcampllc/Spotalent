import { useEffect, useRef, useState } from "react";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectIcon,
    SelectItem,
    SelectPortal,
    SelectTrigger,
    SelectValue,
} from "@lemonsqueezy/wedges";

export type Option = {
    key: string;
    value: string;
}

export interface DropdownProps {
    onValueChange?: (value: string) => void;
    options: Option[] | string[];
    placeholder?: string;
    value?: string;
};

export default function Dropdown({
    onValueChange,
    options,
    placeholder = "Select",
    value: valueProp
}: DropdownProps) {
    const wrapper = useRef<HTMLDivElement>(null);
    const [value, setvalue] = useState(valueProp || undefined);

    useEffect(() => {
        setvalue(valueProp);
        console.log(valueProp);
    }, [valueProp])

    return (
        <div ref={wrapper} className="inline-flex max-w-[192px] flex-col gap-10">
            <Select value={value} onValueChange={onValueChange} required>
                <SelectTrigger className="min-w-[192px]">
                    <SelectValue placeholder={placeholder} />
                    <SelectIcon />
                </SelectTrigger>

                <SelectPortal container={wrapper.current}>
                    <SelectContent>
                        <SelectGroup>
                            {
                                options.map(option =>
                                    typeof (option) == 'string' ? (
                                        <SelectItem value={option}>{option}</SelectItem>
                                    ) : (
                                        <SelectItem value={option.value}>{option.key}</SelectItem>
                                    ))
                            }
                        </SelectGroup>
                    </SelectContent>
                </SelectPortal>
            </Select>
        </div>
    );
}
