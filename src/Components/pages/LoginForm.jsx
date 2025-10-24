const LoginForm = ({ valores, onChange,loading,onSubmit }) => {
  

  const manejoCambios = (e) =>{
      const {name,value} = e.target;
      
      onChange({
        ...valores,
        [name]:value
      });
  };

  const manejoSubmit = (e) =>{
    e.preventDefault();
    onSubmit(valores);
  };
  
    return (
    <form action="" onSubmit={manejoSubmit}>
      <div>
      <label htmlFor="Usuario" className="form-label">Usuario</label>
      <input 
      type="text"
      className="form-control"  
      id="usuario"
      name="usuario"
      value={valores.usuario} 
      onChange={manejoCambios}
      placeholder="Ejemplo@gmail.com"
      required 
      />
      </div>

      <div>
      <label htmlFor="Contraseña" className="form-label">Contraseña</label>
      <input 
      type="password"
      className="form-control"
      id="contraseña"
      name="contraseña"
      value={valores.contrasena}
      onChange={manejoCambios}
      placeholder="Contraseña"
      required 
      />
      </div>
      <div className="d-grid">
        <button
         type="submit"
         disabled={loading} 
        >
         {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </div>
    </form>
    
  );
};

export default LoginForm;