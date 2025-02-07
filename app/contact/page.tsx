import { Metadata } from "next";
import { ContactForm } from "./components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get in Touch | The Modern Lighting Store",
  description:
    "Have questions? Contact The Modern Lighting Store for expert advice on modern lighting solutions. We're here to help with orders, design tips, and more.",
  openGraph: {
    title: "Contact Us | Get in Touch | The Modern Lighting Store",
    description:
      "Have questions? Contact The Modern Lighting Store for expert advice on modern lighting solutions. We're here to help with orders, design tips, and more.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact Us | Get in Touch | The Modern Lighting Store",
    description:
      "Have questions? Contact The Modern Lighting Store for expert advice on modern lighting solutions. We're here to help with orders, design tips, and more.",
  },
};

export default function ContactPage() {
  return (
    <div className="container py-xl space-y-lg">
      <h1 className="type-title-lg">Contact Us</h1>
      <p>
        Have a question or need assistance? We&apos;re here to help. Fill out
        the form below and we&apos;ll get back to you as soon as possible.
      </p>
      <ContactForm />
    </div>
  );
}
