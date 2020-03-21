import React, {Component} from 'react';

class FooterBottom extends Component {
    render() {
        return (
            <>
                <div className="footer-bottom">
                    <div className="container text-center">
                        <span>Copyright &copy; {(new Date().getFullYear())} {this.props.application_name} - All Rights Reserved.</span>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterBottom;