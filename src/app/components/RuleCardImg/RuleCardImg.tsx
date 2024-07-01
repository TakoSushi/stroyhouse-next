import Image from 'next/image';
import type  { IRuleCardImgProps } from '../../types/entitiesTypes'; 

import "./ruleCardImg_tamp.css";

export function RuleCardImg({ cardImg, imgAlt = "", classWrapper}: IRuleCardImgProps) {
  return (
    <div className={classWrapper}>
      <Image src={cardImg} alt={imgAlt} className="rulesImg" />
    </div>
  );
}
