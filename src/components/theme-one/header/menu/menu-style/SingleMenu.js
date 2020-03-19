import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class SingleMenu extends Component {
    render() {
        return (
            <>
                {
                    this.props.url ?

                            <a
                                target={(this.props.new_teb === 1) ? "_blank" : ""}
                                href={this.props.url}
                                // exact
                                // activeStyle={{color: '#00a8ee'}}
                            >
                                {this.props.label}
                            </a>
                :

                            <NavLink
                                target={(this.props.new_teb === 1) ? "_blank" : ""}
                                to={'/'+this.props.slug}
                                // exact
                                // activeStyle={{color: '#00a8ee'}}
                            >
                                {this.props.label}
                            </NavLink>

                }
            </>
        );
    }
}

export default SingleMenu;