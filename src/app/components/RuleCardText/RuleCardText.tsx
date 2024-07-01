import type  { IRuleCardTextProps } from '../../types/entitiesTypes'; 

import "./ruleCardText_tamp.css";

export function RuleCardText({ cardTitle, cardDescription, classWrapper}: IRuleCardTextProps) {
  return (
      <div className={`ruleCardTextBlock${classWrapper ? " " + classWrapper : ""}`}>
        <h4 className="ruleCardTitle">{cardTitle}</h4>
        <p className="ruleCardText">{cardDescription}</p>
      </div>
  );
}
