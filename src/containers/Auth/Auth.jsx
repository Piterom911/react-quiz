import React from "react";
import classes from './Auth.module.scss'
import Button from "../../components/UI/Button/Button";

export default class Auth extends React.Component{

    registerHandler() {}

    signInHandler() {}

    submitHandler(event) {
        event.preventDefault();
    }

    render() {

        return (
            <div className={classes.Auth}>
                <div className={'wrapper'}>
                    <h1>Authorization and Registration</h1>
                    <form onSubmit={this.submitHandler}>
                        <p>
                            <input type="text"/>
                            <input type="text"/>
                        </p>
                        <Button
                            type={'success'}
                            onClick={this.signInHandler}
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