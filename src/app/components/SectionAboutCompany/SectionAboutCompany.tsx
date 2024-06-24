'use client'
import { SliderSyncing } from "../SliderSyncing";
import { images } from "./images";

import "./sectionAboutCompany_tamp.css";

export function SectionAboutCompany() {

  return (
    <div className="sectionWrapper">
      <section className="sectionAboutCompany">
        <div className="sectionAboutCompanyTextWrapper">
          <p className="sectionAboutCompanyPreTitle">О компании</p>
          <h3 className="sectionAboutCompanyTitle">Создаём красивое и комфортное пространство</h3>
          <p className="sectionAboutCompanyText">Красота, комфорт и свобода — те чувства, которые испытывают заказчики в своих новых домах от Строй Хауз.</p>
          <p>С 2003 года мы строим из клееного бруса исключительно по индивидуальным проектам, с помощью которых мы учитываем как все особенности местности и участка, так и пожелания нашего заказчика. Наш опыт в строительстве в самых разных условиях позволит доверить нам проект в любом уголке мира «под ключ»</p>
        </div>
        <div className="sectionAboutSliderContainer">
          {/* <SliderSyncing
            images={images}
            arrowsFor={false}
            arrowsNav={false}
            responsiveNav={[
              { breakpoint: 768, settings: { slidesToShow: 3 } },
            ]}
            stylesSliderFor="sectionAboutCompanySliderFor"
            stylesSliderNav="sectionAboutCompanySliderNav"
          /> */}
        </div>
      </section>
    </div>
  );
}