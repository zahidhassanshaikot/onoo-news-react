import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import Footer from "../components/theme-one/footer/Footer";
import StyleNine730X122 from "../components/theme-one/post/StyleNine730x122";
import SidebarAds from "../components/theme-one/ads/SidebarAds";
import PopularPostWIdgetTwo from "../components/theme-one/main-content/widget/popular-post-widget/PopularPostWIdgetTwo";
import RecommendedPostWidget
    from "../components/theme-one/main-content/widget/recommended-post-widget/RecommendedPostWidget";
import TegWidget from "../components/theme-one/main-content/widget/teg-widget/TegWidget";
import PollWidget from "../components/theme-one/main-content/widget/poll-widget/PollWidget";
import Search from "../components/theme-one/search/Search";

class SearchPage extends Component {
    render() {
        return (
            <>
                <Header history={this.props.history}/>

                <div className="sg-page-content">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7 col-lg-8 sg-sticky">
                                <div className="theiaStickySidebar">
                                    <div className="sg-section">
                                        <div className="section-content search-content">
                                            <Search/>


                                            <StyleNine730X122/>
                                            <StyleNine730X122/>
                                            <StyleNine730X122/>
                                            <StyleNine730X122/>
                                            <StyleNine730X122/>


                                            <div className="sg-pagination text-center">
                                                <ul className="pagination justify-content-center">
                                                    <li className="active"><a className="page-numbers" href="#">1</a>
                                                    </li>
                                                    <li><a className="page-numbers" href="#">2</a></li>
                                                    <li><a className="page-numbers" href="#"><i
                                                        className="fa fa-angle-right" aria-hidden="true"></i></a></li>
                                                </ul>
                                            </div>
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

                <Footer/>
            </>
        );
    }
}

export default SearchPage;