import * as React from 'react';
import Button from '@material-ui/core/Button';
import ChannelSelector from './components/ChannelSelector';
import Messages from './components/Messages';
import { withStyles, Theme, createStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const GUILD_ID = "OMITTED";
const BOT_TOKEN = "OMITTED";

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
  messages: any;
  channels: any;
  error: boolean;
}

class App extends React.Component<AppProps, AppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      messages: null,
      channels: [],
      error: false
    };
  }

  handleClick = async (e: any) => {
    let Error = false;
    try {
      const response = await fetch(`https://discordapp.com/api/v6/guilds/${GUILD_ID}/channels`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bot ${BOT_TOKEN}`,
            'user-agent': 'DiscordBot (https://discordapp.com/developers/applications/486305247698878475/bots, 6)'
          },
        });
      var channels = await response.json();
    } catch (error) {
      Error = true;
    }

    if (Error) {
      this.setState({
        error: true
      });
      return;
    }
    var chans = [];

    for (let i = 0; i < channels.length; i++) {
      if (channels[i].type === 0) {
        chans.push(channels[i]);
      }
    }

    this.setState({
      channels: chans,
      error: false
    });
  }

  handleChannelSelect = async (value: any) => {
    let Error = false;

    try {
      const response = await fetch(`https://discordapp.com/api/v6/channels/${value}/messages`,
        {
          method: 'GET',
          headers: {
            Authorization: `Bot ${BOT_TOKEN}`,
            'user-agent': 'DiscordBot (https://discordapp.com/developers/applications/486305247698878475/bots, 6)'
          },
        });
      var messageList = await response.json();
    } catch (error) {
      Error = true;
    }

    if (Error) {
      this.setState({
        error: true
      });
      return;
    }

    this.setState({
      messages: messageList,
      error: false
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
          {this.state.messages && <Messages messages={this.state.messages} />}
          {this.state.error && <div>ERROR calling api</div>}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(App);