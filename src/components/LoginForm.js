import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  handleForm = (event) => {
    event.preventDefault()
    return !this.state.username || !this.state.password ? console.log("Not logged in yet!") : this.props.onSubmit(this.state)
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleForm}>
        <div>
          <label>
            Username
            <input
               id="username"
               name="username"
               type="text"
               value= {this.state.username}
               onChange= {this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value= {this.state.password}
              onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
