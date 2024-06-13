import styles from "./styles/index.module.css";
import { ButtonCommon } from "../ButtonCommon/ButtonCommon";

export function SectionPortfolio() {
  return (
    <div className="sectionWrapper">
    <section className={styles.sectionPortfolio}>
      <div className={styles.portfolioImg}></div>
      <div className={styles.sectionPortfolioText}>
        <h3>Профессиональный подход</h3>
        <ul className={styles.sectionPortfolioList}>
          <li>Полный цикл производства</li>
          <li>Гарантия на все виды работ</li>
          <li>Двойной технадзор</li>
          <li>Поэтапная система оплаты</li>
        </ul>
        <ButtonCommon classSpecify={styles.sectionPortfolioBtn}>проекты</ButtonCommon>
      </div>
    </section>
    </div>
  );
}
