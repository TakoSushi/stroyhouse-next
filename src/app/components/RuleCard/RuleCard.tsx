import Image from 'next/image';
import type  { RuleCardProps } from '../../types/entitiesTypes'; 

import "./ruleCard_tamp.css";

export function RuleCard({ cardImg, cardTitle, cardDescription }: RuleCardProps) {
  return (
    <article className="ruleCard">
      <Image src={cardImg} alt={cardTitle} className="rulesImg" />
      <div className="ruleCardTextBlock">
        <h4 className="ruleCardTitle">{cardTitle}</h4>
        <p className="ruleCardText">{cardDescription}</p>
      </div>
    </article>
  );
}
