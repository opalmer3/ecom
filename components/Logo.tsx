import { ResponsiveImage } from "@/components/ui/responsive-image";
import { siteConfig } from "@/lib/site.config";

export const Logo = () => {
  return (
    <ResponsiveImage
      fill
      alt={siteConfig.name}
      containerClassName={`aspect-[${siteConfig.logoAspectRatio}] w-[150px] sm:w-[180px]`}
      sizes="180px"
      src={siteConfig.logo}
    />
  );
};
