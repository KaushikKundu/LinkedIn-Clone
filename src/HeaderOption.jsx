import { Avatar, Icon } from '@mui/material';
import React from 'react';
import "./HeaderOption.css";
const HeaderOption = ({Icon, title,avatar}) => {
    return ( 
        <div className="header-option">
            {Icon && <Icon className="headerOption-icon"/>}
            {avatar && <Avatar className="headerOption-icon" src={avatar} />}
            <h4 className="headerOption-title">{title}</h4>
        </div>
     );
}
 
export default HeaderOption;