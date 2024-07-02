import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RoundBtn } from '../RoundBtn/RoundBtn';
import { MenuDropDown } from '../MenuDropdown/MenuDropDown';
import { ButtonCommon } from '../ButtonCommon/ButtonCommon';
import { SocialLinkLine } from '../SocialLInkLine/SocialLinkLine';
import { CloseIconSvg } from '../../ui/Icons/CloseIconSvg';

import "./menuOffCanvas_tamp.css";

interface IMenuOffCanvasProps {
  handleClose: () => void,
  show: boolean
}
export function MenuOffCanvas({ handleClose, show }: IMenuOffCanvasProps) {
  const useWindowWidth = () => {
    const [windowWidth, setWindowWidth] = useState<number>();

    const handleResize = () => {
      setTimeout(() => {
        setWindowWidth(window.innerWidth);
      }, 300);
    };

    useEffect(() => {
      const width = window.innerWidth;
      setWindowWidth(width);

      window.addEventListener("resize", handleResize);

      return () => window.removeEventListener("resize", handleResize);
    }, [])

    return windowWidth ? windowWidth : 0;
  }

  return (
    <Offcanvas show={show} onHide={handleClose} responsive="lg">
      <Offcanvas.Header>
        <RoundBtn onClick={handleClose} classSpecify='headerNavMenuCloseBtnStyle'>
          <CloseIconSvg />
        </RoundBtn>
      </ Offcanvas.Header>
      <Offcanvas.Body>
        <nav className="headerNavMenu">
          <ul className="headerNavMenuList">
            {useWindowWidth() > 991 ?
              <li><MenuDropDown /></li> :
              <div className="headerNavMenuProjectsSection">
                <li>
                  <a className="linkCommon headerNavMenuListLink" href="#" title="Проекты">
                    Проекты
                  </a>
                </li>
                <li>
                  <a className="linkCommon headerNavMenuListLink" href="#" title="Усадьбы и комплексы">
                    Усадьбы и комплексы
                  </a>
                </li>
                <li>
                  <a className="linkCommon headerNavMenuListLink" href="#" title="Бани, комплексы, СПА">
                    Бани, комплексы, СПА
                  </a>
                </li>
                <li>
                  <a className="linkCommon headerNavMenuListLink" href="#" title="1 этажные дома">
                    1 этажные дома
                  </a>
                </li>
                <li>
                  <a className="linkCommon headerNavMenuListLink" href="#" title="2 этажные дома">
                    2 этажные дома
                  </a>
                </li>
              </div>
            }
            <li>
              <a className="linkCommon headerNavMenuListLink" href="#" title="блог">
                блог
              </a>
            </li>
            <li>
              <a className="linkCommon headerNavMenuListLink" href="#" title="компания">
                компания
              </a>
            </li>
            <li>
              <a className="linkCommon headerNavMenuListLink" href="#" title="контакты">
                контакты
              </a>
            </li>
          </ul>
        </nav>
        <ButtonCommon classSpecify="headerNavMenuQuestionBtn d-lg-none">Задать вопрос</ButtonCommon>
        <SocialLinkLine
          classUl='d-lg-none'
          classA="headerNavMenuSocialLinks" />
      </Offcanvas.Body>
    </Offcanvas>
  );
}