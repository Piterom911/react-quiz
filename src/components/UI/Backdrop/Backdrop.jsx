import React from "react";
import classes from './Backdrop.module.scss'

const Backdrop = props => <div className={classes.Backdrop} onClick={props.onClose}/>;

export default Backdrop;