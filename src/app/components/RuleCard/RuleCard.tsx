import Image from 'next/image';
import styles from './styles/index.module.css';
import type  { RuleCardProps } from '../../types/entitiesTypes'; 


function RuleCard({ cardImg, cardTitle, cardDescription }: RuleCardProps) {
  return (
    <article>
      <Image src={cardImg} alt={cardTitle} className={styles.rulesImg} />
      <h4>{cardTitle}</h4>
      <p>{cardDescription}</p>
    </article>
  );
}
