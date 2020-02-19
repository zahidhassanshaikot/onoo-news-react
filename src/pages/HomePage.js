import React, {Component} from 'react';
import Header from "../components/theme-one/header/Header";
import HeaderAds from "../components/theme-one/ads/HeaderAds";
import BreakingNews from "../components/theme-one/breaking-news/BreakingNews";
import TopSection from "../components/theme-one/top-section/TopSection";
import MainContent from "../components/theme-one/main-content/MainContent";
import Footer from "../components/theme-one/footer/Footer";

class HomePage extends Component {

    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Header/>
                <HeaderAds/>
                <BreakingNews/>
                <TopSection/>
                <MainContent/>
                <Footer/>
            </>
        );
    }
}

export default HomePage;