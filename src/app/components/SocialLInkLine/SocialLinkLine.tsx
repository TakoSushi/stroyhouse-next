import Image from "next/image";


import vkIcon from "../../../../public/icons/iconVk.svg";
import telegrammIcon from "../../../../public/icons/iconTelegramm.svg";
import ZenIcon from "../../../../public/icons/iconYandexZen.svg";
import youtubeIcon from "../../../../public/icons/iconYoutube.svg";
import pinterestIcon from "../../../../public/icons/iconPinterest.svg";

import "./socialLinkLine_tamp.css";

export function SocialLinkLine(classUl?: string) {
  return (
    <ul className={`socialLinks ${classUl}`}>
      <li>
        <a
          className="linkCommon"
          href="https://www.youtube.com/channel/UCgkVDDQG-Ky0wQ8V16I_2zg"
          target="_blank"
          rel="nofollow"
          title="YouTube"
        >
          <Image src={youtubeIcon} alt="YouTube" width={44} height={44} />
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
          <Image src={telegrammIcon} alt="Телеграмм" width={44} height={44} />
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
          <Image src={ZenIcon} alt="Дзен" width={44} height={44} />
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
          <Image src={vkIcon} alt="Вконтакте" width={44} height={44} />
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
          <Image src={pinterestIcon} alt="Pinterest" width={44} height={44} />
        </a>
      </li>
    </ul>

  );
}
