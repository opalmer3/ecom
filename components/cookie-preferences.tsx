"use client";

import { Switch } from "@/components/ui/switch";
import { useCookieStore } from "@/lib/stores/cookie-store";

interface CookiePreferencesProps {
  showControls?: boolean;
  onSave?: () => void;
}

export function CookiePreferences({ onSave }: CookiePreferencesProps) {
  const { preferences, setPreferences, setConsent } = useCookieStore();

  const handleSave = () => {
    setConsent(true);
    onSave?.();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col space-y-3">
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label className="font-medium">Essential Cookies</label>
            <p className="type-body-sm text-muted-foreground">
              Required for the website to function.
            </p>
          </div>
          <Switch checked disabled />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label className="font-medium">Analytics Cookies</label>
            <p className="type-body-sm text-muted-foreground">
              Help us improve our website.
            </p>
          </div>
          <Switch
            checked={preferences.analytics}
            onCheckedChange={(value) => setPreferences({ analytics: value })}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="space-y-0.5">
            <label className="font-medium">Marketing Cookies</label>
            <p className="type-body-sm text-muted-foreground">
              Used for targeted advertising.
            </p>
          </div>
          <Switch
            checked={preferences.marketing}
            onCheckedChange={(value) => setPreferences({ marketing: value })}
          />
        </div>
      </div>
    </div>
  );
}
