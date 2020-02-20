import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound";
import Details from "../pages/DetailsPage";

class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/details/:slug" component={Details} />
                    <Route exact path="*" component={NotFound} />

                </Switch>
            </Fragment>
        );
    }
}

export default Router;