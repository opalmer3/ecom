import { CookiePreferences } from "@/components/cookie-preferences";
import Link from "next/link";

export default function CookieSettingsPage() {
  return (
    <div className="container py-xl md:py-3xl">
      <div className="space-y-xl">
        <div className="space-y-md">
          <h1 className="type-title-lg">Cookie Settings</h1>
          <p className="type-body-lg text-muted-foreground">
            Manage your cookie preferences. These settings can be changed at any
            time to control how we collect and use information when you visit
            our website.
          </p>
        </div>

        <div className="space-y-md">
          <h2 className="type-title-md">About Your Choices</h2>
          <div className="space-y-sm">
            <p>
              We respect your right to privacy and provide you with control over
              your data. While essential cookies are necessary for the website
              to function, you can choose whether to allow analytics cookies
              that help us improve your experience.
            </p>
            <p>
              Your choices will be saved and applied across our website. You can
              return to this page at any time to review or update your
              preferences.
            </p>
          </div>
        </div>

        <div className="rounded-lg border bg-card p-xl">
          <div className="space-y-md">
            <h2 className="type-title-sm">Cookie Preferences</h2>
            <CookiePreferences />
          </div>
        </div>

        <div className="space-y-md">
          <h2 className="type-title-md">Additional Information</h2>
          <p>
            To learn more about how we use cookies and your privacy rights,
            please read our{" "}
            <Link
              className="text-primary hover:underline font-medium"
              href="/cookie-notice"
            >
              Cookie Notice
            </Link>{" "}
            and{" "}
            <Link
              className="text-primary hover:underline font-medium"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
            . If you have questions about your privacy settings, please{" "}
            <Link
              className="text-primary hover:underline font-medium"
              href="/contact"
            >
              contact us
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
