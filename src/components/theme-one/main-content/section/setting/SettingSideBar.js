import React, {Component} from 'react';
import {Link} from "react-router-dom";

class SettingSideBar extends Component {
    render() {
        return (
            <>
                <div className="col-md-4">
                    <h1>Settings</h1>
                    <div className="author-menu">
                        <ul className="global-list">
                            <li className="active"><Link to="/setting/update-profile">Update Profile</Link></li>
                            <li><Link to="/setting/social-account">Socila Accounts</Link></li>
                            <li><Link to="/setting/preferences">Preferences</Link></li>
                            <li><Link to="/setting/change-password">Change Password</Link></li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }
}

export default SettingSideBar;