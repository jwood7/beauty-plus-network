import React, {
    useState,
    MouseEvent,
  }  from 'react'; 
import { Link } from 'gatsby';
import { 
    dropdownMenu,
    dropdownHeader,
    dropdownChildren,
    noLink,
    indicator,
    active,
 } from './dropdown.module.css';

type DropdownProps = {
    dropdownTitle: string,
    dropdownLink: string,
    isLink: boolean,
    children?: React.ReactNode
  }

const Dropdown = ({dropdownTitle, dropdownLink, isLink, children}: DropdownProps) => {
    const [isOpen, setOpen] = useState(false);
    const [getButton, setButton] = useState("+");
    

    const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setOpen(!isOpen);
        setButton(isOpen ? "+" : "-");
    }

    if (isLink){
        return (
            <div className={dropdownMenu}>
                <div className={dropdownHeader}>
                    <Link to={dropdownLink} >{dropdownTitle}</Link>
                    <button onClick={handleClick}>{getButton}</button>
                </div>
                {isOpen && (<div className={dropdownChildren}>{children}</div>)}
            </div>
        );
    }else{
        let isActive = isOpen ? active : ""
        return (
            <div className={dropdownMenu}>
                <div className={ `${dropdownHeader} ${noLink}`}>
                    <button onClick={handleClick} className={isActive}>
                        <h2>{dropdownTitle}</h2>
                        <div className={indicator}>{getButton}</div>
                    </button>
                </div>
                {isOpen && (<div className={dropdownChildren}>{children}</div>)}
            </div>
        );
        
    }
    
};

export default Dropdown;