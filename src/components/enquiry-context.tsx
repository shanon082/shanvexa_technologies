"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import type { Service } from "@/lib/site";

const EnquiryContext = createContext<{
  service: Service;
  setService: (service: Service) => void;
} | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [service, setService] = useState<Service>("");
  return (
    <EnquiryContext.Provider value={{ service, setService }}>
      {children}
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context)
    throw new Error("Enquiry components must be inside EnquiryProvider");
  return context;
}

export function ServiceLink({
  service,
  children,
  className,
}: {
  service: Service;
  children: ReactNode;
  className?: string;
}) {
  const { setService } = useEnquiry();
  return (
    <a
      href="#contact"
      className={className}
      onClick={() => setService(service)}
    >
      {children}
    </a>
  );
}
