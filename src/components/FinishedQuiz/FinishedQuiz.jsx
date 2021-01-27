import React from "react";
import classes from './FinishedQuiz.module.scss';
import { CheckSquareFill,  XSquareFill} from "react-bootstrap-icons";

const FinishedQuiz = props => {
    let rightAnswers = Object.values(props.results).reduce( (sum, next) => {
        if(next === 'success') sum++;
        return sum;
    }, 0);
    return (
        <div className={classes.FinishedQuiz}>
            <ul className={classes.list}>
                {props.quizItems.map( (item, index) => {
                    return <li
                        key={index}
                        className={classes.item}>{item.id}. {props.results[item.id] === 'success'
                            ? <span className={classes.success}><CheckSquareFill/></span>
                            : <span className={classes.failed}><XSquareFill/></span>} {item.question}</li>
                })}
            </ul>

            <p className={classes.result}>Right {rightAnswers} of {props.quizItems.length}</p>

            <div className={classes.restart}>
                <button onClick={props.restartQuizHandler}>Restart quiz</button>
            </div>
        </div>
    )
};

export default FinishedQuiz;