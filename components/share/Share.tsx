"use client";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { JSX } from "react";
import { cn } from "@/lib/utils";

interface ShareProps {
  title: string;
  url: string;
}

type ShareOption = {
  name: string;
  icon: () => JSX.Element;
  href?: string;
  onClick?: () => void;
  hoverClassName?: string;
};

export const Share = ({ title, url }: ShareProps) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const shareOptions: ShareOption[] = [
    {
      name: "WhatsApp",
      icon: () => (
        <svg
          className="size-5"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
        </svg>
      ),
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      hoverClassName: "hover:text-[#25D366] transition-colors",
    },
    {
      name: "Facebook",
      icon: () => (
        <svg
          className="size-5"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
        </svg>
      ),
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      hoverClassName: "hover:text-[#1877F2] transition-colors",
    },
    {
      name: "X",
      icon: () => (
        <svg
          className="size-5"
          fill="currentColor"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
        </svg>
      ),
      href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      hoverClassName: "hover:text-black transition-colors",
    },
    {
      name: "Copy Link",
      icon: () => <Copy className="size-5" />,
      onClick: () => navigator.clipboard.writeText(url),
      hoverClassName: "hover:text-foreground transition-colors",
    },
  ];

  return (
    <div className="flex gap-2xs">
      {shareOptions.map((option) => (
        <Button
          key={option.name}
          aria-label={`Share on ${option.name}`}
          asChild={!!option.href}
          className={cn(option.hoverClassName)}
          size="icon"
          variant="ghost"
          onClick={option?.onClick}
        >
          {option.href ? (
            <a href={option.href} rel="noopener noreferrer" target="_blank">
              {option.icon()}
            </a>
          ) : (
            option.icon()
          )}
        </Button>
      ))}
    </div>
  );
};
