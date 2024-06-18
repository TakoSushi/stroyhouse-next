'use client'
import { SliderSyncing } from "../SliderSyncing";
import { images } from "./images";

import styles from "./styles/index.module.css";

export function SectionAboutCompany() {

  return (
    <div className="sectionWrapper">
      <section className={styles.sectionAboutCompany}>
        <div className={styles.sectionAboutCompanyTextWrapper}>
          <p className={styles.sectionAboutCompanyPreTitle}>О компании</p>
          <h3 className={styles.sectionAboutCompanyTitle}>Создаём красивое и комфортное пространство</h3>
          <p className={styles.sectionAboutCompanyText}>Красота, комфорт и свобода — те чувства, которые испытывают заказчики в своих новых домах от Строй Хауз.</p>
          <p>С 2003 года мы строим из клееного бруса исключительно по индивидуальным проектам, с помощью которых мы учитываем как все особенности местности и участка, так и пожелания нашего заказчика. Наш опыт в строительстве в самых разных условиях позволит доверить нам проект в любом уголке мира «под ключ»</p>
        </div>
        <div className={styles.sectionAboutSliderContainer}>
          <SliderSyncing
            images={images}
            arrowsFor={false}
            arrowsNav={false}
            responsiveNav={[
              { breakpoint: 768, settings: { slidesToShow: 3 } },
            ]}
            stylesSliderFor={styles.sectionAboutCompanySliderFor}
            stylesSliderNav={styles.sectionAboutCompanySliderNav}
          />
        </div>
      </section>
    </div>
  );
}