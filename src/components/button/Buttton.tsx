import Link from "next/link";
import "./button.scss";

interface Props {
  width: string;
  height: string;
  backgroundColor: string;
  label: string;
  href: string;
  border?: boolean;
  fontWeight: number;
}
const Buttton = ({
  width,
  height,
  backgroundColor,
  label,
  href,
  fontWeight,
  border,
}: Props) => {
  return (
    <Link href={href} className="parent">
      <div
        className={`general-button ${border && "border border-black"} `}
        style={{
          color: backgroundColor === "black" ? "white" : "black",
          width: width,
          height: height,
          backgroundColor: backgroundColor,
          fontWeight: fontWeight,
        }}
      >
        {label}
      </div>
    </Link>
  );
};

export default Buttton;
