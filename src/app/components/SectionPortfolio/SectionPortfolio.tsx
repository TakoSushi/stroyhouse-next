import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import portfolioImg from "../../../../public/images/portfolio1.jpg";
import "./sectionPortfolio_tamp.css";
import Image from "next/image";

export function SectionPortfolio() {
  return (
    <div className="sectionWrapper">
    <section className="sectionPortfolio">
      <div className="portfolioImgWrapper">
        <Image src={portfolioImg} alt="Портфолио" className="portfolioImg" />
      </div>
      <div className="sectionPortfolioText">
        <h3 className="sectionPortfolioTitle">Профессиональный подход</h3>
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
