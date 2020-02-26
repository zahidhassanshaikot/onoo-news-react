import React, {Component} from 'react';
import Topbar from "./topbar/Topbar";
import Menu from "./menu/Menu";
import {withRouter} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <>
                <header className="sg-header">
                    <Topbar/>
                    <Menu/>
                </header>
            </>
        );
    }
}

export default withRouter(Header);