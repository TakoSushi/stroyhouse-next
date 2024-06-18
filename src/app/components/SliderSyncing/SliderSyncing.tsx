'use client'
import { memo, useEffect, useRef, useState } from "react";
import type { FC } from "react";
import Slider from "react-slick";
import type { TSliderSyncingProps } from ".";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./slick.css";
// import "./slick-theme.css";
import styles from "./styles/index.module.css";
import Image from "next/image";

const SliderSyncingComponent: FC<TSliderSyncingProps> = (props: TSliderSyncingProps) => {
  const { images, alt = '', arrowsFor, arrowsNav, responsiveNav, stylesSliderNav, stylesSliderFor } = props;

  const [currentSlide, setCurrentSlide] = useState(0);
  const [nav1, setNav1] = useState<Slider | undefined>();
  const [nav2, setNav2] = useState<Slider | undefined>();

  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  useEffect(() => {
    slider1.current && setNav1(slider1.current);
    slider2.current && setNav2(slider2.current);
  }, []);

  useEffect(() => {
    slider1.current && slider1.current.slickGoTo(currentSlide);
    slider2.current && slider2.current.slickGoTo(currentSlide);
  }, [currentSlide]);


  const handleAfterChange = (currentSlideAfterChange: number) => {
    setCurrentSlide(currentSlideAfterChange);
  }

  return (
    <>
      <Slider
        asNavFor={nav2}
        initialSlide={currentSlide}
        ref={slider1}
        afterChange={handleAfterChange}
        className={stylesSliderFor}
        arrows={arrowsFor}
      >
        {images && images.map((image, index) => {
          return (
            <div key={index + "Slider1"}>
              <Image src={image} alt={alt} className={styles.innerImgFor} />
            </div>
          );
        })}
      </Slider>
      <Slider
        asNavFor={nav1}
        ref={slider2}
        afterChange={handleAfterChange}
        slidesToShow={4}
        swipeToSlide={true}
        focusOnSelect={true}
        arrows={arrowsNav}
        responsive={responsiveNav}
        className={stylesSliderNav}
      >
        {images && images.map((image, index) => {
          return (
            <div key={index + "Slider2"}>
              <Image src={image} alt={alt} className={styles.innerImgNav} />
            </div>
          );
        })}
      </Slider>
    </>
  );
}

export const SliderSyncing: React.NamedExoticComponent<TSliderSyncingProps> = memo(SliderSyncingComponent)