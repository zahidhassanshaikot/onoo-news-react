import React, {Component} from 'react';

class SocialButton extends Component {
    render() {
        return (
            <>
                <li className={this.props.li_class}>
                    <a
                        href={this.props.url}
                        target="_blank"
                    >
                        <i
                            className={this.props.i_class}
                            aria-hidden="true"
                        >
                        </i>
                    </a>
                </li>
            </>
        );
    }
}

export default SocialButton;