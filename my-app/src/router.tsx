import * as React from 'react';
// @ts-ignore
import { Route, HashRouter, Switch } from 'react-router-dom';
import { App } from './App';
import {Bym, Home, UploadPage} from './components';
import './css/router.css'


// @ts-ignore
export const AppRouter: React.FC = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route component={App} />
                <Switch>
                    {/*<Route exact path="/" component={Home} />*/}
                    <Route path="/home" component={Home} />
                    <Route path="/bym" component={Bym} />
                    <Route path="/members" component={UploadPage} />
                </Switch>
            </div>
        </HashRouter>
    );
}
