'use client'
import Marquee from "react-fast-marquee";
import Image, { StaticImageData } from "next/image";

import styles from "./styles/index.module.css";

import { imagesPartOne, imagesPartTwo } from "./images";

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
          <Marquee loop={0} gradient={true} gradientColor="#f9f9f9" speed={20} className={styles.marquee} autoFill={true}>
            {gridFill(imagesPartOne)}
          </Marquee>
          <Marquee loop={0} gradient={true} gradientColor="#f9f9f9" speed={20} direction="right" className={styles.marquee} autoFill={true}>
            {gridFill(imagesPartTwo)}
          </Marquee>
        </div>
      </section>
    </div>
  );
}
