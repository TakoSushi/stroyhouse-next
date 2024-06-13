import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import styles from "./styles/index.module.css";

export function SectionCallback() {
  return (
    <div className="sectionWrapper">
      <section className={styles.sectionCallback}>
        <div className={styles.sectionCallbackTitleBlock}>
          <div>
            <h3 className={styles.sectionCallbackTextColor}>Назначьте встречу</h3>
            <p className={styles.sectionCallbackTextColor}>
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
        <form className={styles.sectionCallbackForm}>
          <fieldset>
            <div>
              <label className={styles.sectionCallbackTextColor} htmlFor="name">
                Введите имя:
              </label>
              <input
                className={styles.inputName}
                type="text"
                placeholder="Введите ваше имя"
                name="name"
                required
              />
            </div>
            <label className={styles.sectionCallbackTextColor} htmlFor="phone">
              Введите имя:
            </label>
            <div className={styles.sectionCallbackInputPhone}>
              <select>
                <option>+7</option>
                <option>+3</option>
                <option>+1</option>
                <option>+9</option>
              </select>
              <input
                className={styles.inputPhone}
                type="tel"
                placeholder="XXX-XX-XX"
                name="phone"
                required
              />
            </div>
          </fieldset>
          <ButtonCommon type="submit">отправить</ButtonCommon>
        </form>
      </section>
    </div>
  );
}
