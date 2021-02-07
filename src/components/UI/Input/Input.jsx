import React from "react";
import classes from './Input.module.scss'

const Input = props => {
    const inputType = props.type || 'text';
    const htmlID = `${inputType}-${Math.random()}`;
    const cls = [classes.Input];

    const isInvalid = ({valid, touched, shouldValidate}) => {
        return !valid && touched && shouldValidate;
    };

    if(isInvalid(props)) {
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')}>
            <label htmlFor={htmlID}>{props.label}</label>
            <input
                placeholder={props.children}
                id={htmlID}
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />
            {isInvalid(props)
                ? <span>{props.errorMessage}</span>
                : null
            }
        </div>
    )
};

export default Input;