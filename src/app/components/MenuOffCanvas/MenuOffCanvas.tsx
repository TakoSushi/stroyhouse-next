import Offcanvas from 'react-bootstrap/Offcanvas';
import { RoundBtn } from '../RoundBtn/RoundBtn';
import { MenuDropDown } from '../MenuDropdown/MenuDropDown';
import { ButtonCommon } from '../ButtonCommon/ButtonCommon';
import { SocialLinkLine } from '../SocialLInkLine/SocialLinkLine';
import { CloseIconSvg } from '@/app/ui/Icons/CloseIconSvg';

import "./menuOffCanvas_tamp.css";

interface IMenuOffCanvasProps {
  handleClose: () => void,
  show: boolean
}

export function MenuOffCanvas({ handleClose, show }: IMenuOffCanvasProps) {

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
            <li>
              <MenuDropDown />
            </li>
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