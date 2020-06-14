import React from 'react'
import '../css/style.css'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'

import AddActivity from '../components/AddActivity'
import UpdateActivity from '../components/UpdateActivity'
import DeleteActivity from '../components/DeleteActivity'
import MenuNav from '../components/MenuNav'

class Main extends React.Component {
  state = {
    activity: [],
    showAddActivity: false,
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
        localStorage.setItem('token', '');
        localStorage.setItem('role', '');
        this.props.history.push('/login')
    })
  }

  render() {
    const { activity, showAddActivity } = this.state
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-side col-xl-2 col-lg-2 col-md-2 col-sm-3">
          <div className="side-container">
              <MenuNav
                history={this.props.history}
                activityClass="menu menu-active"
                usersClass="menu"
                logoutClass="menu"
              />
            </div>
          </div>
          <div className="main-container col-xl-10 col-lg-10 col-md-8 col-sm-12">
            <div className="container-sm col-md-10">
            {localStorage.role === '1' || localStorage.role === '2' ?
            <AddActivity /> : null }
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
                        <div className="card-action">

                        {localStorage.role === '1' || localStorage.role === '2' ?
                        <>
                          <UpdateActivity 
                            data={item} />
                          <DeleteActivity
                            data={item.id} />
                        </> : null }

                      </div>
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