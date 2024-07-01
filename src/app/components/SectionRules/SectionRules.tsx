'use client'

import { useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperClass, SwiperSlide } from "swiper/react";
import { Controller } from 'swiper/modules';

import ResponsivePagination from 'react-responsive-pagination';
import { RuleCardImg } from "../RuleCardImg/RuleCardImg";
import { RuleCardText } from "../RuleCardText/RuleCardText";
import { rules } from './rules';
import { NextIconSvg } from "../../ui//Icons/NextIconSvg";
import { PrevIconSvg } from "../../ui//Icons/PrevIconSvg";

import './pagination.css';
import 'swiper/css';
import "./sectionRules_tamp.css";

export function SectionRules() {
  const totalPages = rules.length;
  const [currentPage, setCurrentPage] = useState(0);
  const [firstSwiper, setFirstSwiper] = useState<SwiperClass | null>(null);
  const [secondSwiper, setSecondSwiper] = useState<SwiperClass | null>(null);

  const firstSwiperElRef = useRef<SwiperRef>(null);
  const secondSwiperElRef = useRef<SwiperRef>(null);
  
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    firstSwiper?.slideTo(page - 1);
  }

  return (
    <div className="sectionWrapper">
      <section className="sectionRules">
        <h3 className="sectionRulesTitle">Правила &laquo;строй хауз&raquo;</h3>
        {/* <div className="sectionRulesSwiperWrapper"> */}
          <Swiper
            ref={firstSwiperElRef}
            onSwiper={setFirstSwiper}
            onActiveIndexChange={({ realIndex }) => setCurrentPage(realIndex + 1)}
            modules={[Controller]}
            controller={{ control: secondSwiper }}
            spaceBetween={50}
            slidesPerView={1}
            className="firstSwiper"
          >
            {
              rules.map((rule, i) => {
                return (
                  <SwiperSlide className="mySwiperSlide" key={i}>
                    <RuleCardImg cardImg={rule.cardImg} imgAlt={rule.imgAlt} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          <Swiper
            ref={secondSwiperElRef}
            onSwiper={setSecondSwiper}
            onActiveIndexChange={({ realIndex }) => setCurrentPage(realIndex + 1)}
            modules={[Controller]}
            controller={{ control: firstSwiper }}
            spaceBetween={50}
            slidesPerView={1}
            className="secondSwiper"
          >
            {
              rules.map((rule, i) => {
                return (
                  <SwiperSlide className="mySwiperSlide" key={i}>
                    <RuleCardText cardTitle={rule.cardTitle} cardDescription={rule.cardDescription} />
                  </SwiperSlide>
                )
              })
            }
          </Swiper>
          {<ResponsivePagination
            previousLabel={<PrevIconSvg />}
            nextLabel={<NextIconSvg />}
            current={currentPage}
            total={totalPages}
            onPageChange={handlePageChange}
          />}

        {/* </div> */}
      </section >
    </div >
  );
}
