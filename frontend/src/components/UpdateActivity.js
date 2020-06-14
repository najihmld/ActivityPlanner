import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';


class UpdateActivity extends React.Component {
  
  state = {
    role: this.props.data.role,
    title: this.props.data.title,
    description: this.props.data.description,
    show: false
  }

  handleInput = (text, type) => {
    let datas = text.target.value
    this.setState({ [type]: datas })
  }

  handleUpdate = (id) => {
    const { role, title, description } = this.state
    const setData = { role, title, description  }
    console.log(setData)
    console.log(id)
    axios.put(`http://127.0.0.1:3002/activity/${id}`, setData,
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
    const { show } = this.state
    return (
      <>
      <Modal show={show} onHide={this.handleClose}>
      <Modal.Header closeButton>
      <Modal.Title>Edit Activity</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group >
            <Form.Label>To</Form.Label>
            <Form.Control
              placeholder="Select position"
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
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              defaultValue={data.title}
              placeholder="Enter Title"
              onChange={text => this.handleInput(text, 'title')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3"
              defaultValue={data.description}
            onChange={text => this.handleInput(text, 'description')}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={this.handleClose}>
          Cancel
        </Button>
        <Button variant="menu menu-add"
          onClick={() => this.handleUpdate(data.id)}>
          Update
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

export default UpdateActivity