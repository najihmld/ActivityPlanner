import React from 'react'
import '../css/style.css'
import axios from 'axios';

class Main extends React.Component {
  state = {
    activity: []
  }

  componentDidMount() {
    if(!localStorage.token) {
      this.props.history.push('/login')
    }
    this.getActivity()
    setInterval(this.getActivity, 5000);
  }


  getActivity = () => {
    axios.get('http://127.0.0.1:3002/activity/',
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      const datas = res.data.data
      this.setState({activity: datas})
    })
    .catch(err => {
        console.log(err);
        const token = ''
        localStorage.setItem('token', token);
        this.props.history.push('/login')
    })
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
    const { activity } = this.state
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-side col-xl-2 col-lg-2 col-md-2 col-sm-3">
            <div className="side-container">
              <button type="button"
                className="menu menu-active"
                onClick={(event) => this.toHome(event)}>Activity</button>
              <button type="button"
                className="menu"
                onClick={(event) => this.toUsers(event)}>Users</button>
            </div>
          </div>
          <div className="main-container col-xl-10 col-lg-10 col-md-8 col-sm-12">
            <div className="container-sm col-md-10">

              {activity.map((item) => {
                let role = []
                if (item.role === '5') {
                  role.push('Operator')
                } else if (item.role === '4') {
                  role.push('Head of Engineering')
                } else if (item.role === '3') {
                  role.push('Director')
                } else if (item.role === '2') {
                  role.push('Admin')
                } else {
                  role.push('Super Admin')
                }
                return (
                  <div key={item.id} className="card">
                    <div className="card-body">
                    <h6 className="card-to">To: {role[0]}</h6>
                     <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">{item.description}</p>
                    </div>
                  </div>
                )
              })}

            </div>
          </div>
       </div>
     </div>
    )
  }
}

export default Main