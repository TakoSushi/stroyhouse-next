import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import styles from "./styles/index.module.css";

export function SectionCallback() {
  return (
    <section className={styles.sectionCallback}>
      <div>
        <div>
          <h3>Назначьте встречу</h3>
          <p>
            Мы перезвоним для уточнения деталей и ваших указаний к предстоящему
            обсуждению.
          </p>
        </div>
        <ul className={styles.socialLinks}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <form>
        <input
          className={styles.inputName}
          type="text"
          placeholder="Ваше имя"
          name="name"
        />
        <select>
          <option>+7</option>
        </select>
        <input
          className={styles.inputPhone}
          type="tel"
          placeholder="Ваш телефон"
          name="phone"
        />

      </form>
      <ButtonCommon />
    </section>
  );
}
