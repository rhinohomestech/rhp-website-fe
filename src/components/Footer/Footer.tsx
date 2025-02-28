"use client";

import { footerItems } from "@/constants";
import "./Footer.scss";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer>
      <div className="content">
        <header>
          <div className="titleBlock">
            <h3>Looking for a dream property?</h3>
            <p>We can help you realize your dream of a new home</p>
          </div>
          <button>Explore Properties</button>
        </header>

        <hr />
        <div className="the-real-footer">
          <div className="left-box">
            <Image
              src="/white-app-icon.png"
              alt=""
              width={112}
              height={72}
              className="img"
            />
            <p>
              We build luxury and affordable homes for our clients at
              competitive costs, and we enable investors partner with us at
              different stages of our projects.
            </p>
            <div className="email">
              <input type="text" placeholder="Write your email" />
              <button>Submit</button>
            </div>
          </div>
          <div className="right-box">
            <div className="footer-links company">
              <h1>Company</h1>
              {footerItems.Company.map((item, index) => (
                <Link href={item.url} key={index}>
                  <span key={index}>{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="footer-links services">
              <h1>Services</h1>
              {footerItems.Services.map((item, index) => (
                <Link href={item.url} key={index}>
                  <span key={index}>{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="footer-links customer-care">
              <h1>Customer Care</h1>
              {footerItems.CustomerCare.map((item, index) => (
                <Link href={item.url} key={index}>
                  <span key={index}>{item.title}</span>
                </Link>
              ))}
            </div>
            <div className="footer-links security ">
              <h1>Security</h1>
              {footerItems.Security.map((item, index) => (
                <Link href={item.url} key={index}>
                  <span key={index}>{item.title}</span>
                </Link>
              ))}
            </div>
            <Image
              src="/card.png"
              width={249}
              height={28}
              className=""
              alt=""
            />
          </div>
        </div>

        <div className="all-rights-reserved">
          All Rights Reserved @Rhino Homs & Properties
        </div>
      </div>
    </footer>
  );
};

export default Footer;
