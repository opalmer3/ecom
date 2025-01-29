import { CollectionEdge } from "@/types/storefront.types";
import { NavLink } from "./nav-link";

const footerLinks = {
  about: {
    title: "Information",
    links: [
      { label: "About", href: "/about" },
      { label: "Journal", href: "/journal" },
      { label: "Contact", href: "/contact" },
    ],
  },
};

const policies = [
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Refund policy", href: "/refund-policy" },
  { label: "Terms of service", href: "/terms-of-service" },
  { label: "Shipping policy", href: "/shipping-policy" },
  { label: "Contact information", href: "/contact" },
];

export function Footer({ collections }: { collections: CollectionEdge[] }) {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container py-md md:py-lg space-y-md md:space-y-lg">
        <div className="grid grid-cols-1 gap-(--spacing-lg) md:gap-(--spacing-3xl) md:grid-cols-3">
          <div className="space-y-3">
            <h2 className="type-title-lg">LUMENIQUE</h2>
            <p className="type-body-sm">
              Sleek, modern lighting designs. Combining style, innovation, and
              functionality, we illuminate your spaces with premium-quality
              lighting tailored to enhance any environment.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="type-title-sm">Discover</h3>
            <ul className="space-y-2">
              {collections.map((collection) => (
                <li key={collection.node.handle}>
                  <NavLink
                    className="text-muted-foreground/80 hover:text-muted-foreground"
                    href={`/${collection.node.handle}`}
                  >
                    {collection.node.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key} className="space-y-3">
              <h3 className="type-title-sm">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <NavLink
                      className="text-muted-foreground/80 hover:text-muted-foreground"
                      href={link.href}
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Policies */}
        <div className="flex flex-wrap gap-md justify-center md:justify-end border-t border-muted-foreground/20 pt-md md:pt-lg">
          {policies.map((policy) => (
            <NavLink
              key={policy.href}
              className="type-body-sm text-muted-foreground/80 hover:text-muted-foreground"
              href={policy.href}
            >
              {policy.label}
            </NavLink>
          ))}
        </div>
      </div>
    </footer>
  );
}
