import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import "./sectionTitle_tamp.css";

export function SectionTitle() {
  return (
  <section className="sectionTitle">
    <h1 className="sectionTitleText">
      <span>Дома премиум-класса</span>
      <span>по индивидуальным проектам</span>
    </h1>
    <ButtonCommon classSpecify="sectionTitleBtnSize">роскошные дома</ButtonCommon>
  </section>
  );
}
