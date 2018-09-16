import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const styles = (theme: any) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
});

interface InProps {
    classes: any;
    handleChannelSelect: any;
    channels: any;
}

interface ThisState {
    chan: any;
    open: boolean;
}

class ChannelSelector extends React.Component<InProps,ThisState> {
    constructor(props: InProps) {
        super(props);

        this.state = {
            chan: '',
            open: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
    }

  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({ chan: e.target.value });
    this.props.handleChannelSelect(event);
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <Button className={classes.button} onClick={this.handleOpen}>
            Select a Channel
        </Button>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="ch-select">Channel</InputLabel>
          <Select
            open={this.state.open}
            onClose={this.handleClose}
            onOpen={this.handleOpen}
            value={this.state.chan}
            onChange={this.handleChange}
            inputProps={{
              name: 'channel',
              id: 'ch-select',
            }}
          >
            {this.props.channels.map((channel: any) =>
                <MenuItem key={channel.id}
                        value={channel.id}>
                    {channel.name}
                </MenuItem>
        
            )}
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(ChannelSelector);