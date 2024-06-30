'use client'

import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { RuleCard } from "../RuleCard/RuleCard";
import { rules } from './rules';

import { PaginationOptions } from 'swiper/types';

import 'swiper/css';
import 'swiper/css/pagination';
import "./swiper.css";
import "./sectionRules_tamp.css";

export function SectionRules() {

  const pagination: PaginationOptions = {
    clickable: true,
    type: 'custom',

    renderCustom: function (swiper, current, total) {
      let paginationHtml = "";
      const maxVisible = 3;
      // console.log("swiper.activeIndex", swiper.realIndex);
      // console.log("swiper.realIndex", swiper.realIndex);
      // console.log("current", current);
      // console.log("total", total);
      // console.log("swiper.previousIndex", swiper.previousIndex);
      // paginationHtml += '<span class="swiper-pagination-bullet swiper-arrow-prev">' + swiper.previousIndex + '</span>';
      const setActive = () => (current - 1) === swiper.realIndex ? "swiper-pagination-bullet-active" : "";

      paginationHtml += `<span class="swiper-pagination-bullet ${current === 1 && setActive()}">` + 1 + '</span>';

      if (total > maxVisible) {
        let start = current - 1;
        let end = current + 1;

        
        // if (current < 2) {
        //   start += maxVisible; 
        //   end += 2;
        // } else if (current > total - 2) {
        //   start -= 3;
        // }
        
        // console.log("start", start);
        // console.log("end", end);
        // if (start > 2) {
        //   paginationHtml += '<span class="swiper-pagination-bullet">...</span>';
        // }
        
        for (let i = start; i <= end; i++) {
          
            paginationHtml +=  `<span class="swiper-pagination-bullet ${current === i && setActive()}">` + i + '</span>';
          
        }

        // for (let i = start; i <= end; i++) {
        //   if (i > 1 && i < total) {
        //     paginationHtml +=  `<span class="swiper-pagination-bullet ${current === i && setActive()}">` + i + '</span>';
        //   }
        // }
        // if (end < total - 2) {
        //   paginationHtml += '<span class="swiper-pagination-bullet">...</span>';
        // }
      } else {

        for (let i = 2; i <= total - 1; i++) {
          paginationHtml +=  `<span class="swiper-pagination-bullet ${current === i && setActive()}">` + i + '</span>';
        }
      }

      paginationHtml +=  `<span class="swiper-pagination-bullet ${current === total && setActive()}">` + total + '</span>';

      return paginationHtml;
    }
  };

  return (
    <div className="sectionWrapper">
      <section className="sectionRules">
        <h3 className="sectionRulesTitle">Правила &laquo;строй хауз&raquo;</h3>
        <div className="sectionRulesSwiperWrapper">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            // loop={true}
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
              <RuleCard cardImg={rules[4].cardImg} cardTitle={rules[4].cardTitle} cardDescription={rules[4].cardDescription} />
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide">
              <RuleCard cardImg={rules[5].cardImg} cardTitle={rules[5].cardTitle} cardDescription={rules[5].cardDescription} />
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide">
              <RuleCard cardImg={rules[2].cardImg} cardTitle={rules[2].cardTitle} cardDescription={rules[2].cardDescription} />
            </SwiperSlide>
            {/* <SwiperSlide className="mySwiperSlide">
              <RuleCard cardImg={rules[5].cardImg} cardTitle={rules[5].cardTitle} cardDescription={rules[5].cardDescription} />
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
            <SwiperSlide className="mySwiperSlide">
              <RuleCard cardImg={rules[0].cardImg} cardTitle={rules[0].cardTitle} cardDescription={rules[0].cardDescription} />
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide">
              <RuleCard cardImg={rules[4].cardImg} cardTitle={rules[4].cardTitle} cardDescription={rules[4].cardDescription} />
            </SwiperSlide>
            <SwiperSlide className="mySwiperSlide">
              <RuleCard cardImg={rules[5].cardImg} cardTitle={rules[5].cardTitle} cardDescription={rules[5].cardDescription} />
            </SwiperSlide> */}
          </Swiper>

        </div>
      </section>
    </div>
  );
}
