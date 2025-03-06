"use client";

import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import clsx from "clsx";
import "./LayoutWrapper.scss";

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
    <div
      className={clsx(
        "layout-wrapper w-full mx-auto  mb-[20px]",
        pathname === "/get-started" ? "mt-[20px]" : "mt-[50px]"
      )}
    >
      {!noLayoutRoutes.has(pathname) && <NavBar />}
      <div className="content">{children}</div>
      {!noLayoutRoutes.has(pathname) && <Footer />}
    </div>
  );
}
