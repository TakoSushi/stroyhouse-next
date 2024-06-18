import { StaticImageData } from "next/image";

export type TSliderSyncingProps = {
  alt?: string;
  arrowsFor?: boolean;
  arrowsNav?: boolean;
  dots?: boolean;
  fade?: boolean;
  focusOnSelect?: boolean;
  heightNav?: string;
  heightFor?: string;
  images?: StaticImageData[];
  infinite?: boolean;
  nextArrow?:JSX.Element;
  prevArrow?:JSX.Element;
  sliderToScroll?: number;
  slidesToShow?: number;
  speed?: number;
  swipeToSlide?: boolean;
  widthFor?: string;
  widthNav?: string;
  stylesSliderNav?: string;
  stylesSliderFor?: string;
  responsiveFor?:
    {
      breakpoint: number;
      settings: responsiveSettings;
    }[]
  responsiveNav?:
    {
      breakpoint: number;
      settings: responsiveSettings;
    }[]
};

type responsiveSettings = {
  slidesToShow?: number;
  slidesToScroll?: number;
  infinite?: boolean;
  dots?: boolean;
  initialSlide?: number;
}