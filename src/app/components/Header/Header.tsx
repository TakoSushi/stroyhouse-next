'use client'
import { useEffect, useState } from 'react';
import { MenuOffCanvas } from '../MenuOffCanvas/MenuOffCanvas';
import { ButtonCommon } from "../ButtonCommon/ButtonCommon";
import { CallIconSvg } from "../../ui/Icons/CallIconSvg";
import { MenuIconSvg } from "../../ui/Icons/MenuIconSvg";
import { RoundBtn } from '../RoundBtn/RoundBtn';

import "./header_tamp.css";

export function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    if(show) {
      document.body.style.overflowY = 'hidden';
      document.body.style.height = '100vh';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.height = 'auto';
    }
  }, [show]);

  return (
    <header className="header">
      <a href="#" className="headerLogo"  target="_self"></a>
      <div className="headerBtnsBlock">
        <ButtonCommon classSpecify="headerQuestionBtn">Задать вопрос</ButtonCommon>

        <RoundBtn>
          <CallIconSvg />
        </RoundBtn>
        <RoundBtn onClick={handleShow} classSpecify="d-lg-none">
          <MenuIconSvg />
        </RoundBtn>

        <MenuOffCanvas handleClose={handleClose} show={show}/>
      </div>

    </header>
  );
}
