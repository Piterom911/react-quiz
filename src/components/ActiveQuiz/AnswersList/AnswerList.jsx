import React from 'react';
import classes from './AnswerList.module.scss';
import AnswersItem from "./AnswerItem/AnswerItem";

const AnswerList = props => {
    return (
        <ul className={classes.AnswerList}>
            {props.answers.map( (answer, index) => <AnswersItem
                onAnswerClick={props.onAnswerClick}
                key={index}
                id={answer.id}
                text={answer.text}
                answerState={props.answerState ? props.answerState[answer.id] : null}/>)}
        </ul>
    )
};

export default AnswerList;