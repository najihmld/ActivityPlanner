import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';


class DeleteItem extends React.Component {
  state = {
    show: false
  }

  deleteItem = (id) => {
    axios.delete(`http://127.0.0.1:3002/user/${id}`,
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      this.handleClose()
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
      <Modal show={show} onHide={this.handleClose}>
          <Modal.Header closeButton>
          <h5>Are you sure to delete this user?</h5>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => this.deleteItem(this.props.data)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>

        <button type="button"
            className="card-action-btn warning"
            onClick={() => this.setState({show: true})}>Delete
        </button>
      </>
    )
  }
}
export default DeleteItem