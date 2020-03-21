import React, {Component} from 'react';
import StyleThree160X181 from "../../post/StyleThree160x181";
import SingleMenu from "./menu-style/SingleMenu";
import DropdownMenu from "./menu-style/DropdownMenu";
import MegaDropdownMenu from "./menu-style/MegaDropdownMenu";
import {Link, withRouter} from "react-router-dom";
import {connect} from "react-redux";

class MenuTwo extends Component {
    render() {
        let {menu, branding} = this.props.settingContent;
        return (
            <>
                <div className="sg-menu menu-style-2">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container">
                            <div className="menu-content">
                                <Link className="navbar-brand p-0 sm-logo" to="/">
                                    <img
                                        src={branding.logo}
                                        alt="Logo"
                                        className="img-fluid"
                                    />
                                </Link>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"><i
                                            className="fa fa-align-justify"></i></span>
                                </button>

                                <div className="collapse navbar-collapse" id="navbarNav">

                                    <ul  className="navbar-nav">
                                        {
                                            menu[1].menu_item.map((item,index)=>(
                                                item.source==='page'?
                                                    item.children.length === 0 ?
                                                        (
                                                            <li key={index}>
                                                                <SingleMenu
                                                                    new_teb={item.new_teb}
                                                                    slug={item.page.slug}
                                                                    label={item.label}
                                                                    uniqueKey={index}
                                                                />
                                                            </li>
                                                        )
                                                        :
                                                        (
                                                            <li className="nav-item sg-dropdown active" key={index}>
                                                                <DropdownMenu
                                                                    label={item.label}
                                                                    children={item.children}
                                                                    uniqueKey={index}
                                                                />
                                                            </li>
                                                        )
                                                    :item.source==='custom'?
                                                    (
                                                        item.children.length === 0 ?
                                                            (
                                                                <li key={index}>
                                                                    <SingleMenu
                                                                        new_teb={item.new_teb}
                                                                        label={item.label}
                                                                        url={item.url}
                                                                        uniqueKey={index}
                                                                    />
                                                                </li>
                                                            )
                                                            :
                                                            (
                                                                <li className="nav-item sg-dropdown active" key={index}>
                                                                    <DropdownMenu
                                                                        label={item.label}
                                                                        children={item.children}
                                                                        uniqueKey={index}
                                                                    />
                                                                </li>
                                                            )
                                                    )
                                                    :item.source==='category'?
                                                        (
                                                            <li className="sg-dropdown mega-dropdown" key={index}>
                                                                <MegaDropdownMenu
                                                                    label={item.label}
                                                                    category={item.category}
                                                                />
                                                            </li>
                                                        )
                                                        :null
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        );
    }
}
const mapStateToProps=state=>({
    settingContent:state.settingContent
});

export default withRouter(connect(mapStateToProps)(MenuTwo));