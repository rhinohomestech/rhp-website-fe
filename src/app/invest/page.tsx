import Image from "next/image";
import "./page.scss";
import Buttton from "@/components/button/Buttton";
const Invest = () => {
  return (
    <div className="invest-with-us-page">
      <section className="call-to-investment">
        <div className="content">
          <span className="header">Call to Investment </span>
          <span className="call-info">
            Discover lucrative investment opportunities with Rhino Homes and
            Properties Ltd, your trusted partner in real estate. Our projects
            are strategically designed to maximize value, offering you the
            chance to grow your wealth through safe and reliable ventures in
            Nigeria’s dynamic real estate market.
          </span>
          <Buttton
            label="Explore Projects"
            href="/projects"
            backgroundColor="white"
            height="58px"
            width="184px"
            fontWeight={500}
    
          />
        </div>
        <Image
          src={"/invest-lady.png"}
          alt=""
          width={459}
          height={529}
          className="img"
        />
      </section>
    </div>
  );
};

export default Invest;
