import React from 'react'


class MenuNav extends React.Component {
  
  logout = (event) => {
    event.preventDefault();
    localStorage.setItem('token', '');
    localStorage.setItem('role', '');
    this.props.history.push('/login')
  }

  toHome(event) {
    event.preventDefault();
    this.props.history.push('/')
  }

  toUsers(event) {
    event.preventDefault();
    this.props.history.push('/users')
  }

  render() {
    return (
      <>
        <button type="button"
          className={this.props.activityClass}
          onClick={(event) => this.toHome(event)}>Activity</button>
        {localStorage.role === '1' ?
            <button type="button"
            className={this.props.usersClass}
            onClick={(event) => this.toUsers(event)}>Users</button> : null }
          <button type="button"
          className={this.props.logoutClass}
          onClick={(event) => this.logout(event)}>Logout</button>
      </>
    )
  }
}

export default MenuNav