import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import styles from "./styles/index.module.css";

const CallIconSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Type=Call">
        <path id="Vector" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#746C7B" />
      </g>
    </svg>
  )
}

const MenuIconSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Type=menu">
        <path id="Vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 11.4477 2.44772 11 3 11H21C21.5523 11 22 11.4477 22 12C22 12.5523 21.5523 13 21 13H3C2.44772 13 2 12.5523 2 12Z" fill="#746C7B" />
        <path id="Vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="#746C7B" />
        <path id="Vector (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd" d="M2 18C2 17.4477 2.44772 17 3 17H21C21.5523 17 22 17.4477 22 18C22 18.5523 21.5523 19 21 19H3C2.44772 19 2 18.5523 2 18Z" fill="#746C7B" />
      </g>
    </svg>
  )
}



export function Header() {
  return (
    <header className={styles.header}>
      <a href="#" className={styles.headerLogo}></a>
      <nav className={styles.footerNav}>
        <ul className={styles.footerNavList}>
          <li>
            <a className="linkCommon" href="#" title="О компании">
              проекты
            </a>
          </li>
          <li>
            <a className="linkCommon" href="#" title="Вакансии">
              блог
            </a>
          </li>
          <li>
            <a className="linkCommon" href="#" title="Реквизиты">
              компания
            </a>
          </li>
          <li>
            <a className="linkCommon" href="#" title="Реквизиты">
              контакты
            </a>
          </li>
        </ul>
      </nav>
      <div className={styles.headerBtnsBlock}>
        <button type="button" className={`${styles.headerRoundBtn} ${styles.headerRoundBtnCall}`}>
          <CallIconSvg />
        </button>
        <button type="button" className={`${styles.headerRoundBtn} ${styles.headerRoundBtnMenu}`}>
          <MenuIconSvg />
        </button>
        <ButtonCommon classSpecify={styles.headerBtn}>Задать вопрос</ButtonCommon>
      </div>
    </header>
  );
}
