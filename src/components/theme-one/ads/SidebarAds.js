import React, {Component} from 'react';

class SidebarAds extends Component {
    render() {
        return (
            <>
                <div className="sg-widget">
                    <div className="sg-ad">
                        <a href="#">
                            <img
                                className="img-fluid"
                                src={ require("../../../assets/images/others/ad4.jpg")}
                                alt="Image"
                            />
                        </a>
                    </div>
                </div>
            </>
        );
    }
}

export default SidebarAds;