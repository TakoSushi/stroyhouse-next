import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import styles from "./styles/index.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.headerLogo}></a>
      {/* <nav>
        <ul>
          <li>проекты</li>
          <li>блог</li>
          <li>компания</li>
          <li>контакты</li>
        </ul>
      </nav> */}
      <button type="button" className={`${styles.headerRoundBtn} ${styles.headerRoundBtnCall}`}></button>
      {/* <button type="button" className={`${styles.headerRoundBtn} ${styles.headerRoundBtnMenu}`}></button> */}
      <ButtonCommon classSpecify={styles.headerBtn}>Задать вопрос</ButtonCommon>
    </header>
  );
}
