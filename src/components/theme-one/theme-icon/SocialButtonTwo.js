import React, {Component} from 'react';

class SocialButtonTwo extends Component {
    render() {
        return (
            <>
                <li className={ this.props.li_class }>
                    <a href={this.props.url}>
                        <span>
                            <i
                                className={this.props.icon_class}
                                aria-hidden="true">

                            </i>
                        </span>{this.props.label}
                    </a>
                </li>
            </>
        );
    }
}

export default SocialButtonTwo;