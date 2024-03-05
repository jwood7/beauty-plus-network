import React, {
    useState,
    MouseEvent,
  }  from 'react'; 
import { Link } from 'gatsby';
import { 
    dropdownMenu,
    dropdownHeader,
    dropdownChildren,
 } from './dropdown.module.css';

type DropdownProps = {
    dropdownTitle: string,
    dropdownLink: string,
    children?: React.ReactNode
  }

const Dropdown = ({dropdownTitle, dropdownLink, children}: DropdownProps) => {
    const [isOpen, setOpen] = useState(false);
    const [getButton, setButton] = useState("+");
    

    const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(!isOpen);
        setButton(isOpen ? "+" : "-");
    }

    return (
        <div className={dropdownMenu}>
            <div className={dropdownHeader}>
                <Link to={dropdownLink} >{dropdownTitle}</Link>
                <button onClick={handleClick}>{getButton}</button>
            </div>
            {isOpen && (<div className={dropdownChildren}>{children}</div>)}
        </div>
    );
};

export default Dropdown;