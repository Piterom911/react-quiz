import React from "react";
import classes from './QuizList.module.scss'
import {NavLink} from "react-router-dom";

export default class QuizList extends React.Component{

    renderQuizItems() {
        return (
            [1, 2, 3].map( (quiz, index) => (
                <li key={index}>
                    <NavLink to={'/quiz/' + quiz}>Quiz {quiz}</NavLink>
                </li>
            ))
        )
    }

    render() {
        return (
            <div className={classes.QuizList}>
                <div className={classes.wrapper}>
                    <h1>Quiz List</h1>

                    <ul>{this.renderQuizItems()}</ul>
                </div>
            </div>
        );
    }
}