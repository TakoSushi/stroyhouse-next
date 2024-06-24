import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import "./sectionPortfolio_tamp.css";

export function SectionPortfolio() {
  return (
    <div className="sectionWrapper">
    <section className="sectionPortfolio">
      <div className="portfolioImg"></div>
      <div className="sectionPortfolioText">
        <h3>Профессиональный подход</h3>
        <ul className="sectionPortfolioList">
          <li>Полный цикл производства</li>
          <li>Гарантия на все виды работ</li>
          <li>Двойной технадзор</li>
          <li>Поэтапная система оплаты</li>
        </ul>
        <ButtonCommon classSpecify="sectionPortfolioBtn">проекты</ButtonCommon>
      </div>
    </section>
    </div>
  );
}
