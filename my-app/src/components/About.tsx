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
            This Web App utilises a small Express server that hides the bot's authentication token. The server offers api
            endpoints that wrap Discord's api.
          </Typography>
        </Paper>
      </Grid>
    </div>
  );
}

export default withStyles(styles)(About);