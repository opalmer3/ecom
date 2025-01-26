import { forwardRef } from "react";

type BaseInputProps = {
  label: string;
  error?: string;
  isTextArea?: boolean;
};

type TextAreaProps = BaseInputProps &
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    isTextArea: true;
  };

type StandardInputProps = BaseInputProps &
  React.InputHTMLAttributes<HTMLInputElement> & {
    isTextArea?: false;
  };

type InputProps = TextAreaProps | StandardInputProps;

export const Input = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  InputProps
>(({ label, error, isTextArea, className = "", ...props }, ref) => {
  const Component = isTextArea ? "textarea" : "input";
  const isRequired = props.required;

  return (
    <div className="w-full flex flex-col gap-sm">
      <label className="block type-body-sm" htmlFor={props.id}>
        {label} {isRequired && "*"}
      </label>
      <Component
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={ref as any}
        className={`w-full px-md py-xs border rounded-md focus:ring-2 focus:ring-primary focus:border-primary ${
          error ? "border-red-500" : "border-border"
        } ${className}`}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
});

Input.displayName = "Input";
