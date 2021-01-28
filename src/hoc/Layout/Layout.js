import React, {Component} from "react";
import classes from "./Layout.module.scss";
import MenuToggle from "../../components/Navigation/MenuToggle/MenuToggle";
import Drawer from "../../components/Navigation/Drawer/Drawer";

class Layout extends Component{
    state = { isOpen: false };

    openMenuHandler = () => {
        this.setState({isOpen: !this.state.isOpen})
    };

    closeMenuHandler = () => {
        this.setState({isOpen: false})
    };

    render() {
        return (
            <div className={classes.Layout}>

                <Drawer
                    isOpen={this.state.isOpen}
                    onClose={this.closeMenuHandler}
                />

                <MenuToggle openMenuHandler={this.openMenuHandler} isOpen={this.state.isOpen}/>

                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout;