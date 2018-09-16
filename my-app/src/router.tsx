import * as React from 'react';
import { Router, Redirect, Route } from 'react-router-dom';
import App from './App'
import About from './components/About';
import Header from './components/Header';
import history from './history';

class AppRouter extends React.Component<{}> {   

    static getChannels = async() => {
        const raw_chans = await fetch('/api/discord/getChannels');
        const channels = await raw_chans.json();
        console.log(channels);
        return channels;
    }
// chans={AppRouter.getChannels()}/
    public render() {
        AppRouter.getChannels();
        return (
            <Router history={history}>
                <div>
                    <Header />
                    <main>
                        <Route exact={true} path="/" render={() => <App />} />
                        <Route path="/About" component={About} />
                        <Redirect from='*' to='/' />
                    </main>
                </div>
            </Router>
        );
    }
}

export default AppRouter;