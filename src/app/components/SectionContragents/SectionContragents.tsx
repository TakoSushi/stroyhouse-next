'use client'
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";
import group635 from "../../../../public/companyLogo/group635.svg";
import segezha from "../../../../public/companyLogo/segezha.svg";
import fodd from "../../../../public/companyLogo/fodd.png";
import r4s from "../../../../public/companyLogo/r4s.png";
import sber from "../../../../public/companyLogo/sber.png";
import crocusgroup from "../../../../public/companyLogo/crocusgroup.svg";
import finex from "../../../../public/companyLogo/finex.png";
import cosmos from "../../../../public/companyLogo/cosmos.png";
import porche from "../../../../public/companyLogo/porsche.png";
import rixos from "../../../../public/companyLogo/rixos.svg";
import togas from "../../../../public/companyLogo/togas.png";
import vtb from "../../../../public/companyLogo/vtb.png";
import sistemagroup from "../../../../public/companyLogo/sistemagroup.svg";

import styles from "./styles/index.module.css";

const imagesPartOne: StaticImageData[] = [
  group635, segezha, fodd, r4s, sber, crocusgroup
]
const imagesPartTwo: StaticImageData[] = [
  finex, cosmos, porche, rixos, togas, vtb, sistemagroup
]

function gridFill(imgArr: StaticImageData[]): JSX.Element[] {
  return imgArr.map((img, i) => {
    return <div className={styles.sectionContragentsBrandLogo} key={i}>
      <Image src={img} alt="Логотип контрагента" draggable={false} />
    </div>
  })
}

export const SectionContragents = () => {
  return (
    <div className="sectionWrapper">
      <section className={styles.sectionContragents}>
        <h3 className={styles.sectionContragentsTitle}>с нами работают</h3>
        <div className={styles.sectionContragentsGrid}>
          <Marquee loop={0} gradient={true} gradientColor="#f9f9f9"speed={20}  className={styles.marquee}>
            {gridFill(imagesPartOne)}
          </Marquee>
          <Marquee loop={0} gradient={true} gradientColor="#f9f9f9" speed={20} direction="right" className={styles.marquee}>
            {gridFill(imagesPartTwo)}
          </Marquee>
        </div>
      </section>
    </div>
  );
}
