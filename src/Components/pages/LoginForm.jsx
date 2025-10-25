import React, { useState } from "react";

const LoginForm = ({ valores, onChange,loading }) => {
  
  const [formData,setFormData]=useState({
    usuario:"",
    contrasena:""
  })

  const manejoCambios = (e) =>{
      const {name,value} = e.target;
      setFormData({
        ...formData,
        [name]:value
      });
  };

  const manejoSubmit = (e) =>{
    e.proventDefault();
    onSubmit(formData);
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
      value={formData.usuario} 
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
      id="password"
      name="password"
      value={formData.contrasena}
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
