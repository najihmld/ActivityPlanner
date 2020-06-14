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
  }

  handleInput = (text, type) => {
    let datas = text.target.value
    this.setState({ [type]: datas })
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
        this.props.onClose()
      }
    })
    .catch(err => {
        console.log(err);
    })
  }
  

  render() {
    const { showAddUser, title, onClose } = this.props
    const { name, username, password, role } = this.state
    return (
      <Modal show={showAddUser} >
      <Modal.Header>
      <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={name}
            placeholder="Enter name"
            onChange={text => this.handleInput(text, 'name')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            defaultValue={username}
            placeholder="Enter username"
            onChange={text => this.handleInput(text, 'username')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            defaultValue={password}
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
        <Button variant="secondary" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="menu menu-add"
          onClick={() => this.addUser()}>
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default AddUser