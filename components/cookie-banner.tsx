"use client";

import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CookiePreferences } from "@/components/cookie-preferences";
import { useCookieStore } from "@/lib/stores/cookie-store";

export default function CookieBanner() {
  const { consentGiven, setConsent, setPreferences } = useCookieStore();
  const [open, setOpen] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);

  useEffect(() => {
    setOpen(!consentGiven);
  }, [consentGiven]);

  const handleAccept = () => {
    setConsent(true);
    setPreferences({ analytics: true, marketing: true });
    setOpen(false);
  };

  const handleReject = () => {
    setConsent(true);
    setPreferences({ analytics: false, marketing: false });
    setOpen(false);
  };

  const handleSavePreferences = () => {
    if (showPreferences) {
      setConsent(true);
      setOpen(false);
    } else {
      setShowPreferences(true);
    }
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          handleAccept();
        }
        setOpen(isOpen);
      }}
    >
      <DialogContent className="p-md w-[90%] max-w-[600px] rounded-lg space-y-md">
        <DialogHeader className="space-y-md">
          <DialogTitle className="type-title-md">
            Cookie Preferences
          </DialogTitle>
          <DialogDescription className="type-body-sm text-muted-foreground">
            We use cookies to enhance your experience. You can accept all,
            customize your preferences, or continue without accepting. Closing
            this notice will automatically accept all cookies.
          </DialogDescription>
        </DialogHeader>

        {showPreferences ? <CookiePreferences /> : null}

        <DialogFooter className="flex sm:justify-center flex-wrap gap-md">
          <Button className="sm:flex-1" onClick={handleAccept}>
            That&apos;s Ok
          </Button>
          <Button variant="secondary" onClick={handleSavePreferences}>
            {showPreferences ? "Save Preferences" : "Manage Preferences"}
          </Button>
          <Button className="h-auto" variant="ghost" onClick={handleReject}>
            Continue Without Accepting
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
