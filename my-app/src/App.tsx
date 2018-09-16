import * as React from 'react';
import './App.css';
import ChannelSelector from './components/ChannelSelector';

// interface AppProps {
//   chans: Array<any>;
// }

interface AppState {
  messages: Array<any>;
  channels: any;
}

class App extends React.Component<{},AppState> {

  constructor(props: any) {
    super(props);
    this.state = { 
      messages: [],
      channels: [{
        id: "20",
        name: "dank"
      }, {
        id: "30",
        name: "hi there"
      }]
    };
  }

  handleChannelSelect = async(e: any) => {

  }

  public render() {
    return (
      <div className="App">
        <ChannelSelector handleChannelSelect={this.handleChannelSelect} channels={this.state.channels} />
        {this.state.messages}
      </div>
    );
  }
}

export default App;