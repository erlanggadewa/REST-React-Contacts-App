import PropTypes from "prop-types";
import React from "react";

class RegisterInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      name: "",
      password: "",
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
  }

  onNameChange(event) {
    this.setState(() => {
      return { name: event.target.value };
    });
  }

  onEmailChange(event) {
    this.setState(() => {
      return { email: event.target.value };
    });
  }

  onPasswordChange(event) {
    this.setState(() => {
      return { password: event.target.value };
    });
  }

  onSubmitHandler(event) {
    event.preventDefault();
    this.props.register({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitHandler} className="register-input">
        <input
          type="text"
          placeholder="Nama"
          onChange={this.onNameChange}
          value={this.state.name}
        />
        <input
          type="email"
          placeholder="Email"
          onChange={this.onEmailChange}
          value={this.state.email}
        />
        <input
          type="password"
          placeholder="Password"
          autoComplete="current-password"
          onChange={this.onPasswordChange}
          value={this.state.password}
        />
        <button>Register</button>
      </form>
    );
  }
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
