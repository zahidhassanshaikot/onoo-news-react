import React, {Component} from 'react';

class ContentAds extends Component {
    render() {
        return (
            <>
                <div className="sg-ad">
                    <div className="container">
                        <div className="ad-content">
                            <a href="#">
                                <img
                                    className="img-fluid"
                                    src={ require("../../../assets/images/others/ad2.jpg")}
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

export default ContentAds;