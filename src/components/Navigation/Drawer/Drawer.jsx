import React from "react";
import classes from './Drawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";
import {NavLink} from "react-router-dom";

const navItems = [
    {to: '/auth', label: 'Authorization', exact: true},
    {to: '/quiz-list', label: 'Quiz List', exact: true},
    {to: '/quiz-creator', label: 'Create Quiz', exact: true}
];

class Drawer extends React.Component {

    render() {
        const cls = [classes.Drawer];
        if (!this.props.isOpen) cls.push(classes.close);

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {navItems.map( (item, index) => {
                            return (
                                <li key={index}>
                                    <NavLink activeClassName={classes.active} onClick={this.props.onClose} to={item.to} exact={item.exact}>{item.label}</NavLink>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer;