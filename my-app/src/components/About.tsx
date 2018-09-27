import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  superRoot: {
    padding: 40,
    flexGrow: 1,
    alignContent: 'center',
    alignItems: 'center'
  },
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    maxWidth: "800px"
  },
});

interface AboutProps {
  classes: {
    superRoot: string;
    root: string;
  }
}

function About(props: AboutProps) {
  const { classes } = props;

  return (
    <div className={classes.superRoot}>
      <Grid container
       justify="center"
       alignItems="center" >
        <Paper className={classes.root} elevation={1}>
          <Typography variant="headline" component="h3">
            BeDisBot
          </Typography>
          <Typography component="p">
            This is my submission for the first assignment in MSA.
            It uses the Discord REST api.
          </Typography>
          <Typography component="p">
            Initially it was going to allow users to enter messages as a bot, but that would have required using Discord's
            WebSocket Gateway. Then I decided I could get users to authenticate with Discord and show them info about their
            servers, but I ran into many issues trying to implement that. After a lot of experimentation and mind-changing, I
            settled upon authenticating with my Bot and getting information about the dummy 
            server (which you can join <a href="https://discord.gg/e9FThFc">here</a>).
          </Typography>
          <Typography component="p">
            This Web App formerly utilised a small Express server that hid the bot's authentication token. The server offered api
            endpoints that wrapped Discord's api. However, problems arose when I tried to containerise the Express server with the React App 
            and run them at the same time. I got it to work locally, but it didn't work when I put it on Azure.

            So, now the authentication token is embedded in the React app, because I had no other choice.
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(About);