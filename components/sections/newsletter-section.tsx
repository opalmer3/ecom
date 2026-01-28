"use client";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface NewsletterSectionProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  onSubmit?: (email: string) => Promise<void>;
  className?: string;
}

/**
 * Newsletter Section
 *
 * Email signup form with heading and description.
 *
 * @example
 * ```tsx
 * <NewsletterSection
 *   title="Stay in the Loop"
 *   description="Get exclusive offers and updates"
 *   placeholder="Enter your email"
 *   buttonText="Subscribe"
 *   onSubmit={async (email) => { await subscribeToNewsletter(email) }}
 * />
 * ```
 */
export function NewsletterSection({
  title = "Subscribe to Our Newsletter",
  description,
  placeholder = "Enter your email",
  buttonText = "Subscribe",
  onSubmit,
  className,
}: NewsletterSectionProps) {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !onSubmit) return;

    setIsLoading(true);
    setMessage(null);

    try {
      await onSubmit(email);
      setMessage({ type: "success", text: "Thanks for subscribing!" });
      setEmail("");
    } catch {
      setMessage({ type: "error", text: "Something went wrong. Try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={cn("py-3xl bg-muted", className)}>
      <div className="container">
        <div className="text-center">
          {title && <h2 className="type-title-lg mb-md">{title}</h2>}
          {description && (
            <p className="type-body-lg text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}

          <form className="flex gap-sm" onSubmit={handleSubmit}>
            <Input
              required
              className="flex-1"
              label="Email"
              placeholder={placeholder}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button className="self-end" disabled={isLoading} type="submit">
              {isLoading ? "..." : buttonText}
            </Button>
          </form>

          {message && (
            <p
              className={cn(
                "mt-md type-body-sm",
                message.type === "success"
                  ? "text-green-600"
                  : "text-destructive"
              )}
            >
              {message.text}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
