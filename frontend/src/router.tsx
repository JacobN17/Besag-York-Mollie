import * as React from 'react';
import { Route, HashRouter, Switch } from 'react-router-dom';
import { App } from './App';
import {Bym, Share, Home, Upload} from './components';



export const AppRouter: React.FC = () => {
    return (
        <HashRouter>
            <div className="container-fluid">
                <Route component={App} />
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/upload" component={Upload} />
                    <Route path="/bym" component={Bym} />
                    <Route path="/share" component={Share} />
                </Switch>
            </div>
        </HashRouter>

    );
}


