import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import styles from "./styles/index.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <span className={styles.headerLogo} />
      <ButtonCommon classSpecify={styles.headerBtn}>Задать вопрос</ButtonCommon> 
    </header>
  );
}
