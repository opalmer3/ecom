import Link from "next/link";
import { ResponsiveImage } from "@/components/ui/responsive-image";

export const Logo = () => {
  return (
    <ResponsiveImage
      fill
      alt="The Modern Lighting Store"
      containerClassName="aspect-[48/13] w-[150px] sm:w-[180px]"
      sizes="180px"
      src="/logo.png"
    />
  );
};
