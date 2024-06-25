import { AddCompSvg } from "./AddCompSvg";
import { SegezaSvg } from "./SegezaSvg";
import "./footer_tamp.css";
export function Footer() {
  return (
    <footer className="footer">
      <div className="footerTopWrapper">
        <div>
          <h3 className="footerTitle">
            Дома премиум-класса по индивидуальным проектам
          </h3>
          <ul className="footerLinkList">
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
        <div className="footerNav">
          <h4>компания</h4>
          <nav>
            <ul className="footerNavList">
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
        <div className="footerNav">
          <h4 className="footerNavProjectsTitle">проекты</h4>
          <nav>
            <ul className="footerNavList footerNavListProject">
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
        <div className="footerContacts">
          <h4>контакты</h4>
          <div className="footerContactsBlock">
            <div>
              <p className="footerText">E-mail:</p>
              <p className="footerText">info@s-h.ru</p>
            </div>
            <div>
              <p className="footerText">Тел.:</p>
              <p className="footerText">+7 (495) 645-44-30</p>
            </div>
            <div>
              <p className="footerText">Адрес:</p>
              <p className="footerText">
                Московская область, Истринский район, Веледниково, улица
                Живописная, дом 25
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footerBottomWrapper">
        <div>
          <span className="footerStroyhouseLogo"></span>
        </div>

        <div>
          <p className="footerText">
            &copy; 2024 ООО &laquo;Строй Хауз&raquo;
          </p>
          <p className="footerText">Политика конфиденциальности</p>
        </div>

        <div>
          <span className="segezhaLogo">
            <SegezaSvg />
          </span>
          <p className="footerText">
            Дилер и стратегический партнер SEGEZHA GROUP. Один из крупнейших
            поставщиков российских лесопромышленных холдингов
          </p>
        </div>
        <div>
          <span className="associationLogo">
            <AddCompSvg />
          </span>
          <p className="footerText">
            Компания STROYHOUSE входит в Ассоциацию Деревянного домостроения
          </p>
        </div>
      </div>
    </footer>
  );
}
