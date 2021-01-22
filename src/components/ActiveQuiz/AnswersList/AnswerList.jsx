import React from 'react';
import classes from './AnswerList.module.scss';
import AnswersItem from "./AnswerItem/AnswerItem";

const AnswerList = props => {
    return (
        <ul className={classes.AnswerList}>
            {props.answers.map( answer => <AnswersItem text={answer.text}/>)}
        </ul>
    )
};

export default AnswerList;