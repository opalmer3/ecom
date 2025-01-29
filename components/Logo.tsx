import { LampDeskIcon, LampWallDownIcon } from "lucide-react";

export const Logo = () => {
  return (
    <h1 className="type-title-sm font-light relative text-primary">
      THE MODERN <br /> LIGHTING STORE
      <LampDeskIcon className="absolute top-0 right-0 stroke-[1.5px] scale-x-[-1]" />
    </h1>
  );
};
