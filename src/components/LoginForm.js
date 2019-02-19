import React from 'react'

class LoginForm extends React.Component {
  constructor () {
    super()

    this.state = {
      username: '',
      password: ''
    }
  }

  handleFormChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleFromSubmit = event => {
    event.preventDefault(); 
    if (this.state.username !== '' && this.state.password !== '') {
      this.props.onSubmit(this.state)
      console.log('submitted')
    }
  }

  render () {
    return (
      <form onSubmit={this.handleFromSubmit}>
        <div>
          <label>
            Username
            <input
              id='username'
              name='username'
              type='text'
              value={this.state.username}
              onChange={this.handleFormChange}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id='password'
              name='password'
              type='password'
              value={this.state.password}
              onChange={this.handleFormChange}
            />
          </label>
        </div>
        <div>
          <button type='submit'>Log in</button>
        </div>
      </form>
    )
  }
}

export default LoginForm
