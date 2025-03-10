import Link from "next/link";
import "./page.scss";
import Image from "next/image";

const About = () => {
  return (
    <div className="about">
      <header>
        <p>
          About <span className="text-[#FF5A3C]">Us</span>
        </p>
        <p>
          We build luxury and affordable homes for our clients at competitive
          costs, and we enable investors partner with us at different stages of
          our projects
        </p>
      </header>

      <section className="first-about-photo">
        <Image
          src="/about-first.png"
          alt=""
          width={1122}
          height={400}
          className="img"
          priority
        />
      </section>

      <section className="rhino-homes">
        <div className="firstImg">
          <Image
            src="/about-rhino-homes.png"
            width={468}
            height={635}
            alt=""
            className="img"
          />
        </div>
        <div className="mission-box">
          <h1>
            Rhino Properties &<span className="text-[#FF5A3C]">Homes Ltd.</span>
          </h1>

          <p>
            <span className="font-bold">OUR</span>{" "}
            <span className="text-[#FF5A3C] font-bold">MISSION</span> - We are
            committed to transforming dreams into reality by creating
            exceptional living and working spaces. Our mission is to be a
            leading residential and commercial real estate developer, dedicated
            to delivering innovative, sustainable, and high-quality projects
            that enhance communities and exceed the expectations of our
            stakeholders.
          </p>
          <p>
            <span className="font-bold">OUR</span>{" "}
            <span className="text-[#FF5A3C] font-bold">VISION</span> - To be the
            benchmark in the real estate industry across Africa recognized for
            our visionary approach, impeccable craftsmanship, and unwavering
            commitment to creating spaces that inspire and endure. read more
          </p>
        </div>
      </section>

      <section className="meet-our-team">
        <div className="content">
          <h1>
            Meet Our <span className="text-[#FF5A3C] font-bold">Team</span>
          </h1>
          <p>
            Get to know the dedicated professionals behind RHP, committed to
            making your property dreams a reality. Our team combines expertise,
            integrity, and personalized service to deliver exceptional results.
          </p>
          <Link href={"/contact"}>
            <button>Contact Us</button>
          </Link>
        </div>
        <div className="photoContainer">
          <Image
            src="/team.png"
            className="img"
            alt=""
            width={1235}
            height={264}
            priority
          />
        </div>
      </section>

      <section className="inspiration">
        <div className="content">
          <Image
            src={"/quotation.png"}
            alt=""
            width={72}
            height={60}
            className="img"
          />
          <p>
            Thrilled with the finished product from Rhino Homes and Properties!
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

export default About;
