import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import Home from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Details from "../pages/DetailsPage";
import VideoGallery from "../pages/VideoGalleryPage";
import Search from "../pages/SearchPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";

class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route exact path="/details/:slug" component={Details} />
                    <Route exact path="/video-gallery" component={VideoGallery} />
                    <Route exact path="/search" component={Search} />
                    <Route exact path="/sign-in" component={SignInPage} />
                    <Route exact path="/sign-up" component={SignUpPage} />
                    <Route exact path="*" component={NotFound} />

                </Switch>
            </Fragment>
        );
    }
}

export default Router;