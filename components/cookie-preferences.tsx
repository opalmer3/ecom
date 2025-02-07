"use client";

import { Switch } from "@/components/ui/switch";
import { useCookieStore } from "@/lib/stores/cookie-store";

export function CookiePreferences() {
  const { preferences, setPreferences } = useCookieStore();

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label className="font-medium" id="essential-cookies-label">
              Essential Cookies
            </label>
            <p className="type-body-sm" id="essential-cookies-description">
              Required for the website to function.
            </p>
          </div>
          <Switch
            checked
            disabled
            aria-describedby="essential-cookies-description"
            aria-labelledby="essential-cookies-label"
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label className="font-medium" id="analytics-cookies-label">
              Analytics Cookies
            </label>
            <p className="type-body-sm" id="analytics-cookies-description">
              Help us improve our website.
            </p>
          </div>
          <Switch
            aria-describedby="analytics-cookies-description"
            aria-labelledby="analytics-cookies-label"
            checked={preferences.analytics}
            onCheckedChange={(value) => setPreferences({ analytics: value })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label className="font-medium" id="marketing-cookies-label">
              Marketing Cookies
            </label>
            <p className="type-body-sm" id="marketing-cookies-description">
              Used for targeted advertising.
            </p>
          </div>
          <Switch
            aria-describedby="marketing-cookies-description"
            aria-labelledby="marketing-cookies-label"
            checked={preferences.marketing}
            onCheckedChange={(value) => setPreferences({ marketing: value })}
          />
        </div>
      </div>
    </div>
  );
}
