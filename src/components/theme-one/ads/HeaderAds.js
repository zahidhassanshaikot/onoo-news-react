import React, {Component, Fragment} from 'react';

class HeaderAds extends Component {
    render() {
        return (
            <>
                <div className="sg-ad">
                    <div className="container">
                        <div className="ad-content">
                            <a href="#">
                                <img
                                    className="img-fluid"
                                    src={ require("../../../assets/images/others/ad1.jpg")}
                                    alt="Image"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default HeaderAds;