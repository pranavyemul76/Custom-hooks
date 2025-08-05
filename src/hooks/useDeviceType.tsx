import { useEffect, useState } from "react";

type DeviceType = "mobile" | "tablet" | "desktop" | undefined;

const getDeviceTypeFromUA = (userAgent: string): DeviceType => {
  const ua = userAgent.toLowerCase();

  if (/mobile|android|iphone|ipod|blackberry|iemobile|opera mini/.test(ua)) {
    return "mobile";
  }

  if (/ipad|tablet|kindle|silk/.test(ua)) {
    return "tablet";
  }

  return "desktop";
};

const getDeviceType = (width: number): DeviceType => {
  if (width <= 767) return "mobile";
  if (width <= 1024) return "tablet";
  return "desktop";
};

const useDeviceType = (userAgent?: boolean): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>();

  useEffect(() => {
    const windowSize = typeof window !== "undefined" ? window.innerWidth : 1024;
    if (userAgent && typeof navigator !== "undefined") {
      const userAgent = navigator.userAgent;
      const detectedType = getDeviceTypeFromUA(userAgent);
      setDeviceType(detectedType);
    } else {
      const handleResize = () => {
        const newType = getDeviceType(window.innerWidth);
        setDeviceType(newType);
      };

      setDeviceType(getDeviceType(windowSize));

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }
  }, [userAgent]);

  return deviceType;
};

export default useDeviceType;
