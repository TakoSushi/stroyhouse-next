'use client'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import Image from "next/image";
import { ButtonCommon } from "../ButtonCommon/ButtonCommon";

import vkIcon from "../../../../public/icons/iconVk.svg";
import telegrammIcon from "../../../../public/icons/iconTelegramm.svg";
import ZenIcon from "../../../../public/icons/iconYandexZen.svg";
import youtubeIcon from "../../../../public/icons/iconYoutube.svg";
import pinterestIcon from "../../../../public/icons/iconPinterest.svg";

import styles from "./styles/index.module.css";

export function SectionCallback() {
  return (
    <div className="sectionWrapper">
      <section className={styles.sectionCallback}>
        <div className={styles.sectionCallbackTitleBlock}>
          <div>
            <h3 className={styles.sectionCallbackTextColor}>
              Назначьте встречу
            </h3>
            <p className={styles.sectionCallbackTextColor}>
              Мы перезвоним для уточнения деталей и ваших указаний к
              предстоящему обсуждению.
            </p>
          </div>
          <ul className={styles.socialLinks}>
            <li>
              <a
                className="linkCommon"
                href="https://www.youtube.com/channel/UCgkVDDQG-Ky0wQ8V16I_2zg"
                target="_blank"
                rel="nofollow"
                title="YouTube"
              >
                <Image src={youtubeIcon} alt="YouTube" />
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
                <Image src={telegrammIcon} alt="Телеграмм" />
              </a>
            </li>
            <li>
              <a
                className="linkCommon"
                href="https://dzen.ru/stroyhouse"
                target="_blank"
                rel="nofollow"
                title="Дзен"
              >
                <Image src={ZenIcon} alt="Вконтакте" />
              </a>
            </li>
            <li>
              <a
                className="linkCommon"
                href="https://vk.com/stroyhous"
                target="_blank"
                rel="nofollow"
                title="Вконтакте"
              >
                <Image src={vkIcon} alt="Вконтакте" />
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
                <Image src={pinterestIcon} alt="Instagram" />
              </a>
            </li>
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
              Введите телефон:
            </label>
            <PhoneInput
              country={'us'}
              value={'343434'}
              // onChange={phone => this.setState({ phone })}
            />
          </fieldset>
          <ButtonCommon type="submit">отправить</ButtonCommon>
        </form>
      </section>
    </div>
  );
}
