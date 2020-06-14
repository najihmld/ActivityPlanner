import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';
import '../css/style.css'


class UpdateUser extends React.Component {
  
  state = {
    name: this.props.data.name,
    username: this.props.data.username,
    password: this.props.data.password,
    role: this.props.data.role,
    show: false
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
        this.handleClose()
      }
    })
    .catch(err => {
        console.log(err);
    })
  }

  editItem = () => {
    this.setState({show: true})
  }
  
  handleClose = () => {
    this.setState({show: false})
  }

  render() {
    const { data } = this.props
    return (
      <>
      
      <Modal show={this.state.show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Edit user</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            defaultValue={data.name}
            placeholder="Enter name"
            onChange={text => this.handleInput(text, 'name')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Username</Form.Label>
          <Form.Control
            defaultValue={data.username}
            placeholder="Enter username"
            onChange={text => this.handleInput(text, 'username')}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            defaultValue={data.password}
            type="password"
            placeholder="Enter password"
            onChange={text => this.handleInput(text, 'password')}
          />
        </Form.Group>
        <Form.Group >
          <Form.Label>Position</Form.Label>
          <Form.Control
            defaultValue={data.role}
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
          onClick={() => this.handleUpdate(data.id)}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>

    <button type="button"
    className="card-action-btn"
    onClick={() => this.editItem()}>Edit</button>
      
      </>

    )
  }
}

export default UpdateUser