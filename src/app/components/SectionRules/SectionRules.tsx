'use client'

import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperClass, SwiperSlide } from "swiper/react";
import ResponsivePagination from 'react-responsive-pagination';
import { RuleCard } from "../RuleCard/RuleCard";
import { rules } from './rules';


import 'react-responsive-pagination/themes/minimal.css';
import 'swiper/css';
import "./swiper.css";
import "./sectionRules_tamp.css";

export function SectionRules() {
  const totalPages = rules.length;
  const [currentPage, setCurrentPage] = useState(0);

  const [instance, setInstance] = useState<SwiperClass | null>(null);
  const swiperElRef = useRef<SwiperRef>(null);


  const handlePageChange = (page: number) => {
    setCurrentPage(page + 1);
    instance?.slideTo(page);
  }

  return (
    <div className="sectionWrapper">
      <section className="sectionRules">
        <h3 className="sectionRulesTitle">Правила &laquo;строй хауз&raquo;</h3>
        <div className="sectionRulesSwiperWrapper">
          <Swiper
          ref={swiperElRef}
          onSwiper={setInstance}
          onActiveIndexChange={({ activeIndex, realIndex, clickedIndex }) => {
            console.log("realIndex", realIndex);
            console.log("activeIndex", activeIndex);
            console.log("clickedIndex", clickedIndex);
            setCurrentPage(realIndex)}
          }
          spaceBetween={50}
          slidesPerView={1}
          loop={true}
          className="mySwiper"
          >
          {
            rules.map((rule, i) => {
              return (
                <SwiperSlide className="mySwiperSlide" key={i}>
                  <RuleCard cardImg={rule.cardImg} cardTitle={rule.cardTitle} cardDescription={rule.cardDescription} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        <ResponsivePagination
          current={currentPage}
          total={totalPages}
          onPageChange={handlePageChange}
        />

    </div>
      </section >
    </div >
  );
}
