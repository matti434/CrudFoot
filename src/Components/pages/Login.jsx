import { Modal } from "react-bootstrap";
import { LoginForm } from "./LoginForm";
import { use, useState } from "react";

const Login = () => {
  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesíon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm onChange={setValores} loading={loading} />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};
