'use client'
import { Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { RuleCard } from "../RuleCard/RuleCard";

import "./swiper.css";
import "./sectionRules_tamp.css";

import { rules } from './rules';

export function SectionRules() {

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="sectionWrapper">
      <section className="sectionRules">
        <h3>Правила &laquo;строй хауз&raquo;</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={rules[0].cardImg} cardTitle={rules[0].cardTitle} cardDescription={rules[0].cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={rules[1].cardImg} cardTitle={rules[1].cardTitle} cardDescription={rules[1].cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={rules[2].cardImg} cardTitle={rules[2].cardTitle} cardDescription={rules[2].cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={rules[3].cardImg} cardTitle={rules[3].cardTitle} cardDescription={rules[3].cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={rules[0].cardImg} cardTitle={rules[0].cardTitle} cardDescription={rules[0].cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={rules[4].cardImg} cardTitle={rules[4].cardTitle} cardDescription={rules[4].cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={rules[5].cardImg} cardTitle={rules[5].cardTitle} cardDescription={rules[5].cardDescription} />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
