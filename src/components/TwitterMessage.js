import React from 'react'

class TwitterMessage extends React.Component {
  constructor () {
    super()

    this.state = { tweet: '' }
  }

  handleTweetChange = event => {
    this.setState({ tweet: event.target.value })
  }

  render () {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type='text'
          value={this.state.tweet}
          onChange={this.handleTweetChange}
        />
        <p>{this.props.maxChars - this.state.tweet.length} chars left</p>
      </div>
    )
  }
}

export default TwitterMessage
