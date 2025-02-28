import Image from "next/image";
import "../sass/home.scss";
import { offeringsText } from "@/constants";
import Link from "next/link";


const Home = () => {
  return (
    <div className="home">
      <section className="find-dream-property">
        <Image
          src="/3d.jpeg"
          width={1240}
          height={627}
          alt=""
          className="img"
        />

        <div className="info">
          <h1>Find Your Dream Property</h1>
          <p>
            We build luxury and affordable homes and commercial spaces for our
            clients at competitive costs, and we enable investors partner with
            us at different stages of our projects
          </p>

          <div className="explore">
            <Link href={"/explore"}>
              <button className="explore-btn">Explore Projects</button>
            </Link>
            <Link href={"/agent"}>
              <button className="become">Become an Agent</button>
            </Link>
          </div>
        </div>
      </section>

      <section className="rhino-homes-container">
        <div className="rhino-homes">
          <h1>
            Rhino Homes & <span className="text-[#FF5A3C]">Properties</span>
            Ltd.
          </h1>
          <p>
            <span className="red-font">OUR</span>
            <span className="mission"> MISSION </span>- We are committed to
            transforming dreams into reality by creating exceptional living and
            working spaces. Our mission is to be a leading residential and
            commercial real estate developer, dedicated to delivering
            innovative, sustainable, and high-quality projects that enhance
            communities and exceed the expectations of our stakeholders.
          </p>
          <p className="vision">
            <span className="red-font">OUR</span>
            <span className="mission"> VISION </span>- To be the benchmark in
            the real estate industry across Africa recognized for our visionary
            approach, impeccable craftsmanship, and unwavering commitment to
            creating spaces that inspire and endure.
          </p>
          <button>read more</button>
        </div>
        <div className="rhino-photos">
          <Image
            width={590}
            height={549}
            src="/rhino-homes.png"
            alt=""
            className="img"
          />
        </div>
      </section>

      <section className="our-offerings-container">
        <Image
          src="/our-offerings.png"
          width={424}
          height={485}
          className="img"
          alt=""
          unoptimized={true}
        />
        <div className="our-offerings">
          <div className="content">
            <h1>
              Our <span className="text-[#FF5A3C]">Offerings</span>
            </h1>
            <p>
              At Rhino Homes & Properties Ltd, we specialize in delivering
              exceptional properties and investment opportunities tailored to
              your needs.
            </p>
            <ul className="list-item-container">
              {offeringsText.map((item, index) => (
                <li className="listItem" key={index}>
                  <Image
                    width={18}
                    height={20}
                    src={"/red-checkbox.png"}
                    alt=""
                  />
                  <span className="listItemText">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="verified-agent">
        <Image
          width={1240}
          height={411}
          alt=""
          className="img"
          src="/verified-agent.jpeg"
        />
        <div className="content">
          <h1>Become a verified agent</h1>
          <p>
            Join RHP's Verified Agent Network and Unlock Nationwide
            Opportunities! As a verified agent, you'll gain access to exclusive
            properties across the country, a personalized dashboard to track
            your commissions in real time, and guaranteed payouts on every
            successful deal.
          </p>

          <Link href={"/get-started"} className="mx-auto">
            <button>Get Started</button>
          </Link>
        </div>
      </section>

      <section className="explore-latest-projects">
        <header>
          <h1>
            Explore Our <span className="text-[#FF5A3C]">Latest Projects</span>
          </h1>
          <button>view more</button>
        </header>

        <div className="project-photos">
          <Image
            width={1148}
            height={648}
            src="/project.png"
            alt=""
            className="img"
          />
        </div>
      </section>

      <section className="invest-with-us">
        <Image width={279} height={334} src="/invest-with-us.png" alt="" />
        <div className="content">
          <h3>
            Invest <span className="text-[#FF5A3C]">With Us</span>
          </h3>
          <p>
            Invest with RHP – Your Path to Profitable Growth At RHP, we offer
            lucrative investment opportunities designed to maximize your
            returns. Whether you’re looking to diversify your portfolio or
            secure a stable income, our properties are strategically developed
            to ensure long-term value. Partner with us and take a step towards
            smart, secure, and rewarding investments.
          </p>
          <Link href={"/invest"}>
            <button>Explore</button>
          </Link>
        </div>
      </section>

      <section className="subscribe">
        <div className="content">
          <h1>Subscribe to our newsletter </h1>
          <div className="input">
            <input type="text" />
            <button>Subscribe</button>
          </div>
          <p>
            Subscribe now to receive the latest property listings, investment
            opportunities, and exclusive deals tailored just for you. Don’t miss
            your chance to secure your dream property or make a profitable
            investment.
          </p>
        </div>
      </section>

      <section className="quote">
        <div className="content">
          <Image
            width={72}
            height={60}
            src="/quotation.png"
            alt=""
            className="img"
          />
          <p>
            Thrilled with the finished product from Rhino Homes and Properties!
            <br />
            They were a pleasure to work with throughout the entire construction
            process. From initial design consultations to final touches, their
            attention to detail and commitment to quality were exceptional.
            We’re truly living in our dream home, thanks to Rhino Homes
          </p>

          <span>Ms. Kehinde</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
