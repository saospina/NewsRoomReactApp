import React from 'react';
import { Switch, Route, Redirect } from "react-router-dom";

import ContentContainer from './components/content/ContentContainer'

export const AppRoutes = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/:currentDate" component={ContentContainer} />
                <Route path="/politics/:id" component={ContentContainer} />
                <Route path="/international/:id" component={ContentContainer} />
                <Route path="/technology/:id" component={ContentContainer} />
                <Route path="/entertainment/:id" component={ContentContainer} />
                <Route path="/sports/:id" component={ContentContainer} />
                <Redirect to="/" />
            </Switch>
        </main>
    )
}
