'use client'
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';
import { RuleCard } from "../RuleCard/RuleCard";

import type { RuleCardProps } from '../../types/entitiesTypes';
import cardImg1 from '../../../../public/images/rulesCompanyGallary1.jpg';

import styles from "./styles/index.module.css";
import "./styles/swiper.css";

const defautArticle: RuleCardProps = {
  cardImg: cardImg1,
  cardTitle: 'Беспрецедентное качество',
  cardDescription: 'Мы не никогда и нигде не экономим и не оптимизируем. Это основа нашей работы. Мы не зарабатываем на материалах. К нашей работе не докопаться, У нас независимый технадзор, клиент может ещё один нанимать если ему так спокойнее. Без недостатков без ошибок — безупречно',
}

export function SectionRules() {

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  };

  return (
    <div className="sectionWrapper">
      <section className={styles.sectionRules}>
        <h3>Правила &laquo;строй хауз&raquo;</h3>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          // onSlideChange={() => console.log('slide change')}
          // onSwiper={(swiper) => console.log(swiper)}
          pagination={pagination}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={defautArticle.cardImg} cardTitle={defautArticle.cardTitle} cardDescription={defautArticle.cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={defautArticle.cardImg} cardTitle={defautArticle.cardTitle} cardDescription={defautArticle.cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={defautArticle.cardImg} cardTitle={defautArticle.cardTitle} cardDescription={defautArticle.cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={defautArticle.cardImg} cardTitle={defautArticle.cardTitle} cardDescription={defautArticle.cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={defautArticle.cardImg} cardTitle={defautArticle.cardTitle} cardDescription={defautArticle.cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={defautArticle.cardImg} cardTitle={defautArticle.cardTitle} cardDescription={defautArticle.cardDescription} />
          </SwiperSlide>
          <SwiperSlide className="mySwiperSlide">
            <RuleCard cardImg={defautArticle.cardImg} cardTitle={defautArticle.cardTitle} cardDescription={defautArticle.cardDescription} />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
}
