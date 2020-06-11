import React from 'react'
import { Button } from 'react-bootstrap';
import '../css/style.css'
import axios from 'axios';
import qs from 'qs';


class Login extends React.Component {
  state = {
    username: '',
    password: '',
    message: '',
    showMessage: false
  }

  componentDidMount() {
    if(localStorage.token) {
      this.props.history.push('/')
    }
  }

  handleInput = (text, type) => {
    let datas = text.target.value
    this.setState({[type]: datas})
  }

  handleSubmitLogin(event) {
    event.preventDefault();
    const {username, password} = this.state
    const data = {username, password}
    if (username === '' || password === '') {
      this.setState({
        message: "Username and password can't be empty",
        showMessage: true
      })
    } else {
      axios.post(`http://127.0.0.1:3002/auth/login`, qs.stringify(data))
      .then(res => {
        if(res.status === 200) {
          const token = res.data.data.token
          const role = res.data.data.role
          localStorage.setItem('token', token);
          localStorage.setItem('role', role);
          this.props.history.push('/')
        }
      })
      .catch(err => {
        this.setState({
          message: "Invalid username or password",
          showMessage: true
        })
      })
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="login-container col-xl-4 col-lg-5 col-md-6 col-sm-7">
          <form className="col form-container">
            <h3 className="text-login">Login</h3>
            <div className="form-group">
              <label>Username</label>
              <input
                className="form-control"
                onChange={text => this.handleInput(text, 'username')} />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={text => this.handleInput(text, 'password')} />
            </div>
            <Button
              className="btn btn-login"
              onClick={(event) => this.handleSubmitLogin(event)}
            >Login</Button>
          </form>
        </div>
        <div className="login-bg d-none d-sm-block col-xl-8 col-lg-7 col-md-6 col-sm-5">
        </div>
      </div>
      </div>
    )
  }
}

export default Login