import PropTypes from "prop-types";
import React from "react";

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
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
    this.props.login({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <form className="login-input" onSubmit={this.onSubmitHandler}>
        <input
          placeholder="Email"
          value={this.state.email}
          type="email"
          onChange={this.onEmailChange}
        />
        <input
          placeholder="Password"
          value={this.state.password}
          type="password"
          onChange={this.onPasswordChange}
        />
        <button>Masuk</button>
      </form>
    );
  }
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
