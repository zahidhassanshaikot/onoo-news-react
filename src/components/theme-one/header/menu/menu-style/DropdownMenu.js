import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import SingleMenu from "./SingleMenu";

class DropdownMenu extends Component {
    render() {
        return (
            <>
                <li className="nav-item sg-dropdown active" key={this.props.uniqueKey}>
                    <NavLink exact activeStyle={{color: '#00a8ee'}} to="/">{this.props.label}
                        <span>
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </NavLink>
                    <ul className="sg-dropdown-menu">
                        {
                            this.props.children.map((child_item,index)=>(
                                child_item.source==='page'?
                                    <SingleMenu
                                        new_teb={child_item.new_teb}
                                        slug={child_item.page.slug}
                                        label={child_item.label}
                                        key={index}
                                    />
                                :child_item.source==='custom'?
                                    <SingleMenu
                                        new_teb={child_item.new_teb}
                                        label={child_item.label}
                                        url={child_item.url}
                                        key={index}
                                    />
                                :
                                    <></>
                            ))
                        }
                    </ul>
                </li>
            </>
        );
    }
}

export default DropdownMenu;