import React from 'react'
import '../css/style.css'
import axios from 'axios';
import { Modal, Button } from 'react-bootstrap'

import UpdateUser from '../components/UpdateUser'
import AddUser from '../components/AddUser'
import DeleteItem from '../components/DeleteItem'
import MenuNav from '../components/MenuNav'

class Users extends React.Component {
  state = {
    users: [],
    show: false,
    showAddUser: false,
    deleteModal: false,
  }

  componentDidMount() {
    if(!localStorage.token) {
      this.props.history.push('/login')
    }
    this.getUsers()
    setInterval(this.getUsers, 5000);
  }


  getUsers = () => {
    axios.get('http://127.0.0.1:3002/user/',
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      const datas = res.data.data
      this.setState({users: datas})
      // console.log(this.state.users)
    })
    .catch(err => {
        console.log(err);
    })
  }

  render() {
    const { users, show, showAddUser, deleteModal } = this.state
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-side col-xl-2 col-lg-2 col-md-2 col-sm-3">
          <div className="side-container">
              <MenuNav
                history={this.props.history}
                activityClass="menu"
                usersClass="menu menu-active"
                logoutClass="menu"
              />
            </div>
          </div>
          <div className="main-container col-xl-10 col-lg-10 col-md-8 col-sm-12">
          <div className="container-sm col-md-10">
            
          <AddUser />

            {users.map((item) => {
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
               <>
                <div key={item.id} className="card">
                  <div className="card-body-user">
                    <div className="card-img">
                      <img src={require('../images/noavatar.png')}/>
                    </div>
                    <div className="card-text-user">
                      <h6 className="card-position">{role[0]}</h6>
                      <h4 className="card-name">{item.name}</h4>
                      <h6 className="card-username">@{item.username}</h6>
                    </div>
                    <div className="card-action">
               

                    <UpdateUser
                      data={item}/>

                    <DeleteItem
                      data={item.id}
                    /> 

                    </div>
                  </div>
                </div>
               </>
              )
            })}

            </div>
        </div>
      </div>
    </div>
    )
  }
}

export default Users