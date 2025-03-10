"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navbarItems } from "@/constants";
import "./Navbar.scss";
import Buttton from "../button/Buttton";

const NavBar = () => {
  const pathname = usePathname();

  useEffect(() => {
    const titles: Record<string, string> = {
      "/": "Home",
      "/about": "About Us",
      "/services": "Our Services",
      "/contact": "Contact Us",
      "/get-started": "Get Started",
      "/agents": "Agents",
      "/invest": "Invest",
      "/faqs": "Frequently Asked Questions",
      "/verified-agents": "Verified Agents",
      "/news": "News",
      "/projects": "Projects",
    };

    document.title = titles[pathname] || "Rhino Homes";
  }, [pathname]);

  return (
    <nav>
      <Link href={"/"}>
        <Image
          src="/applogo.png"
          alt=""
          width={61}
          height={39}
          className="cursor-pointer"
        />
      </Link>

      <div className="nav-items">
        {navbarItems.map((item, index) => (
          <Link href={item.url} key={index}>
            <div
              className={`nav-item ${pathname === item.url ? "active" : ""}`}
            >
              {item.title}
            </div>
          </Link>
        ))}
      </div>
      <div className="contact-buttons">
        <Buttton
          backgroundColor="white"
          height="38px"
          width="84px"
          href="/contact"
          label="Contact"
          border
          fontWeight={400}
        />
        <Buttton
          backgroundColor="black"
          height="38px"
          width="105px"
          href="/get-started"
          label="Get Started"
          border
          fontWeight={400}
        />
      </div>
    </nav>
  );
};

export default NavBar;
