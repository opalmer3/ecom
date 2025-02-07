"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { submitContactForm } from "@/app/contact/actions/contact";

type Message = {
  type: "success" | "error";
  text: string;
} | null;

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<Message>(null);

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true);
    setMessage(null);

    try {
      const result = await submitContactForm(formData);

      if (result.success) {
        setMessage({ type: "success", text: "Message sent successfully!" });
        formRef.current?.reset();
      } else {
        setMessage({
          type: "error",
          text: result.errors?.[0]?.message || "Failed to send message",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An unexpected error occurred",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <>
      <form
        ref={formRef}
        className={cn(
          "space-y-6 p-md bg-muted rounded-md flex flex-col transform transition-all duration-300 ease-in-out overflow-hidden",
          message?.type === "success" && "h-0 p-0"
        )}
        onSubmit={(e) => {
          e.preventDefault();
          if (!formRef.current) return;
          const formData = new FormData(formRef.current);
          handleSubmit(formData);
        }}
      >
        <Input
          required
          id="name"
          label="Name"
          maxLength={100}
          name="name"
          placeholder="Enter your name"
          type="text"
        />

        <Input
          required
          id="email"
          label="Email"
          maxLength={100}
          name="email"
          placeholder="your.email@example.com"
          type="email"
        />

        <Input
          id="phone"
          label="Phone"
          maxLength={20}
          name="phone"
          placeholder="+44 (0)7123 456789"
          type="tel"
        />

        <Input
          isTextArea
          required
          id="message"
          label="Message"
          maxLength={1000}
          name="message"
          placeholder="Please describe how we can help you. Include any relevant details about your enquiry..."
          rows={5}
        />

        <Button
          className="w-full sm:w-auto sm:ml-auto"
          disabled={isSubmitting}
          size="lg"
          type="submit"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>

      {message && (
        <div
          className={`p-4 mb-6 rounded ${
            message.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          {message.text}
        </div>
      )}
    </>
  );
}
