import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Your Data & Security | The Modern Lighting Store",
  description: "Learn how The Modern Lighting Store protects your privacy and handles your personal data. Read our full Privacy Policy for details.",
  openGraph: {
    title: "Privacy Policy | Your Data & Security | The Modern Lighting Store",
    description: "Learn how The Modern Lighting Store protects your privacy and handles your personal data. Read our full Privacy Policy for details.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Your Data & Security | The Modern Lighting Store",
    description: "Learn how The Modern Lighting Store protects your privacy and handles your personal data. Read our full Privacy Policy for details.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-xl space-y-lg">
      <h1 className="type-title-lg">Privacy Policy</h1>

      <div className="space-y-xl">
        <p className="type-body-sm text-muted-foreground">
          Last updated: January 30, 2025
        </p>

        <p>
          This Privacy Policy describes how The Modern Lighting Store (the
          &quot;Site&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;)
          collects, uses, and discloses your personal information when you
          visit, use our services, or make a purchase from modernlighting.store
          (the &quot;Site&quot;) or otherwise communicate with us regarding the
          Site (collectively, the &quot;Services&quot;).
        </p>
      </div>

      <section className="space-y-sm">
        <h2 className="type-title-sm">Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time, including to
          reflect changes to our practices or for other operational, legal, or
          regulatory reasons. We will post the revised Privacy Policy on the
          Site, update the Last updated date and take any other steps required
          by applicable law.
        </p>
      </section>

      <section className="space-y-sm">
        <h2 className="type-title-sm">
          How We Collect and Use Your Personal Information
        </h2>
        <p>
          To provide the Services, we collect personal information about you
          from a variety of sources. The information that we collect and use
          varies depending on how you interact with us. In addition to the
          specific uses set out below, we may use information we collect about
          you to communicate with you, provide or improve the Services, comply
          with any applicable legal obligations, enforce any applicable terms of
          service, and to protect or defend the Services, our rights, and the
          rights of our users or others.
        </p>
      </section>

      <section className="space-y-sm">
        <h2 className="type-title-sm">What Personal Information We Collect</h2>
        <p>
          The types of personal information we obtain about you depends on how
          you interact with our Site and use our Services. When we use the term
          “personal information”, we are referring to information that
          identifies, relates to, describes or can be associated with you.
        </p>
      </section>

      <section className="space-y-sm">
        <h2 className="type-title-sm">
          Information We Collect Directly from You
        </h2>
        <p>
          Information that you directly submit to us through our Services may
          include:
        </p>
        <ul className="list-disc pl-lg type-body space-y-xs">
          <li>
            Contact details including your name, address, phone number, and
            email.
          </li>
          <li>
            Order information including your name, billing address, shipping
            address, payment confirmation, email address, and phone number.
          </li>
          <li>
            Account information including your username, password, security
            questions and other information used for account security purposes.
          </li>
          <li>
            Customer support information including the information you choose to
            include in communications with us.
          </li>
        </ul>
      </section>

      <section className="space-y-sm">
        <h2 className="type-title-sm">
          Information We Collect about Your Usage
        </h2>
        <p>
          We may also automatically collect certain information about your
          interaction with the Services (“Usage Data”). To do this, we may use
          cookies, pixels and similar technologies (“Cookies”). Usage Data may
          include information about how you access and use our Site and your
          account, including device information, browser information,
          information about your network connection, your IP address and other
          information regarding your interaction with the Services.
        </p>
      </section>

      <section className="space-y-sm">
        <h2 className="type-title-sm">
          Information We Obtain from Third Parties
        </h2>
        <p>
          We may obtain information about you from third parties, including from
          vendors and service providers who may collect information on our
          behalf, such as:
        </p>
        <ul className="list-disc pl-lg type-body space-y-xs">
          <li>Companies who support our Site and Services, such as Shopify.</li>
          <li>
            Our payment processors, who collect payment information to process
            your payment and fulfill your orders.
          </li>
        </ul>
      </section>

      <section className="space-y-sm">
        <h2 className="type-title-sm">How We Use Your Personal Information</h2>
        <div className="space-y-md">
          <div>
            <h3 className="type-title-xs">Providing Products and Services</h3>
            <p>
              We use your personal information to provide you with the Services,
              process payments, fulfill orders, send notifications, manage your
              account, arrange shipping, and facilitate returns and exchanges.
            </p>
          </div>

          <div>
            <h3 className="type-title-xs">Marketing and Advertising</h3>
            <p>
              We may use your personal information for marketing and promotional
              purposes, such as sending communications and showing you
              advertisements for products or services.
            </p>
          </div>

          <div>
            <h3 className="type-title-xs">Security and Fraud Prevention</h3>
            <p>
              We use your personal information to detect, investigate or take
              action regarding possible fraudulent, illegal or malicious
              activity.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-sm">
        <h2 className="type-title-sm">Contact</h2>
        <p>
          Should you have any questions about our privacy practices or this
          Privacy Policy, or if you would like to exercise any of the rights
          available to you, please contact us at:
        </p>
        <div>
          <p className="font-medium">
            Email:{" "}
            <a
              className="text-primary hover:underline font-medium"
              href="mailto:contact@modernlighting.store"
            >
              contact@modernlighting.store
            </a>
          </p>
        </div>
      </section>
    </div>
  );
}
