import React, {Component} from 'react';
import Topbar from "./topbar/Topbar";
import Menu from "./menu/Menu";

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

export default Header;