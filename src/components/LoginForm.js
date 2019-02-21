import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUserNameChange = e => {
    this.setState({
      username: e.target.value
    })
  }
   
  handlePasswordChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    const username = this.state.username
    const password = this.state.password
    if((username.length === 0) ||(password.length ===0)){
      window.alert("fields cannot be empty")
    }
    else{
      this.props.onSubmit(username, password)
    }
  }

  render() {
    return (
      <form onSubmit={ event => this.handleSubmit(event) }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={e => this.handleUserNameChange(e)} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={e => this.handlePasswordChange(e)}  />
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
