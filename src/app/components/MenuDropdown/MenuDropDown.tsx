import { LegacyRef, forwardRef } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { DropDawnToogleSvg } from '../../ui/Icons/DropDawnToogleSvg';

import "./menuDropDown_tamp.css";

interface ICustomToogleProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
}
function CustomToogle({ children, onClick }: ICustomToogleProps, ref: LegacyRef<HTMLAnchorElement>) {
  return (
    <a
      className="linkCommon headerNavMenuListLink dropDownCustomToogle"
      href="#"
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
      <DropDawnToogleSvg />
    </a>
  );
}


export function MenuDropDown() {

  const CustomToggle = forwardRef(CustomToogle);

  return (
    <Dropdown>
      <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
        проекты
      </Dropdown.Toggle>
      <Dropdown.Menu >
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
      </Dropdown.Menu>
    </Dropdown>
  );
}