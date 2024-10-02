import { useEffect, useState } from "react";

interface NumberInputProps {
  label?: string;
  defaultValue?: string | number;
  value?: string | number;
  enableSpinner?: boolean;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

export default function NumberInput({
  label,
  defaultValue,
  value,
  enableSpinner,
  addonLeft,
  addonRight,
  onChange,
  onBlur,
}: NumberInputProps) {
  const [inputValue, setInputValue] = useState<string | number>(
    defaultValue || ""
  );
  let spinnerObject: React.ReactNode = null;
  let onleft = false,
    onright = false;

  useEffect(() => {
    setInputValue(value || "");
  }, [value]);

  if (enableSpinner) {
    spinnerObject = (
      <div className="flex flex-col justify-center w-full h-full">
        <button
          className="text-sm p-1 hover:bg-slate-200 flex-1 h-1/2"
          onClickCapture={() => setInputValue(Number(inputValue) + 1)}
        >
          ^
        </button>
        <button
          className="text-sm p-1 hover:bg-slate-200 flex-1 h-1/2"
          onPointerDown={() => setInputValue(Number(inputValue) - 1)}
        >
          ⌄
        </button>
      </div>
    );
    onright = true;
  }

  if (addonRight) {
    onright = true;
  }

  if (addonLeft) {
    onleft = true;
  }

  function FixPadding(): string {
    if (onleft && onright) {
      return "";
    }
    if (onright) {
      return "pl-4";
    }
    if (onleft) {
      return "pr-4";
    }
    return "px-4";
  }

  return (
    <div className="flex flex-col gap-2 items-start justify-start">
      {label && <label className="">
          {label}
        </label>}
      <div
        className={`flex flex-row items-center  ${FixPadding()} bg-white bg-clip-border rounded-md w-full`}
      >
        <div className="flex-1 w-full">{addonRight}</div>
        <div className="flex items-center flex-auto">
          <input
            className="outline-none w-full py-2"
            value={inputValue}
            onChange={(e) => {
              onChange && onChange(e);
              if (Number(e.target.value) > 10e20) {
                return;
              }
              if (!Number(e.target.value)) {
                if (e.target.value === "") {
                  setInputValue("");
                  return;
                }
                setInputValue(inputValue);
                return;
              }
              setInputValue(e.target.value);
            }}
            type="text"
            onBlur={(e) => {
              onBlur && onBlur(e);
              if (e.target.value === "") {
                setInputValue("");
                return;
              }
              if (!Number(e.target.value)) {
                setInputValue(inputValue);
                return;
              }
              setInputValue(Number(e.target.value));
            }}
          />
        </div>
        <div className="flex-1">{spinnerObject}</div>
        <div className="flex-1 w-full">{addonLeft}</div>
      </div>
    </div>
  );
}
