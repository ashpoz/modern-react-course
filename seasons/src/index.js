import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    // NOTE: this is the only time we do direct assignments to this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
        position => {
            // we called setState...always have to do this
            this.setState({ lat: position.coords.latitude });
            // NEVER DO THIS:
            // this.state.lat = position.coords.latitude
        },
        err => console.log(err)
      );
  }
  // React says we have to define render
  render() {
    return <div>Latitude: {this.state.lat}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));