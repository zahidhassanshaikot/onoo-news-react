import React, {Component} from 'react';

class HeaderAdTwo extends Component {
    render() {
        return (
            <>
                <div className="ad-thumb">
                    <a href="#">
                        <img
                            className="img-fluid"
                            src={ require("../../../assets/images/others/ad8.jpg") }
                            alt="Image"
                        />
                    </a>
                </div>
            </>
        );
    }
}

export default HeaderAdTwo;