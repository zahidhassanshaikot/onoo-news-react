import React, {Component} from 'react';

class FooterBottom extends Component {
    render() {
        return (
            <>
                <div className="footer-bottom">
                    <div className="container text-center">
                        <span>Copyright &copy; {(new Date().getFullYear())} Varient - All Rights Reserved.</span>
                    </div>
                </div>
            </>
        );
    }
}

export default FooterBottom;