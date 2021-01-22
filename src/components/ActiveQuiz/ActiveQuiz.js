import React from "react";
import classes from "./ActiveQuiz.module.scss"
import AnswerList from "./AnswersList/AnswerList";

const ActiveQuiz = props => {
    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>{props.currentQuestion}. {props.question}</strong>
                </span>
                <small>{props.currentQuestion} of {props.quizLength}</small>
            </p>
            <AnswerList
                onAnswerClick={props.onAnswerClick}
                answers={props.answers}
                answerState={props.answerState}
            />
        </div>
    )
};

export default ActiveQuiz;