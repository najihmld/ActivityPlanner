import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import axios from 'axios';
import '../css/style.css'


class AddActivity extends React.Component {
  
  state = {
    role: '',
    title: '',
    description: '',
    show: false
  }

  handleInput = (text, type) => {
    let datas = text.target.value
    this.setState({ [type]: datas })
  }

  addActivity = () => {
    const { role, title, description } = this.state
    const setData = { role, title, description }
    console.log(setData)
    axios.post(`http://127.0.0.1:3002/activity`, setData,
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      if(res.status === 200) {
        this.setState({
          role: '',
          title: '',
          description: ''
        })
        this.handleClose()
      }
    })
    .catch(err => {
        console.log(err);
    })
  }

  showAddActivity = () => {
    this.setState({show: true})
  }

  handleClose = () => {
    this.setState({show: false})
  }

  

  render() {
    const { show } = this.state
    return (
      <>
        <Modal show={show} onHide={this.handleClose}>
        <Modal.Header closeButton>
        <Modal.Title>Add Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group >
            <Form.Label>To</Form.Label>
            <Form.Control
              defaultValue="5"
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
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              placeholder="Enter Title"
              onChange={text => this.handleInput(text, 'title')}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3"
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
            onClick={() => this.addActivity()}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      <button type="button"
      className="menu menu-add"
      onClick={() => this.showAddActivity()}>Add Activity
      </button>
      </>

    )
  }
}

export default AddActivity