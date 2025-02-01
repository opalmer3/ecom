import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="container py-xl space-y-lg">
      <h1 className="type-title-lg">Terms of Service</h1>

      <div className="space-y-xl">
        <p className="type-body-sm text-muted-foreground">
          Last updated: January 31, 2025
        </p>

        <section className="space-y-sm">
          <h2 className="type-title-sm">Overview</h2>
          <p>
            This website is operated by The Modern Lighting Store. Throughout
            the site, the terms &quot;we&quot;, &quot;us&quot; and
            &quot;our&quot; refer to The Modern Lighting Store. The Modern
            Lighting Store offers this website, including all information, tools
            and Services available from this site to you, the user, conditioned
            upon your acceptance of all terms, conditions, policies and notices
            stated here.
          </p>
          <p>
            By visiting our site and/or purchasing something from us, you engage
            in our &quot;Service&quot; and agree to be bound by the following
            terms and conditions (&quot;Terms of Service&quot;,
            &quot;Terms&quot;), including those additional terms and conditions
            and policies referenced herein and/or available by hyperlink.
          </p>
          <p>
            Please read these Terms of Service carefully before accessing or
            using our website. By accessing or using any part of the site, you
            agree to be bound by these Terms of Service. If you do not agree to
            all the terms and conditions of this agreement, then you may not
            access the website or use any Services.
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">1. Online Store Terms</h2>
          <p>
            By agreeing to these Terms of Service, you represent that you are at
            least the age of majority in your country, state or province of
            residence.
          </p>
          <ul className="list-disc pl-lg type-body space-y-xs">
            <li>
              You may not use our products for any illegal or unauthorized
              purpose
            </li>
            <li>
              You must not transmit any worms or viruses or any code of a
              destructive nature
            </li>
            <li>
              A breach or violation of any of the Terms will result in an
              immediate termination of your Services
            </li>
          </ul>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">2. General Conditions</h2>
          <ul className="list-disc pl-lg type-body space-y-xs">
            <li>
              We reserve the right to refuse Service to anyone for any reason at
              any time
            </li>
            <li>
              Your content (not including credit card information) may be
              transferred unencrypted and involve transmissions over various
              networks
            </li>
            <li>
              Credit card information is always encrypted during transfer over
              networks
            </li>
            <li>
              You agree not to reproduce, duplicate, copy, sell, resell or
              exploit any portion of the Service without express written
              permission
            </li>
          </ul>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">3. Products and Services</h2>
          <p>
            Certain products or Services may be available exclusively online
            through the website. These products or Services may have limited
            quantities and are subject to return or exchange only according to
            our{" "}
            <Link
              className="text-primary hover:underline font-medium"
              href="/returns-policy"
            >
              Returns Policy
            </Link>
            .
          </p>
          <ul className="list-disc pl-lg type-body space-y-xs">
            <li>
              We have made every effort to display as accurately as possible the
              colors and images of our products
            </li>
            <li>
              We reserve the right to limit the sales of our products or
              Services to any person, geographic region or jurisdiction
            </li>
            <li>
              All descriptions of products or product pricing are subject to
              change at any time without notice
            </li>
          </ul>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">4. Accuracy of Information</h2>
          <p>
            We reserve the right to modify the contents of this site at any
            time, but we have no obligation to update any information on our
            site. You agree that it is your responsibility to monitor changes to
            our site.
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">5. Third-Party Links</h2>
          <p>
            Certain content, products and Services available via our Service may
            include materials from third-parties. Third-party links on this site
            may direct you to third-party websites that are not affiliated with
            us.
          </p>
          <p>
            We are not responsible for examining or evaluating the content or
            accuracy of third-party materials or websites, or for any other
            materials, products, or Services of third-parties.
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">6. Personal Information</h2>
          <p>
            Your submission of personal information through the store is
            governed by our{" "}
            <Link
              className="text-primary hover:underline font-medium"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">7. Errors and Omissions</h2>
          <p>
            Occasionally there may be information on our site or in the Service
            that contains typographical errors, inaccuracies or omissions. We
            reserve the right to correct any errors, inaccuracies or omissions,
            and to change or update information at any time without prior
            notice.
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">8. Governing Law</h2>
          <p>
            These Terms of Service and any separate agreements whereby we
            provide you Services shall be governed by and construed in
            accordance with the laws of United Kingdom.
          </p>
        </section>

        <section className="space-y-sm">
          <h2 className="type-title-sm">Contact</h2>
          <p>
            Questions about the Terms of Service should be sent to us at:{" "}
            <a
              className="text-primary hover:underline font-medium"
              href="mailto:contact@modernlighting.store"
            >
              contact@modernlighting.store
            </a>
          </p>
        </section>
      </div>
    </div>
  );
}
