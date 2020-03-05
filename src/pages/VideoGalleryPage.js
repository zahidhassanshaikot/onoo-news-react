import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import ContentAds from "../components/theme-one/ads/ContentAds";
import SectionSeven from "../components/theme-one/main-content/section/SectionSeven";
import SidebarAds from "../components/theme-one/ads/SidebarAds";
import PopularPostWIdgetTwo from "../components/theme-one/main-content/widget/popular-post-widget/PopularPostWIdgetTwo";
import RecommendedPostWidget
    from "../components/theme-one/main-content/widget/recommended-post-widget/RecommendedPostWidget";
import TegWidget from "../components/theme-one/main-content/widget/teg-widget/TegWidget";
import PollWidget from "../components/theme-one/main-content/widget/poll-widget/PollWidget";
import Footer from "../components/theme-one/footer/Footer";
import DetailsVideoPost from "../components/theme-one/post/DetailsVideoPost";

class VideoGalleryPage extends Component {
    render() {
        return (
            <>
                {/*<Header/>*/}

                <div className="sg-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-8 sg-sticky">
                                <div className="theiaStickySidebar post-details">
                                    <div className="sg-section">
                                        <div className="section-content">

                                            <DetailsVideoPost/>
                                            <ContentAds/>
                                            <SectionSeven/>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 col-lg-4 sg-sticky">
                                <div className="sg-sidebar theiaStickySidebar">
                                    <SidebarAds/>
                                    <PopularPostWIdgetTwo/>
                                    <RecommendedPostWidget/>
                                    <TegWidget/>
                                    <PollWidget/>
                                    <RecommendedPostWidget/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*<Footer/>*/}
            </>
        );
    }
}

export default VideoGalleryPage;