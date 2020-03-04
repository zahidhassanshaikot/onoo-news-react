import React, {Component} from 'react';
import TopBarTwo from "./topbar/TopBarTwo";
import MenuTwo from "./menu/MenuTwo";

class HeaderTwo extends Component {
    render() {
        return (
            <>
                <header className="sg-header">
                    <TopBarTwo/>
                    <MenuTwo/>
                </header>
            </>
        );
    }
}

export default HeaderTwo;