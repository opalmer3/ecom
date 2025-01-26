import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface SelectProps extends React.ComponentProps<"select"> {
  containerClassName?: string;
}

const Select = ({
  children,
  className = "",
  containerClassName = "",
  ...rest
}: SelectProps) => {
  return (
    <div className={cn("relative", containerClassName)}>
      <select
        className={cn(
          "appearance-none w-full px-md py-sm pr-8 rounded-full bg-secondary text-secondary-foreground",
          className
        )}
        {...rest}
      >
        {children}
      </select>
      <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 size-4 text-secondary-foreground pointer-events-none" />
    </div>
  );
};

export { Select };
