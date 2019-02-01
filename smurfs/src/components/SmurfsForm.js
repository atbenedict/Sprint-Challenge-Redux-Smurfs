import React from "react";
import { connect } from "react-redux";

import { getSmurfs, addSmurf } from "../actions";

class SmurfsForm extends React.Component {
  state = {
    smurf: {
      name: "",
      age: "",
      height: ""
    },
    isEditing: false
  };

  handleClick = ev => {
    ev.preventDefault();

    this.props.addSmurf(this.state.smurf);
  };

  changeHandler = ev => {
    this.setState({
      smurf: {
        ...this.state.smurf,
        [ev.target.name]: ev.target.value
      }
    });
  };

  render() {
    return (
      <div>
        <form action="">
          <input
            type="text"
            name="name"
            onChange={this.changeHandler}
            placeholder="name"
            value={this.state.smurf.name}
          />
          <div className="baseline" />

          <input
            type="text"
            placeholder="age"
            name="age"
            onChange={this.changeHandler}
            value={this.state.smurf.age}
          />
          <div className="baseline" />

          <input
            type="text"
            name="height"
            onChange={this.changeHandler}
            placeholder="height"
            value={this.state.smurf.height}
          />
          <div className="baseline" />

          <button onClick={this.handleClick} className="form-button">
            Add Smurf
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs
});

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf }
)(SmurfsForm);
