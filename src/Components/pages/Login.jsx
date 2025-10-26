import { Modal, Button } from "react-bootstrap";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { useNavigate } from "react-router";
const Login = () => {
  const navigate = useNavigate();
  const [verModal, setVerModal] = useState(true);
  const [valores, setValores] = useState({
    usuario: "",
    contrasena: "",
  });

  const [loading, setLoading] = useState(false);

  const manejoCerrar = () => {
    console.log("Modal cerrado");
    navigate("/");
    setVerModal(false);
    setValores({
      usuario: "",
      contrasena: "",
    });
  };

  const manejarSubmit = (datos) => {
    console.log("Datos del formulario:", datos);

    setLoading(true);
    setTimeout(() => {
      console.log(`Procesando datos`, datos);
      alert(`Bienvenido ${datos.usuario}!`);
      setLoading(false);
      manejoCerrar();
    }, 2000);
  };
  
  return (
    <Modal show={verModal} onHide={manejoCerrar}>
      <Modal.Header closeButton>
        <Modal.Title>Iniciar Sesíon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <LoginForm
          valores={valores}
          onChange={setValores}
          loading={loading}
          onSubmit={manejarSubmit}
        />
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={manejoCerrar}>
          Close
        </Button>
        <Button variant="primary">Save changes</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Login;
