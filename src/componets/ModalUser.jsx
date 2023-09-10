/* eslint-disable react/prop-types */
import { Modal, Button } from "react-daisyui"

const ModalUser = ({ refModal  }) => {
  return (
    <>
      <Modal  ref={refModal}  >
        <Modal.Header className="font-bold">Hello!</Modal.Header>
        <Modal.Body>
          Press ESC key or click the button below to close
        </Modal.Body>
        <Modal.Actions>
          <Button>Close</Button>
        </Modal.Actions>
      </Modal>
    </>
  )
}

export default ModalUser