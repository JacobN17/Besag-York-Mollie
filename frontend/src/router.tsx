import * as React from 'react';
// @ts-ignore
import { Route, HashRouter, Switch } from 'react-router-dom';
import { App } from './App';
import {Bym, Home, Upload, Converter} from './components';


export const AppRouter: React.FC = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route component={App} />
                <Switch>
                    {/*<Route path="/" component={Home} />*/}
                    <Route path="/home" component={Home} />
                    <Route path="/upload" component={Upload} />
                    <Route path="/bym" component={Bym} />
                    <Route path="/convert" component={Converter} />
                </Switch>
            </div>
        </HashRouter>

    );
}


