"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { navbarItems } from "@/constants";
import "./Navbar.scss";

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
        <Link href={"/contact"}>
          <button className="contact">Contact</button>
        </Link>
        <Link href={"/get-started"}>
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
