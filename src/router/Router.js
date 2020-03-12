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
import AuthorPage from "../pages/AuthorPage";
import SettingPage from "../pages/SettingPage";
import LayoutPage from "../pages/LayoutPage";


class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <LayoutPage>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/home" component={Home} />
                        <Route path="/details/:slug" component={Details} />
                        <Route path="/video-gallery" component={VideoGallery} />
                        <Route path="/search" component={Search} />
                        <Route path="/author/:id" component={AuthorPage} />

                        <Route path="/setting" component={SettingPage} />

                        <Route path="/sign-in"
                               render={() => (
                                   this.props.auth.isAuthenticated ? (
                                       <Redirect to="/"/>
                                   ) : (
                                       <SignInPage/>
                                   )
                               )}
                        />
                        <Route path="/sign-up"
                               render={() => (
                                   this.props.auth.isAuthenticated ? (
                                       <Redirect to="/"/>
                                   ) : (
                                       <SignUpPage/>
                                   )
                               )}
                        />
                        {/*<Route path="/error" component={NotFound} />*/}
                        {/*<Route path="*" component={NotFound} />*/}
                        {/*<Redirect to="/error"/>*/}
                    </LayoutPage>
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