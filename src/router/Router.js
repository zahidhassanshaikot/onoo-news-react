import React, {Component, Fragment} from 'react';
import { BrowserRouter, Route, Link,Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
class Router extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={HomePage} />

                </Switch>
            </Fragment>
        );
    }
}

export default Router;