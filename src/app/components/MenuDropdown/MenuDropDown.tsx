import { useState } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropDawnToogleSvg } from '../../ui/Icons/DropDawnToogleSvg';

import "./menuDropDown_tamp.css";

export function MenuDropDown() {
  const [show, setShow] = useState(false);

  return (
    <Dropdown
      show={show}
      onClick={() => setShow(!show)}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Dropdown.Toggle className='linkCommon dropdownTransition'>
        <span className="headerNavMenuListLink dropDownCustomToogle">проекты<DropDawnToogleSvg /></span>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <div className='menuDropDownItems'>
        <Dropdown.Item eventKey="1" className='linkCommon'>
          Усадьбы и комплексы
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" className='linkCommon'>
          Бани, комплексы, СПА
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" className='linkCommon'>
          1 этажные дома
        </Dropdown.Item>
        <Dropdown.Item eventKey="4" className='linkCommon'>
          2 этажные дома
        </Dropdown.Item>
        </div>
      </Dropdown.Menu>
    </Dropdown>
  );
}