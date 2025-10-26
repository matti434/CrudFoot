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

### AS y TO
 ``` jsx
<Navbar.Brand as={Link} to={"/"}>
```

---
---
---

Que hace as ?
 - as es un prop de React Boostrap que permite cambiar el elemento HTML o componente que se renderiza.
 - Por defecto, navbar.Bramd renderiza un "a" tag con as={Link} le decimos: "En lugar de usar un "a", usamos el componente Link de React Router"

 Que hace to ?
 - to es una prop del componente link de React Router
 - Es el equivalente a href en un anchor tag normal
 - Especifica a que ruta debe navegar cuando se hace click

 ¿Cómo funciona?
``` jsx
// con HTML
<a href="/" className="navbar-brand fs-2">Crud Food</a>

// Con React Bootstrap + React Router
<Navbar.Brand as={Link} to={"/"} className="fs-2">
  Crud Food
</Navbar.Brand>



Otras formas similares:
// Opción 1: Con styled components
<Navbar.Brand as={CustomLink} to="/">

// Opción 2: Con componente personalizado
<Navbar.Brand as={MyCustomComponent}>

// Opción 3: Directamente con Link (sin Navbar.Brand)
<Link to="/" className="navbar-brand fs-2">Crud Food</Link>
```

#### Por que aqui lo hago distinto ?
``` jsx
 <NavLink
 onClick={abrirLogin}
 className={"nav-link"}
 style={{ cursor: "pointer" }}
>
  LOGIN
</NavLink>{" "}
```

- to: navega directamente a /login y renderiza lo que haya en esa ruta
- onClick + navigate(): Nos da control para:
    - Abrir modales
    - Hacer validaciones antes de navegar
    - Ejecutar logica adicional
    - Mantener el estado actual

#### Declaracion Declarativa y Programatica

Aqui mas que nada se diferencia entre estos dos conceptos

Declarativa: Dime como hacerlo
``` jsx
<Link to="/login">Login</Link>
// "Cuando hagan click, ve a /login"
```

Programática (Dime CÓMO hacerlo):

``` jsx
const handleLogin = () => {
  // Validar usuario
  if (usuarioLogueado) {
    navigate('/dashboard');
  } else {
    navigate('/login');
  }
};

<button onClick={handleLogin}>Login</button>
// "Cuando hagan click, ejecuta esta lógica y decide a dónde ir"
```

En un resumen simple, con la programatica puedo controlar exactamente que pasa al hacer click en "LOGIN".


 Ventajas de estado local vs global:
Estado Local (en cada componente):
✅ Más simple: Fácil de entender y mantener

✅ Menos prop drilling: No pasar props através de muchos componentes

✅ Mejor performance: Solo se re-renderiza el componente afectado