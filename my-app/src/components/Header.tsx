import * as React from 'react';
import SimpleTabs from './SimpleTabs';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  }
};

interface HeaderStyles {
    root: any;
    flex: any;
}

interface InProps {
    classes: HeaderStyles;
}

function Header(props: InProps) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
            <SimpleTabs />
            <Typography variant="title" color="inherit" className={classes.flex} align="center" >
                DiscordInfo
            </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(Header);