import FooterSocial from "@/components/FooterSocial";
import React from "react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  // Create any shared layout or styles here
  return (
    <div className="prose-custom m-auto min-h-screen p-4 overflow-y-auto overflow-x-hidden antialiased">
      {children}
      
    </div>
  );
}
