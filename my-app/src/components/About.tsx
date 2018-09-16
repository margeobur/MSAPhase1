import * as React from 'react';
import { withStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

interface AboutProps {
    classes: {
        root: string;
    }
}

function About(props: AboutProps) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography variant="headline" component="h3">
          BeDisBot
        </Typography>
        <Typography component="p">
            This is my submission for the first assignment in MSA.
            It uses the Discord REST api.
        </Typography>
      </Paper>
    </div>
  );
}

export default withStyles(styles)(About);