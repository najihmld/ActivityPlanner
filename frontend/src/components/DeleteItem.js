import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios';


class DeleteItem extends React.Component {

  deleteItem = (id) => {
    axios.delete(`http://127.0.0.1:3002/user/${id}`,
    { headers: { 'Authorization': localStorage.token} })
    .then(res => {
      this.props.onClose()
    })
    .catch(err => {
        console.log(err);
    })
   
  }

  render() {
    const { onClose, show, data } = this.props
    return (
      <Modal show={show} onHide={onClose}>
          <Modal.Header closeButton>
          <h5>Are you sure to delete this user?</h5>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={onClose}>
              Cancel
            </Button>
            <Button variant="danger" onClick={() => this.deleteItem(data)}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
    )
  }
}
export default DeleteItem