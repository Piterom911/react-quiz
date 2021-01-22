import React from "react";
import classes from './AnswerItem.module.scss';

const AnswersItem = props => {
    return (
        <li onClick={() => props.onAnswerClick(props.id)} className={classes.AnswerItem}>{props.text}</li>
    )
};

export default AnswersItem;
