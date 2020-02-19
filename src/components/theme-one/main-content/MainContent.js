import React, {Component} from 'react';
import ContentAds from "../ads/ContentAds";
import SectionOne from "./section/section-one/SectionOne";
import SectionTwo from "./section/section-two/SectionTwo";
import SectionThree from "./section/section-three/SectionThree";
import SectionFour from "./section/section-four/SectionFour";
import SectionFive from "./section/section-five/SectionFive";
import SectionSix from "./section/section-six/SectionSix";
import PopularPost from "./widget/popular-post-widget/PopularPostWidget";
import SocialWidget from "./widget/social-widget/SocialWidget";
import SidebarAds from "../ads/SidebarAds";
import NewsletterWidget from "./widget/newsletter-widget/NewsletterWidget";
import RecentPostWidget from "./widget/recent-post-widget/RecentPostWidget";
import RecommendedPostWidget from "./widget/recommended-post-widget/RecommendedPostWidget";
import TegWidget from "./widget/teg-widget/TegWidget";
import WeatherWidget from "./widget/weather-widget/WeatherWidget";
import PollWidget from "./widget/poll-widget/PollWidget";

class MainContent extends Component {
    render() {
        return (
            <>
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
                                    <PollWidget/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default MainContent;