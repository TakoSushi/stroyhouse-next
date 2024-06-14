import styles from "./styles/index.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerTopWrapper}>
        <div>
          <h3 className={styles.footerTitle}>
            Дома премиум-класса по индивидуальным проектам
          </h3>
          <ul className={styles.footerLinkList}>
            <li>
              <a
                className="linkCommon"
                href="https://vk.com/stroyhous"
                target="_blank"
                rel="nofollow"
                title="Вконтакте"
              >
                Вконтакте
              </a>
            </li>
            <li>
              <a
                className="linkCommon"
                href="https://t.me/StroyiHouse"
                target="_blank"
                rel="nofollow"
                title="Телеграмм"
              >
                Телеграмм
              </a>
            </li>
            <li>
              <a
                className="linkCommon"
                href="https://www.youtube.com/channel/UCgkVDDQG-Ky0wQ8V16I_2zg"
                target="_blank"
                rel="nofollow"
                title="YouTube"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                className="linkCommon"
                href="https://zen.yandex.ru/stroyhouse"
                target="_blank"
                rel="nofollow"
                title="Дзен"
              >
                Дзен
              </a>
            </li>
            <li>
              <a
                className="linkCommon"
                href="https://www.pinterest.ru/stroyhouse/"
                target="_blank"
                rel="nofollow"
                title="Pinterest"
              >
                Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.footerNav}>
          <h4>компания</h4>
          <nav>
            <ul className={styles.footerNavList}>
              <li>
                <a className="linkCommon" href="#" title="О компании">
                  О компании
                </a>
              </li>
              <li>
                <a className="linkCommon" href="#" title="Вакансии">
                  Вакансии
                </a>
              </li>
              <li>
                <a className="linkCommon" href="#" title="Реквизиты">
                  Реквизиты
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerNav}>
          <h4>проекты</h4>
          <nav>
            <ul className={`${styles.footerNavList} ${styles.footerNavListProject}`}>
              <li>
                <a className="linkCommon" href="#" title="Усадьбы и комплексы">
                  Усадьбы и комплексы
                </a>
              </li>
              <li>
                <a className="linkCommon" href="#" title="Бани, комплексы, СПА">
                  Бани, комплексы, СПА
                </a>
              </li>
              <li>
                <a className="linkCommon" href="#" title="1 этажные дома">
                  1 этажные дома
                </a>
              </li>
              <li>
                <a className="linkCommon" href="#" title="2 этажные дома">
                  2 этажные дома
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className={styles.footerContacts}>
          <h4>контакты</h4>
          <div className={styles.footerContactsBlock}>
            <div>
              <p className={styles.footerText}>E-mail:</p>
              <p className={styles.footerText}>info@s-h.ru</p>
            </div>
            <div>
              <p className={styles.footerText}>Тел.</p>
              <p className={styles.footerText}>+7(495)645-44-30</p>
            </div>
            <div>
              <p className={styles.footerText}>Адресс:</p>
              <p className={styles.footerText}>
                Московская область, Истринский район, Веледниково, улица
                Живописная, дом 25
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerBottomWrapper}>
        <div>
          <span className={styles.footerStroyhouseLogo}></span>
        </div>

        <div>
          <p className={styles.footerText}>
            &copy; 2024 ООО &laquo;Строй Хауз&raquo;
          </p>
          <p className={styles.footerText}>Политика конфиденциальности</p>
        </div>

        <div>
          <span className={styles.segezhaLogo}></span>
          <p className={styles.footerText}>
            Дилер и стратегический партнер SEGEZHA GROUP. Один из крупнейших
            поставщиков российских лесопромышленных холдингов
          </p>
        </div>
        <div>
          <span className={styles.associationLogo}></span>
          <p className={styles.footerText}>
            Компания STROYHOUSE входит в Ассоциацию Деревянного домостроения
          </p>
        </div>
      </div>
    </footer>
  );
}
