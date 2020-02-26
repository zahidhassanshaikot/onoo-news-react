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

class HomePage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
        // document.body.classList.add('sg-dark');
    }

    render() {
        return (
            <>
                <Header/>
                <HeaderAds/>
                <BreakingNews/>
                <TopSection/>
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
                <Footer/>
            </>
        );
    }
}

export default withRouter(HomePage);