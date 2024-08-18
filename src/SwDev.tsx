// service worker component

import { useEffect } from "react";

const SwDev = () => {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("../sw.ts");
    }
  }, []);

  return null;
};

export default SwDev;
