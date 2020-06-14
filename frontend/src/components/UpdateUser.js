import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';


class UpdateUser extends React.Component {
  
  state = {
    name: this.props.data.name,
    username: this.props.data.username,
    password: this.props.data.password,
    role: this.props.data.role
  }

  handleInput = (text, type) => {
    let datas = text.target.value
    this.setState({ [type]: datas })
  }

  handleUpdate = (id) => {
    const { name, username, password, role } = this.state
    const setData = {
      name: name,
      username: username,
      password: password,
      role: role
    }
    axios.put(`http://127.0.0.1:3002/user/${id}`, setData,
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      if(res.status === 200) {
        this.props.onClose()
      }
    })
    .catch(err => {
        console.log(err);
    })
  }
  

  render() {
    const { show, title, onClose, data } = this.props
    const { name, username, password, role } = this.state
    return (
      <Modal show={show} >
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
            defaultValue={role}
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
          onClick={() => this.handleUpdate(data.id)}>
          Update
        </Button>
      </Modal.Footer>
    </Modal>
    )
  }
}

export default UpdateUser