import { StaticImageData } from "next/image";

interface IRuleCardImgProps {
  cardImg: StaticImageData;
  imgAlt?: string;
  classWrapper?: string;
}

interface IRuleCardTextProps {
  cardTitle: string;
  cardDescription: string;
  classWrapper?: string;
}

interface IRuleCard extends IRuleCardImgProps, IRuleCardTextProps {}

type TRuleCard = IRuleCardImgProps & IRuleCardTextProps; 

export type {
  IRuleCardImgProps,
  IRuleCardTextProps,
  TRuleCard
}