import React from "react";
import classes from './MenuToggle.module.scss';
import {Grid3x3Gap, XSquare} from "react-bootstrap-icons";

const MenuToggle = props => {
    const cls = [classes.MenuToggle];

    if(props.isOpen) cls.push(classes.open);

    return (
        <p onClick={props.openMenuHandler} className={cls.join(' ')}>{props.isOpen ? <XSquare/> : <Grid3x3Gap/>}</p>
    )
};

export default MenuToggle;