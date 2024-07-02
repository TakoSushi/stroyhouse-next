'use client'
import Image, { StaticImageData } from "next/image";
import { Carousel } from "../Carousel/Carousel";
import { Fancybox } from "../Fancybox/Fancybox";
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
          <Fancybox
            options={{
              Carousel: {
                infinite: false,
              },
              Images: {
                initialSize: "fit",
              },
              Thumbs: {
                type: 'classic',
              }
            }}
          >
            <Carousel
              options={{ infinite: false }}
            >
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                /* В data-src указываем путь до полноразмерной картинки, которая будет отображаться в открытом слайдере  */
                data-src="./_next/static/media/aboutCompanyGallary1_full.jpg"
                /* В data-thumb-src указываем путь до малоразмерной картинки, которая будет отображаться в качестве превью  */
                data-thumb-src="./_next/static/media/aboutCompanyGallary1_140.jpg"
              >
                <Image
                  className="carouselSlide"
                  alt=""
                  /* В src указываем путь до картинки которая будет отображаться в на в слайдере на странице */
                  src={images[0]}
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="./_next/static/media/aboutCompanyGallary2_full.jpg"
                data-thumb-src="./_next/static/media/aboutCompanyGallary2_140.jpg"
              >
                <Image
                  alt=""
                  src={images[1]}
                  className="carouselSlide"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="./_next/static/media/aboutCompanyGallary3_full.jpg"
                data-thumb-src="./_next/static/media/aboutCompanyGallary3_140.jpg"
              >
                <Image
                  alt=""
                  src={images[2]}
                  className="carouselSlide"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="./_next/static/media/aboutCompanyGallary4_full.jpg"
                data-thumb-src="./_next/static/media/aboutCompanyGallary4_140.jpg"
              >
                <Image
                  alt=""
                  src={images[3]}
                  className="carouselSlide"
                />
              </div>
              <div
                className="f-carousel__slide"
                data-fancybox="gallery"
                data-src="./_next/static/media/aboutCompanyGallary5_full.jpg"
                data-thumb-src="./_next/static/media/aboutCompanyGallary5_140.jpg"
              >
                <Image
                  alt=""
                  src={images[4]}
                  className="carouselSlide"
                />
              </div>
            </Carousel>
          </Fancybox>
        </div>
      </section>
    </div>
  );
}