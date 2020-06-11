import React from 'react'

class Main extends React.Component {

  componentDidMount() {
    if(!localStorage.token) {
      this.props.history.push('/login')
    }
  }


  render() {
    return (
      <div><h2>Main</h2></div>
    )
  }
}

export default Main