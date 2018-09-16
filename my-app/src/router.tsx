import * as React from 'react';
import { Router, Redirect, Route } from 'react-router-dom';
import App from './App'
import About from './components/About';
import Header from './components/Header';
import history from './history';

interface RouterState {
    channels: any;
}

class AppRouter extends React.Component<{}, RouterState> {   

    public render() {
        return (
            <Router history={history}>
                <div>
                    <Header />
                    <main>
                        <Route exact={true} path="/" component={App} />
                        <Route path="/About" component={About} />
                        <Redirect from='*' to='/' />
                    </main>
                </div>
            </Router>
        );
    }
}

export default AppRouter;