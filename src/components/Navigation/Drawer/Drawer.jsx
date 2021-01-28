import React from "react";
import classes from './Drawer.module.scss'
import Backdrop from "../../UI/Backdrop/Backdrop";

const navItems = ['one', 'two', 'three'];

class Drawer extends React.Component {

    render() {
        const cls = [classes.Drawer];
        if (!this.props.isOpen) cls.push(classes.close);

        return (
            <>
                <nav className={cls.join(' ')}>
                    <ul>
                        {navItems.map((navItem, index) => <li key={index}>
                            <a>Navigation item {navItem}</a>
                        </li>)}
                    </ul>
                </nav>
                {this.props.isOpen ? <Backdrop onClose={this.props.onClose} /> : null}
            </>
        )
    }
}

export default Drawer;