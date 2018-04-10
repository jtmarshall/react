import React from 'react';

export default class UserInfo extends React.Component {
    constructor(props) {
      super(props)
  
      this.state = {
        username: 'testy',
        fullname: 'Testy Testerson',
        email: 'testy.testerson@acadiahealthcare.com',
        role: 2
      }
  
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
      this.setState({
        username: e.target.value,
        fullname: e.target.value
      })
    }
    render() {
      return (
        <div className="UserInfo">
          Hello {this.state.fullname} <br />
          Change Name:
          <input
            type="text"
            value={this.state.fullname}
            onChange={this.handleChange}
          />
        </div>
      )
    }
  }
  