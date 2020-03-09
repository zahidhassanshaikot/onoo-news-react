import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import HeaderAds from "../components/theme-one/ads/HeaderAds";
import BreakingNews from "../components/theme-one/breaking-news/BreakingNews";
import TopSection from "../components/theme-one/top-section/TopSection";
import Footer from "../components/theme-one/footer/Footer";
import SectionOne from "../components/theme-one/main-content/section/SectionOne";
import SectionTwo from "../components/theme-one/main-content/section/SectionTwo";
import ContentAds from "../components/theme-one/ads/ContentAds";
import SectionThree from "../components/theme-one/main-content/section/SectionThree";
import SectionFour from "../components/theme-one/main-content/section/SectionFour";
import SectionFive from "../components/theme-one/main-content/section/SectionFive";
import SectionSix from "../components/theme-one/main-content/section/SectionSix";
import PopularPost from "../components/theme-one/main-content/widget/popular-post-widget/PopularPostWidget";
import SocialWidget from "../components/theme-one/main-content/widget/social-widget/SocialWidget";
import SidebarAds from "../components/theme-one/ads/SidebarAds";
import NewsletterWidget from "../components/theme-one/main-content/widget/newsletter-widget/NewsletterWidget";
import RecentPostWidget from "../components/theme-one/main-content/widget/recent-post-widget/RecentPostWidget";
import RecommendedPostWidget
    from "../components/theme-one/main-content/widget/recommended-post-widget/RecommendedPostWidget";
import TegWidget from "../components/theme-one/main-content/widget/teg-widget/TegWidget";
import WeatherWidget from "../components/theme-one/main-content/widget/weather-widget/WeatherWidget";
import PollWidget from "../components/theme-one/main-content/widget/poll-widget/PollWidget";
import {withRouter} from "react-router-dom";
import {login} from "../store/actions/authAction";
import  {loadHomeContent} from "../store/actions/homeAction";
import  {loadSettingsContent} from "../store/actions/settingAction";

import {connect} from "react-redux";
import VideoSection from "../components/theme-one/main-content/section/VideoSection";
import HeaderTwo from "../components/theme-one/header/HeaderTwo";
import TopSectionTwo from "../components/theme-one/top-section/TopSectionTwo";
import FooterTwo from "../components/theme-one/footer/FooterTwo";
import FooterThree from "../components/theme-one/footer/FooterThree";
import HeaderThree from "../components/theme-one/header/HeaderThree";
import TopSectionThree from "../components/theme-one/top-section/TopSectionThree";

class HomePage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        this.props.loadSettingsContent();
        this.props.loadHomeContent();
    }

    render() {
        let theme = this.props.settingContent.theme;
        let {primary_section_style}= {...theme};

        return (
            <>
                <HeaderAds/>
                {
                    primary_section_style === 'style_1' ? <TopSection/>
                    : primary_section_style === 'style_2' ? <TopSectionTwo/>
                    : primary_section_style === 'style_3' ? <TopSectionThree/>
                    : <BreakingNews/>
                }
                {/*<TopSectionTwo/>*/}
                <div className="sg-main-content mb-4">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-8 sg-sticky">
                                <div className="theiaStickySidebar">

                                    <SectionOne/>
                                    <SectionTwo/>
                                    <ContentAds/>
                                    <SectionThree/>
                                    <SectionFour/>
                                    <ContentAds/>
                                    <SectionFive/>
                                    <VideoSection/>
                                    <SectionSix/>

                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 sg-sticky">
                                <div className="sg-sidebar theiaStickySidebar">
                                    <PopularPost/>
                                    <SocialWidget/>
                                    <SidebarAds/>
                                    <NewsletterWidget/>
                                    <RecentPostWidget/>
                                    <SidebarAds/>
                                    <RecommendedPostWidget/>
                                    <TegWidget/>
                                    <SidebarAds/>
                                    <WeatherWidget/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

const mapStateToProps=state=>({
    auth:state.auth,
    settingContent:state.settingContent,
    homeContent:state.homeContent,
});
export default withRouter(connect(mapStateToProps,{loadHomeContent,loadSettingsContent})(HomePage));