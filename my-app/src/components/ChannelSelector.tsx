import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
    channels: Array<any>;
}

interface ThisState {
    chan: any;
}

class ChannelSelector extends React.Component<InProps,ThisState> {
    constructor(props: InProps) {
        super(props);

        this.state = {
            chan: ''
        }

        console.log(typeof props.channels);

        this.handleChange = this.handleChange.bind(this);
    }

  
  handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("blah");
    console.log(e);
    this.setState({ chan: e.target.value });
    this.props.handleChannelSelect(e.target.value);
  };

  static getElements = (channels: any) => {
    if(!channels) {
      return <div>no channels</div>;
    }
    
    var forms = [];

    for(let i=0;i<channels.length;i++) {
      forms.push(
        <MenuItem key={channels[i].id}
                value={channels[i].id}>
          {channels[i].name}
        </MenuItem>
      )
    }
    console.log(forms);
    return forms;
  }

  render() {
    const { classes } = this.props;

    return (
      <form autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="ch-select">Channel</InputLabel>
          <Select
            value={this.state.chan}
            onChange={this.handleChange}
            inputProps={{
              name: 'channel',
              id: 'ch-select',
            }}
          >
          {ChannelSelector.getElements(this.props.channels)}
          </Select>
        </FormControl>
      </form>
    );
  }
}

export default withStyles(styles)(ChannelSelector);