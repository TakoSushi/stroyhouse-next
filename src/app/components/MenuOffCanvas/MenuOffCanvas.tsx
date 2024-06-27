import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RoundBtn } from '../RoundBtn/RoundBtn';

import "./menuOffCanvas_tamp.css";

const CloseIconSvg = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="Icons/icon">
        <path id="Vector" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white" />
      </g>
    </svg>
  )
}

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
              <a className="linkCommon headerNavMenuListLink" href="#" title="О компании">
                проекты
              </a>
            </li>
            <li>
              <a className="linkCommon headerNavMenuListLink" href="#" title="Вакансии">
                блог
              </a>
            </li>
            <li>
              <a className="linkCommon headerNavMenuListLink" href="#" title="Реквизиты">
                компания
              </a>
            </li>
            <li>
              <a className="linkCommon headerNavMenuListLink" href="#" title="Реквизиты">
                контакты
              </a>
            </li>
          </ul>
        </nav>
      </Offcanvas.Body>
    </Offcanvas>
  );
}