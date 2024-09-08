import { Textarea as WedgesTextarea } from '@lemonsqueezy/wedges'
import { ReactNode, useEffect, useState } from 'react';

export interface TextareaProps {
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
}

export default function Textarea(props: TextareaProps) {
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
            <WedgesTextarea
                {...props}
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}