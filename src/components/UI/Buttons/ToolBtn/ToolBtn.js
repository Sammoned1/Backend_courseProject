import React from 'react';
import classes from './ToolBtn.module.css'

const ToolBtn = ({title, disabled}) => {
    return (
        <button disabled={disabled} className={classes.toolBtn}>{title}</button>

    );
};

export default ToolBtn;