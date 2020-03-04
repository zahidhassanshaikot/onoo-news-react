import React, {Component} from 'react';
import TopBarThree from "./topbar/TopBarThree";
import MenuThree from "./menu/MenuThree";

class HeaderThree extends Component {
    render() {
        return (
            <>
                <header className="sg-header">
                    <TopBarThree/>
                    <MenuThree/>
                </header>
            </>
        );
    }
}

export default HeaderThree;