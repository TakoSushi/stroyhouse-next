import Image from 'next/image';
import styles from './styles/index.module.css';
import type  { RuleCardProps } from '../../types/entitiesTypes'; 


export function RuleCard({ cardImg, cardTitle, cardDescription }: RuleCardProps) {
  return (
    <article className={styles.ruleCard}>
      <Image src={cardImg} alt={cardTitle} className={styles.rulesImg} />
      <div className={styles.ruleCardTextBlock}>
        <h4 className={styles.ruleCardTitle}>{cardTitle}</h4>
        <p className={styles.ruleCardText}>{cardDescription}</p>
      </div>
    </article>
  );
}
