'use client'
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

import "./sectionContragents_tamp.css";

import { imagesPartOne, imagesPartTwo } from "./images";

function gridFill(imgArr: StaticImageData[]): JSX.Element[] {
  return imgArr.map((img, i) => {
    return <div className="sectionContragentsBrandLogo" key={i}>
      <Image src={img} alt="Логотип контрагента" draggable={false} className="sectionContragentsBrandLogoImg"/>
    </div>
  })
}

export const SectionContragents = () => {
  return (
    <div className="sectionWrapper">
      <section className="sectionContragents">
        <h3 className="sectionContragentsTitle">с нами работают</h3>
        <div className="sectionContragentsGrid">
          <Marquee loop={0} gradient={true} gradientColor="#f9f9f9" speed={20} className="marquee" autoFill={true}>
            {gridFill(imagesPartOne)}
          </Marquee>
          <Marquee loop={0} gradient={true} gradientColor="#f9f9f9" speed={20} direction="right" className="marquee" autoFill={true}>
            {gridFill(imagesPartTwo)}
          </Marquee>
        </div>
      </section>
    </div>
  );
}
