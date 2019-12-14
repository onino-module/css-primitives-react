import React from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import LoadingButton from "./components/LoadingButton/LoadingButton";
import Modal from "./components/Modal/Modal";
import Drawer from "./components/Drawer/Drawer";
import Switch from "./components/Switch/Switch";
import Select from "./components/Select/Select";

interface Props {}

interface State {
  loading: boolean;
  showModal: boolean;
  showDrawer: boolean;
}

class App extends React.Component<Props, State> {
  public state = {
    loading: false,
    showModal:false,
    showDrawer:false
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

  private toggleDrawer = () => {
    this.setState({
      showDrawer:!this.state.showDrawer
    })
  }

  private closeModal = () => {
    this.setState({
      showModal: false
    })
  }

  private closeDrawer = () => {
    this.setState({
      showDrawer: false
    })
  }

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
        </div>
        {/* <Input label="Nom de famille" /> */}
        <Button onClick={this.toggleModal} label="TOGGLE MODAL"/>
        <Button onClick={this.toggleDrawer} label="TOGGLE DRAWER"/>
        <Modal show={this.state.showModal} close={this.closeModal}>
          Modal Content
        </Modal>
        <Switch onToggle={console.log}/>
        <Switch color="secondary" defaultChecked={true}/>
        <Switch color="warning"/>
        <Switch color="danger"/>
        <Switch color="success" checked={true} />
        <Drawer show={this.state.showDrawer} close={this.closeDrawer} overlay>
          Drawer Content <span style={{cursor:"pointer"}} onClick={this.closeModal}>X</span>
        </Drawer>
        <Input label="first name"/>
        <Select options={[
          {
            label : "options 1",
            value : 0
          },
          {
            label : "options 2",
            value : 1
          },
          {
            label : "options 3",
            value : 2
          }
        ]} />
      </div>
    );
  }
}

export default App;
