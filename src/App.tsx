import React from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import LoadingButton from "./components/LoadingButton/LoadingButton";
import Modal from "./components/Modal/Modal";
import Drawer from "./components/Drawer/Drawer";

interface Props {}

interface State {
  loading: boolean;
  showModal: boolean;
}

class App extends React.Component<Props, State> {
  public state = {
    loading: false,
    showModal:false
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

  private toggleModal = () => {
    this.setState({
      showModal:!this.state.showModal
    })
  }

  private closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return (
      <div>
        {/* <div>
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
          <LoadingButton
            label="loading button"
            loading={true}
            color="warning"
          />
          <LoadingButton label="loading button" loading={true} color="danger" />
          <LoadingButton
            label="loading button"
            loading={true}
            color="success"
          />
        </div>
        <div>
          <LoadingButton
            label="TRY ME"
            loading={this.state.loading}
            onClick={this.clickLoad}
          />
        </div> */}
        {/* <Input label="Nom de famille" /> */}
        <button onClick={this.toggleModal} >toggle modal</button>
        {/* <Modal show={this.state.showModal} close={this.closeModal}>
          Modal Content
        </Modal> */}
        <Drawer show={this.state.showModal} close={this.closeModal} overlay>
          Drawer Content <span style={{cursor:"pointer"}} onClick={this.closeModal}>X</span>
        </Drawer>
      </div>
    );
  }
}

export default App;
