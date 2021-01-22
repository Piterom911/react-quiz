import React from "react";
import classes from "./ActiveQuiz.module.scss"
import AnswerList from "./AnswersList/AnswerList";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>4. {props.question}</strong>
                </span>
                <small>4 из 12</small>
            </p>
            <AnswerList
                onAnswerClick={props.onAnswerClick}
                answers={props.answers} />
        </div>
    )
};

export default ActiveQuiz;