import Link from "next/link";
import { Metadata } from "next";

export default function CookieNoticePage() {
  return (
    <div className="container py-xl md:py-3xl">
      <div className="space-y-2xl">
        <div className="space-y-md">
          <h1 className="type-title-lg">Cookie Notice</h1>
          <p className="type-body-lg">
            We use cookies and similar technologies to help personalize content,
            tailor and measure ads, and provide a better experience. By clicking
            accept, you agree to this use. We value your privacy and aim to be fully
            transparent about how and why we use these technologies.
          </p>
        </div>

        <div className="space-y-xl">
          <section className="space-y-md">
            <h2 className="type-title-md">What are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when
              you visit a website. They help the website remember your
              preferences and how you use it, making your next visit easier and
              the site more useful to you.
            </p>
            <p>
              When you visit our website, we may create cookies on your browser.
              Some cookies are deleted when you close your browser (session cookies),
              while others stay on your device until they expire or you delete them
              (persistent cookies).
            </p>
          </section>

          <section className="space-y-md">
            <h2 className="type-title-md">How We Use Cookies</h2>
            <p className="text-muted-foreground">
              We use cookies for different purposes, and some are necessary for our
              website&apos;s technical operation. Here&apos;s a detailed overview of
              how we use different types of cookies:
            </p>
            
            <div className="space-y-md">
              <div className="space-y-sm">
                <h3 className="type-title-sm">Essential Cookies</h3>
                <p>
                  These cookies are necessary for the website to function
                  properly. They enable basic functions like page navigation,
                  access to secure areas, and e-commerce features. The website
                  cannot function properly without these cookies.
                </p>
                <p>
                  Essential cookies help us to:
                </p>
                <ul className="list-disc list-inside space-y-xs ml-md">
                  <li>Remember what&apos;s in your shopping cart</li>
                  <li>Enable secure checkout processes</li>
                  <li>Remember your login status</li>
                  <li>Make sure the website looks consistent</li>
                  <li>Enable you to access your account</li>
                </ul>
              </div>

              <div className="space-y-sm">
                <h3 className="type-title-sm">Analytics Cookies</h3>
                <p>
                  We use Google Analytics to understand how visitors interact with
                  our website. This helps us improve our website&apos;s structure
                  and content. The data collected is anonymous and does not
                  personally identify you.
                </p>
                <p>
                  Analytics cookies allow us to:
                </p>
                <ul className="list-disc list-inside space-y-xs ml-md">
                  <li>Understand how you reach our website</li>
                  <li>Recognize which pages are most popular</li>
                  <li>See how you move around the site</li>
                  <li>Identify if you encounter any errors</li>
                  <li>Test different versions of web pages to improve user experience</li>
                </ul>

                <p className="font-medium mt-md">Cookies used:</p>
                <ul className="list-disc list-inside space-y-xs ml-md">
                  <li>_ga: Used to distinguish users</li>
                  <li>_ga_[ID]: Used to persist session state</li>
                  <li>_gid: Used to distinguish users</li>
                  <li>_gat: Used to throttle request rate</li>
                </ul>
              </div>

              <div className="space-y-sm">
                <h3 className="type-title-sm">Marketing Cookies</h3>
                <p>
                  These cookies are used to track visitors across websites. The
                  intention is to display ads that are relevant and engaging for
                  individual users and thereby more valuable for publishers and
                  third-party advertisers.
                </p>
                <p>
                  At this moment we are not using any third-party marketing
                  cookies. We may use them in the future to:
                </p>
                <ul className="list-disc list-inside space-y-xs ml-md">
                  <li>Display personalized advertisements</li>
                  <li>Measure the effectiveness of our advertising campaigns</li>
                  <li>Prevent the same ad from continuously reappearing</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="space-y-md">
            <h2 className="type-title-md">Your Cookie Preferences</h2>
            <p>
              You can manage your cookie preferences in our dedicated cookie
              settings page. Essential cookies cannot be disabled as they are
              required for the website to function properly. You can change your
              preferences at any time, and your choices will be respected across our website.{" "}
              <Link
                className="text-primary hover:underline font-medium"
                href="/cookie-settings"
              >
                Manage Cookie Settings
              </Link>
            </p>
          </section>

          <section className="space-y-md">
            <h2 className="type-title-md">More Information</h2>
            <p>
              For more information about how we protect your privacy, please
              review our{" "}
              <Link
                className="text-primary hover:underline font-medium"
                href="/privacy-policy"
              >
                Privacy Policy
              </Link>
              . This cookie notice was last updated on February 7, 2025. We may
              update this notice from time to time to reflect changes in technology,
              legislation, or our data practices. If you have any questions about
              our use of cookies, please{" "}
              <Link
                className="text-primary hover:underline font-medium"
                href="/contact"
              >
                contact us
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export const metadata: Metadata = {
  title: "Cookie Policy | How We Use Cookies | The Modern Lighting Store",
  description: "Understand how The Modern Lighting Store uses cookies to enhance your browsing experience. Read our Cookie Policy for more details.",
  openGraph: {
    title: "Cookie Policy | How We Use Cookies | The Modern Lighting Store",
    description: "Understand how The Modern Lighting Store uses cookies to enhance your browsing experience. Read our Cookie Policy for more details.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Cookie Policy | How We Use Cookies | The Modern Lighting Store",
    description: "Understand how The Modern Lighting Store uses cookies to enhance your browsing experience. Read our Cookie Policy for more details.",
  },
};
