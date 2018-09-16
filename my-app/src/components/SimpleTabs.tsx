import { Tab, Tabs } from '@material-ui/core';
import * as React from "react";
import { withRouter, RouteComponentProps } from "react-router-dom";
import history from '../history';

interface HomeRouterProps {
    title: string;
}

interface HomeProps extends RouteComponentProps<HomeRouterProps> {}

interface HomeDispatchProps {}

class SimpleTabs extends React.Component<HomeProps & HomeDispatchProps> {

    constructor(props: HomeProps & HomeDispatchProps) {
        super(props);
    }

    handleCallToRouter = (event: object, value: any) => {
        history.push(value);
        console.log("pushing" + value);
    }

    render() {
        return (
            <Tabs color="inherit" value={history.location.pathname} onChange={this.handleCallToRouter}>
                <Tab label="Home" value="/" />
                <Tab label="About" value="/About" />
            </Tabs>
        )
    }
}

export default withRouter(SimpleTabs);  