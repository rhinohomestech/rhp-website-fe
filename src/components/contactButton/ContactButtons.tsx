import Image from "next/image";
import "./contact-button.scss";
interface Props {
  src: string;
  href: string;
  title: string;
  subtitle: string;
  newTab?: boolean; // Optional prop to control target="_blank"
}

const ContactButtons = ({ src, href, title, subtitle, newTab }: Props) => {
  return (
    <div className="contactButtonContainer">
      <a
      className="img-href-tag"
        href={href}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <div className="div-image ">
          <Image
            src={src}
            alt=""
            width={24}
            height={24}
            className="img"
            priority
          />
        </div>
      </a>

      <div className="contactInfo">
        <h4>{title}</h4>
        <a
          href={href}
          target={newTab ? "_blank" : "_self"}
          rel={newTab ? "noopener noreferrer" : undefined}
        >
          <h6>{subtitle}</h6>
        </a>
      </div>
    </div>
  );
};

export default ContactButtons;
