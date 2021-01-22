import React from "react";
import classes from './AnswerItem.module.scss';

const AnswersItem = props => {
    return (
        <li className={classes.AnswerItem}>{props.text}</li>
    )
};

export default AnswersItem;
