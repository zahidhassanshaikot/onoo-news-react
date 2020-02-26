import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Link,Switch, Redirect} from "react-router-dom";
import Home from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Details from "../pages/DetailsPage";
import VideoGallery from "../pages/VideoGalleryPage";
import Search from "../pages/SearchPage";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import {connect} from "react-redux";


class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={Home} />
                    <Route path="/details/:slug" component={Details} />
                    <Route path="/video-gallery" component={VideoGallery} />
                    <Route path="/search" component={Search} />
                    <Route path="/sign-in"
                           render={() => (
                               this.props.auth.isAuthenticated ? (
                                   <Redirect to="/"/>
                               ) : (
                                   <SignInPage/>
                               )
                           )}
                           // component={SignInPage}
                    />
                    <Route path="/sign-up"
                           render={() => (
                               this.props.auth.isAuthenticated ? (
                                   <Redirect to="/"/>
                               ) : (
                                   <SignInPage/>
                               )
                           )}
                    />
                    <Route path="*" component={NotFound} />

                </Switch>
            </Fragment>
        );
    }
}
const mapStateToProps=(state)=>({
    auth: state.auth
})
// export default Router;
export default connect(mapStateToProps)(Router);