import React from "react";
import classes from './AnswerItem.module.scss';

const AnswersItem = props => {
    let allClasses = [classes.AnswerItem];

    if (props.answerState) {
        allClasses.push(classes[props.answerState])
    }

    return (
        <li onClick={() => props.onAnswerClick(props.id)} className={allClasses.join(' ')}>{props.text}</li>
    )
};

export default AnswersItem;
