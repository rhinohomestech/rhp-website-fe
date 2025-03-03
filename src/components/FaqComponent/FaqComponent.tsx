"use client";

import { useState } from "react";
import "./faqComponent.scss";
import Image from "next/image";

interface Props {
  title: string;
  list?: boolean;
  content?: string;
  smallTitle?: string;
  listContent?: string[];
}

const FaqComponent = (props: Props) => {
  const { title, content, list, listContent, smallTitle } = props;
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  return (
    <div className="faqComponent">
      <header>
        <h5 className="cursor-pointer" onClick={() => setIsFaqOpen(!isFaqOpen)}>
          {title}
        </h5>
        <button onClick={() => setIsFaqOpen(!isFaqOpen)}>
          {isFaqOpen ? (
            <Image
              src={"/arrow-up.svg"}
              alt=""
              width={18}
              height={18}
              className="img"
            />
          ) : (
            <Image
              src={"/arrow-down.png"}
              alt=""
              width={18}
              height={18}
              className="img"
            />
          )}
        </button>
      </header>
      {isFaqOpen &&
        (list ? (
          <div
            onClick={() => setIsFaqOpen(!isFaqOpen)}
            className="faq-list-content faq-content"
          >
            {smallTitle && <h6>{smallTitle}</h6>}{" "}
            <ul>
              {listContent?.map((listItem, index) => (
                <li key={index}>{listItem}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p onClick={() => setIsFaqOpen(!isFaqOpen)} className="faq-content">
            {content}
          </p>
        ))}
    </div>
  );
};

export default FaqComponent;
