### Components/Pages

#### Nagivate()

Es un hook de **React Router** que devuelve una funcion (navigate) con la que podes cambiar de pagina desde el codigo

- se importa asi
``` jsx
import { useNavigate } from "react-router";
```
- Y se usa asi
``` jsx
const navigate = useNavigate();
```
Esto te da acceso a la funcion navigate()

##### Que hace navigate()
Cambia la URL actual y hace que React Router muestre el componente correspondient a es ruta

Por ejemplo:
``` jsx
navigate("/login");
```
Esto equivale a que el usuario haga clic en un <Link to="/login" />.

En el Menu.jsx 
``` jsx
const abrirLogin = () => {
  navigate("/login");
};
```
Cuando el usuario hace click en "LOGIN" o "REGISTER", se ejecuta esa funcion y React Router se cambia la ruta a /login. Esto hace que tu aplicación muestre el componente <Login />, donde tenés el modal.

En Login, nuevamente useNavigate() para poder volver a la página principal cuando se cierre el modal:
``` jsx
const manejoCerrar = () => {
  console.log("Modal cerrado");
  navigate("/"); // vuelve a la ruta principal
  setVerModal(false);
  setValores({ usuario: "", contrasena: "" });
};
```

Entonces:

Desde Menu, navegás hacia /login ➜ se abre el modal.

Desde Login, navegás de vuelta a / ➜ se cierra el modal.

