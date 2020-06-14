import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';
import '../css/style.css'


class AddUser extends React.Component {

  state = {
    name: '',
    username: '',
    password: '',
    role: '',
    show: false
  }

  handleInput = (text, type) => {
    let datas = text.target.value
    this.setState({ [type]: datas })
  }

  showAddUser = () => {
    this.setState({show: true})
  }


  addUser = () => {
    const { name, username, password, role } = this.state
    const setData = { role, name, username, password }
    console.log(setData)
    axios.post(`http://127.0.0.1:3002/auth/register`, setData,
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      if(res.status === 200) {
        this.setState({
          name: '',
          username: '',
          password: '',
          role: '',
        })
        this.handleClose()
      }
    })
    .catch(err => {
        console.log(err);
    })
  }

  handleClose = () => {
    this.setState({show: false})
  }

  

  render() {
    const { show } = this.state
    return (
      <>
        <Modal show={show}  onHide={this.handleClose}>
          <Modal.Header closeButton>
          <Modal.Title>Add User</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Name</Form.Label>
              <Form.Control
                placeholder="Enter name"
                onChange={text => this.handleInput(text, 'name')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control
                placeholder="Enter username"
                onChange={text => this.handleInput(text, 'username')}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                onChange={text => this.handleInput(text, 'password')}
              />
            </Form.Group>
            <Form.Group >
              <Form.Label>Position</Form.Label>
              <Form.Control
                placeholder="Select position"
                onChange={text => this.handleInput(text, 'role')}
                as="select">
                  <option value="1">1. Super Admin</option>
                  <option value="2">2. Admin</option>
                  <option value="3">3. Director</option>
                  <option value="4">4. Head of Engineering</option>
                  <option value="5">5. Operator</option>
              </Form.Control>
            </Form.Group>
          </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="menu menu-add"
              onClick={() => this.addUser()}>
              Submit
            </Button>
          </Modal.Footer>
        </Modal>

        <button type="button"
          className="menu menu-add"
          onClick={() => this.showAddUser()}>Add User</button>
      </>
    )
  }
}

export default AddUser