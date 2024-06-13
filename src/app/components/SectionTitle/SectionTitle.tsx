import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import styles from "./styles/index.module.css";

export function SectionTitle() {
  return (
  <section className={styles.sectionTitle}>
    <h1 className={styles.sectionTitle}>
      Дома премиум-класса по индивидуальным проектам
    </h1>
    <ButtonCommon>роскошные дома</ButtonCommon>
  </section>
  );
}
