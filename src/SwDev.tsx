// service worker component

import { useEffect, useState } from "react";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const SwDev = () => {
  const [showInstallTag, setShowInstallTag] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("../sw.ts");
    }

    if (!window.matchMedia("(display-mode: standalone)").matches)
      setShowInstallTag(true);

    window.addEventListener("beforeinstallprompt", (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      return false;
    });
  }, []);

  const handleShowInstallPrompt = () => {
    console.log(deferredPrompt);

    if (deferredPrompt) {
      deferredPrompt.prompt();
      setShowInstallTag(false);

      deferredPrompt.userChoice.then((choiceRes) => {
        if (choiceRes.outcome === "accepted") {
          console.log("user accepted install prompt");
        } else if (choiceRes.outcome === "dismissed") {
          console.log("user dismissed install prompt");
        }
      });

      setDeferredPrompt(null);
    }
  };

  return (
    showInstallTag && (
      <div className="install-banner">
        <p>Install our app for a better experience!</p>
        <button className="install-button" onClick={handleShowInstallPrompt}>
          Install
        </button>
      </div>
    )
  );
};

export default SwDev;
