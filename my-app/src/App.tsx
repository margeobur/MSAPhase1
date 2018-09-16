import * as React from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import ChannelSelector from './components/ChannelSelector';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
  App: {
    padding: 40,
    flexGrow: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  item: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

interface AppProps {
  classes: {
    App: string;
    root: string;
    item: string;
  };
}

interface AppState {
  messages: Array<any>;
  channels: any;
  error: boolean;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
      channels: [],
      error: false
    };
  }

  handleClick = async (e: any) => {
    const raw_chans = await fetch('/api/discord/getChannels');
    const channels = await raw_chans.json();

    if(channels.ERROR) {
      this.setState({
        error: true
      });
    }
    var chans = [];

    for (let i = 0; i < channels.length; i++) {
      if (channels[i].type === 0) {
        chans.push(channels[i]);
      }
    }

    console.log("damn dan:" + chans);
    this.setState({
      channels: chans,
      error: false
    });
  }

  handleChannelSelect = async (value: any) => {
    const raw_messages = await fetch(`/api/discord/getChannelMessages?channel=${value}`);
    const l_messages = await raw_messages.json();

    console.log("damn dirty:");
    console.log(l_messages);
    this.setState({
      messages: l_messages
    });
  }

  public render() {
    const { classes } = this.props;

    return (
      <div className={classes.App}>
        <Grid container
          direction="column"
          justify="center"
          alignItems="center" 
          spacing={16}>
          <Grid item xs={6}>
            <Typography variant="headline" component="h1">
              ChannelSearcher
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Button onClick={this.handleClick} >Get Channels</Button>
          </Grid>
          <Grid item xs={6}>
            <ChannelSelector handleChannelSelect={this.handleChannelSelect} channels={this.state.channels} />
          </Grid>
          {this.state.messages.length && this.state.messages[0].author.username}
          {this.state.error && <div>ERROR calling api</div>}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);