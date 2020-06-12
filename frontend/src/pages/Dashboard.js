import React from 'react'
import '../css/style.css'
import axios from 'axios';

class Dashboard extends React.Component {
  state = {
    activity: []
  }

  componentDidMount() {
    if(!localStorage.token) {
      this.props.history.push('/login')
    }
    this.getActivity()
    // setInterval(this.getActivity, 5000);
  }


  getActivity = () => {
    axios.get('http://127.0.0.1:3002/activity/',
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      const datas = res.data.data
      this.setState({activity: datas})
      
        
    console.log(this.state.activity)
    })
    .catch(err => {
        console.log(err);
    })
  }
  
  toHome(event) {
    event.preventDefault();
    this.props.history.push('/')
  }

  toDashboard(event) {
    event.preventDefault();
    this.props.history.push('/dashboard')
  }


  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-side col-xl-2 col-lg-2 col-md-2 col-sm-3">
            <div className="side-container">
              <button type="button"
                className="menu"
                onClick={(event) => this.toHome(event)}>Home</button>
              <button type="button"
                className="menu menu-active"
                onClick={(event) => this.toDashboard(event)}>Dashboard</button>
            </div>
          </div>
          <div className="main-container col-xl-10 col-lg-10 col-md-8 col-sm-12">
            <div className="container-sm col-md-10">

            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Dashboard