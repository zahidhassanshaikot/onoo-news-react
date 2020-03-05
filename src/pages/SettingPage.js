import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import Footer from "../components/theme-one/footer/Footer";
import SettingSection from "../components/theme-one/main-content/section/setting/SettingSection";
import SettingSideBar from "../components/theme-one/main-content/section/setting/SettingSideBar";
import UpdateProfile from "../components/theme-one/main-content/section/setting/UpdateProfile";

class UpdateProfilePage extends Component {
    render() {
        return (
            <>
                <Header/>
                <div className="author-section">
                    <div className="container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Settings</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                            </ol>
                        </nav>
                        <div className="row">
                            <SettingSideBar/>
                            <UpdateProfile/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default UpdateProfilePage;