import React from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import LoadingButton from "./components/LoadingButton/LoadingButton";

interface Props {}

interface State {
  loading: boolean;
}

class App extends React.Component<Props, State> {
  public state = {
    loading: false
  };

  private clickLoad = () => {
    this.setState(
      {
        loading: true
      },
      () => {
        window.setTimeout(() => this.setState({ loading: false }), 3000);
      }
    );
  };

  render() {
    return (
      <div>
        <div>
          <Button label="BUTTON" />
          <Button label="BUTTON" color="secondary" />
          <Button label="BUTTON" color="warning" />
          <Button label="BUTTON" color="danger" />
          <Button label="BUTTON" color="success" />
          <Button label="BUTTON" color="success" disabled />
        </div>
        <div>
          <LoadingButton label="loading button" loading={true} />
          <LoadingButton
            label="loading button"
            loading={true}
            color="secondary"
          />
          <LoadingButton label="loading button" loading={true} color="warning" />
          <LoadingButton label="loading button" loading={true} color="danger"/>
          <LoadingButton label="loading button" loading={true} color="success"/>
        </div>
        <div>
          <LoadingButton
            label="TRY ME"
            loading={this.state.loading}
            onClick={this.clickLoad}
          />
        </div>
      </div>
    );
  }
}

export default App;
