import { Input as WedgesInput } from "@lemonsqueezy/wedges";
import { ReactNode, useEffect, useState } from "react";

export interface InputProps {
    description?: ReactNode;
    destructive?: boolean;
    disabled?: boolean;
    helperText?: ReactNode;
    label?: ReactNode;
    required?: boolean;
    tooltip?: ReactNode;
    className?: string;
    placeholder?: string;
    value?: string;
    onValueChange?: (value: string) => void;
};

export default function Input(props: InputProps) {
    const [value, setValue] = useState(props.value || "");

    const onChange = (newValue: string) => {
        setValue(newValue);
        if (props.onValueChange) {
            props.onValueChange(newValue);
        }
    };

    useEffect(() => {
        setValue(props.value || "");
    }, [props.value]);

    return (
        <div className={`w-full ${props.className}`}>
            <WedgesInput
                {...props}
                value={value}
                onChange={(e) => {
                    let event = e as React.ChangeEvent<HTMLInputElement>;
                    onChange(event.target.value);
                }}
            />
        </div>
    );
}
