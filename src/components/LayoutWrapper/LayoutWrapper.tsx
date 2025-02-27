"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import "./LayoutWrapper.scss";

// Dynamically import NavBar and Footer to improve performance
const NavBar = dynamic(() => import("@/components/NavBar/NavBar"));
const Footer = dynamic(() => import("@/components/Footer/Footer"));

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const noLayoutRoutes = new Set([
    "/get-started",
    "/auth/login",
    "/auth/register",
  ]);

  return (
    <div className="layout-wrapper">
      {!noLayoutRoutes.has(pathname) && <NavBar />}
      <div className="content">{children}</div>
      {!noLayoutRoutes.has(pathname) && <Footer />}
    </div>
  );
}
