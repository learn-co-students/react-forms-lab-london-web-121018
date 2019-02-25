import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  sendForm = (event) => {
    event.preventDefault()
    // console.log(event.target.username.value)
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit({username: this.state.username, password: this.state.password})
    }
  }

  handleUserInput = (event) => {
    this.setState({
      username: event.target.value
    })
    
  }

  handlePassInput = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.sendForm}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUserInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassInput}/>
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
