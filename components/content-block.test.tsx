import * as React from "react";
import { describe, it, expect, vi } from "vitest";
import { render } from "vitest-browser-react";
import { SplitContentBlock } from "./content-block";

// Mock the ResponsiveImage component since it's likely a custom component
vi.mock("@/components/ui/responsive-image", () => ({
  ResponsiveImage: ({
    alt,
    src,
    ...props
  }: React.ComponentProps<"img">): React.ReactNode => (
    <img alt={alt} src={src} {...props} /> // eslint-disable-line @next/next/no-img-element
  ),
}));

const mockContent = {
  img: "/test-image.jpg",
  alt: "Test image description",
  eyebrow: "Featured Content",
  title: "Test Content Block Title",
  description: "This is a test description for the content block component.",
};

describe("SplitContentBlock", () => {
  it("renders all content elements correctly", () => {
    const screen = render(
      <SplitContentBlock content={mockContent} variant="half-left" />
    );

    // Test that the section is rendered with proper accessibility attributes
    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();
    expect(section).toHaveAttribute(
      "aria-labelledby",
      `${mockContent.title}-title`
    );
    expect(section).toHaveAttribute(
      "aria-describedby",
      `${mockContent.title}-description`
    );

    // Test that the image is rendered with correct alt text
    const image = screen.getByRole("img");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("alt", mockContent.alt);
    expect(image).toHaveAttribute("src", mockContent.img);

    // Test that the eyebrow text is rendered
    const eyebrow = screen.getByText(mockContent.eyebrow);
    expect(eyebrow).toBeInTheDocument();
    expect(eyebrow).toHaveClass("type-button-md", "uppercase");

    // Test that the title is rendered as a heading with correct id
    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
    expect(title).toHaveTextContent(mockContent.title);
    expect(title).toHaveAttribute("id", `${mockContent.title}-title`);
    expect(title).toHaveClass("type-title-lg");

    // Test that the description is rendered
    const description = screen.getByText(mockContent.description);
    expect(description).toBeInTheDocument();
    expect(description).toHaveClass("type-body-md");
  });

  it("applies correct variant classes for half-left layout", () => {
    const screen = render(
      <SplitContentBlock content={mockContent} variant="half-left" />
    );

    const section = screen.getByRole("region");
    expect(section).toHaveClass(
      "container",
      "grid",
      "w-full",
      "grid-cols-2",
      "py-xl"
    );
  });

  it("applies correct variant classes for half-right layout", () => {
    const screen = render(
      <SplitContentBlock content={mockContent} variant="half-right" />
    );

    const section = screen.getByRole("region");
    expect(section).toHaveClass(
      "container",
      "grid",
      "w-full",
      "grid-cols-2",
      "py-xl"
    );
  });

  it("applies correct variant classes for third-left layout", () => {
    const screen = render(
      <SplitContentBlock content={mockContent} variant="third-left" />
    );

    const section = screen.getByRole("region");
    expect(section).toHaveClass(
      "container",
      "grid",
      "w-full",
      "grid-cols-2",
      "py-xl"
    );
  });

  it("uses default variant when none is specified", () => {
    const screen = render(<SplitContentBlock content={mockContent} />);

    const section = screen.getByRole("region");
    expect(section).toBeInTheDocument();

    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toBeInTheDocument();
  });

  it("generates unique IDs based on title content", () => {
    const customContent = {
      ...mockContent,
      title: "Custom Title With Spaces",
    };

    const screen = render(
      <SplitContentBlock content={customContent} variant="half-left" />
    );

    const section = screen.getByRole("region");
    expect(section).toHaveAttribute(
      "aria-labelledby",
      "Custom Title With Spaces-title"
    );
    expect(section).toHaveAttribute(
      "aria-describedby",
      "Custom Title With Spaces-description"
    );

    const title = screen.getByRole("heading", { level: 2 });
    expect(title).toHaveAttribute("id", "Custom Title With Spaces-title");
  });
});
