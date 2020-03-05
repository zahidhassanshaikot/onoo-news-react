import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import Footer from "../components/theme-one/footer/Footer";
import SettingSideBar from "../components/theme-one/main-content/section/setting/SettingSideBar";
import UpdateProfile from "../components/theme-one/main-content/section/setting/UpdateProfile";
import {
    Switch,
    BrowserRouter as Router,
    Route, IndexRoute, Redirect,
    browserHistory
} from 'react-router-dom';
import SocialAccount from "../components/theme-one/main-content/section/setting/SocialAccount";
import Preferences from "../components/theme-one/main-content/section/setting/Preferences";
import ChangePassword from "../components/theme-one/main-content/section/setting/ChangePassword";

class SettingPage extends Component {
    render() {
        const {match} = this.props;
        return (
            <>
                <div className="author-section">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Settings</a></li>
                                {/*<li className="breadcrumb-item active" aria-current="page">Change Password</li>*/}
                            </ol>
                        </nav>
                        <div className="row">
                            <SettingSideBar/>
                            <Route exact path="/setting" component={ UpdateProfile } />
                            <Route path={`${match.path}/update-profile`} component={ UpdateProfile } />
                            <Route path={`${match.path}/social-account`} component={ SocialAccount } />
                            <Route path={`${match.path}/preferences`} component={ Preferences } />
                            <Route path={`${match.path}/change-password`} component={ ChangePassword } />

                            {/*<UpdateProfile/>*/}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default SettingPage;