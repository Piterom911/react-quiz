import React from "react";
import classes from './Auth.module.scss'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export default class Auth extends React.Component{

    state ={
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'email',
                errorMessage: 'Enter the correct value.',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'password',
                errorMessage: 'Min length must be more than 5 characters.',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    };

    registerHandler() {}

    signInHandler() {}

    submitHandler(event) {
        event.preventDefault();
    }

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }

        let isValid = true;

        if (validation.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (validation.email) {
            isValid = validateEmail(value) && isValid;
        }

        if (validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid;
    }

    inputChangeHandler(event, control) {
        const formControls = { ...this.state.formControls };
        const ctrl = { ...formControls[control]};

        ctrl.value = event.target.value;
        ctrl.touched = true;
        ctrl.valid = this.validateControl(ctrl.value, ctrl.validation);

        formControls[control] = ctrl;

        let isFormValid = true;
        Object.keys(this.state.formControls).forEach(controlName => {
            isFormValid = formControls[controlName].valid && isFormValid;
        });
        this.setState({
            formControls,
            isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map( (control, index) => {
            const input = this.state.formControls[control];

            return  <Input
                        key={index}
                        value={input.value}
                        label={input.label}
                        errorMessage={input.errorMessage}
                        valid={input.valid}
                        touched={input.touched}
                        type={input.type}
                        shouldValidate={!!input.validation}
                        onChange={ event => this.inputChangeHandler(event, control)}
                   />
        })
    }

    render() {

        return (
            <div className={classes.Auth}>
                <div className={'wrapper'}>
                    <h1>Authorization and Registration</h1>
                    <form onSubmit={this.submitHandler}>
                        { this.renderInputs() }
                        <Button
                            type={'success'}
                            onClick={this.signInHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Sign in
                        </Button>
                        <Button
                            type={'primary'}
                            onClick={this.registerHandler}
                        >
                            Log in
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}