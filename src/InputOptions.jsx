import React from 'react';
const InputOptions = ({Icon, title, color}) => {
    return ( 
        <div className="inputOption">
            <Icon className="icon" style={{color:color}}/> 
            <h4>{title}</h4>
        </div>
    );
}
export default InputOptions;