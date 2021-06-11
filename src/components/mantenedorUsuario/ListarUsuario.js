
import React, { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { userStartLoading, userStartDelete, userSetActive } from "../../actions/usuarios";
import { userFiltroEstado, userFiltroRol, userBuscar } from "../../actions/filtros";

const initEvent = {
    estado: '',
    buscar: ''
}

export const ListarUsuario = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userStartLoading());
    }, [dispatch])

    const [formValues, setFormValues] = useState(initEvent);

    const {
        estado,
        buscar
    } = formValues;

    useEffect(() => {
            setFormValues(initEvent);
   
        
    }, [setFormValues])

    



    const { users } = useSelector(state => state.users);
    console.log(users);

    // Anular Usuario
    const anularUsuario = (id,rut,name,apellidoPaterno,estado,email,area,cargo,rol) => {
        if(estado === "Activo"){
            estado = "Inactivo";
            const usuario = {id,rut,name,apellidoPaterno,estado,email,area,cargo,rol};  
            dispatch(userStartDelete(usuario));
        }else if(estado === "Inactivo"){
            estado = "Activo";
            const usuario = {id,rut,name,apellidoPaterno,estado,email,area,cargo,rol}; 
            dispatch(userStartDelete(usuario));
        }
        
    };

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleEstado = ({ target }) => {
        dispatch(userFiltroEstado(target.value));
    }

    const handleRol = ({ target }) => {
        dispatch(userFiltroRol(target.value));
    }



    const editarUsuario = (id, name, email, password, segundoNombre, apellidoPaterno, apellidoMaterno, area, fono, nacimiento, rol, cargo, rut) => {
        const prueba = { id, name, email, password, segundoNombre, apellidoPaterno, apellidoMaterno, area, fono, nacimiento, rol, cargo, rut };
        dispatch(userSetActive(prueba));
    };

    return (

        <div className="container-fluid general-mu">
            <div className="row cabezera-lu">

                <div className="col-1 espacioizq-cabezera-lu">

                </div>
                <div className="col btn-cabezera-lu">
                    <Link

                        to="/mantenedorusuario"
                    >
                        <button type="button" class="btn btn-primary btn-lu">Crear usuario</button>
                    </Link>
                </div>

                <div className="col espacioder-cabezera-lu">

                </div>

            </div>

            <div className="row tabla-lu ">
                <div className="col-1 izquierda-formulario-lu">

                </div>
                <div className="col tabla-contenedor-lu card border border-secondary">
                    <div className="row filtros-contenedor-lu">
                        <div className="col-1 espacio-filtros-lu">

                        </div>
                        <div className="col-3 rol-filtros-lu">
                            <div className="row ">
                                <div className="col ">
                                    <label for="exampleFormControlSelect1">Example select</label>
                                    <select class="form-control" onChange={handleRol} name="rol" id="exampleFormControlSelect1">
                                        <option value="Colaborador">Colaborador</option>
                                        <option value="Jefatura">Jefatura</option>
                                        <option value="Administrador">Administrador</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col label-opaco">
                                    Filtro por rol
                                </div>
                            </div>
                        </div>
                        <div className="col-3 permiso-filtros-lu">
                            <div className="row ">
                                <div className="col ">
                                    <label for="exampleFormControlSelect2">Example select</label>
                                    <select class="form-control" onChange={handleEstado} name="estado" id="exampleFormControlSelect2">
                                        <option value="Activo">Activo</option>
                                        <option value="Inactivo">Inactivo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row label-opaco">
                                <div className="col label-opaco">
                                    Filtro por Estado
                                </div>
                            </div>
                        </div>

                        <div className="col-1 espacio-filtros-lu">

                        </div>
                    </div>
                    <div className="row datos-tabla-lu label-lu">
                        <div className="col-1 espacio-tabla-lu">

                        </div>
                        <div className="col datos-tabla-lu table-responsive">
                            <table class="table texto-principal">
                                <thead>
                                    <tr>
                                        <th scope="col ">#</th>
                                        <th scope="col">Rut</th>
                                        <th scope="col">Nombre</th>
                                        <th scope="col">Apellido Paterno</th>
                                        <th scope="col">Estado</th>
                                        <th scope="col">Email Personal</th>
                                        <th scope="col">Cargo</th>
                                        <th scope="col">Rol</th>
                                        <th scope="col">Permisos</th>
                                        <th scope="col">Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                    {users.map(({ rut, id, name, apellidoPaterno, apellidoMaterno, email, area, cargo, segundoNombre, rol, estado, password, fono, nacimiento}, i) =>
                                    estado === "Activo" ? (<tr key={i}>
                                        <th scope="row">{i}</th>
                                        <td>{rut}</td>
                                        <td>{name}</td>
                                        <td>{apellidoPaterno}</td>
                                        <td>{estado}</td>
                                        <td>{email}</td>
                                        <td>{area}</td>
                                        <td>{cargo}</td>
                                        <td>{rol}</td>
                                        <td>
                                            <td>
                        
                                                <i className="fas fa-ban bansito-lu" onClick={() => { anularUsuario(id,rut,name,apellidoPaterno,estado,email,area,cargo,rol); }}></i>
                                            

                                            </td>
                                            <td><Link
                                                to="/mantenedorusuario"
                                            ><i className="fas fa-pencil-alt iconos-lu" onClick={() => { editarUsuario(id, name, email, password, segundoNombre, apellidoPaterno, apellidoMaterno, area, fono, nacimiento, rol, cargo, rut); }}></i></Link></td>
                                            
                                        </td>
                                    </tr>) 
                                    : 
                                    (<tr key={i}>
                                            <th scope="row">{i}</th>
                                            <td>{rut}</td>
                                            <td>{name}</td>
                                            <td>{apellidoPaterno}</td>
                                            <td>{estado}</td>
                                            <td>{email}</td>
                                            <td>{area}</td>
                                            <td>{cargo}</td>
                                            <td>{rol}</td>
                                            <td>
                                                <td>
                            

                                                    <i className="fas fa-ban bansote-lu" onClick={() => { anularUsuario(id,rut,name,apellidoPaterno,estado,email,area,cargo,rol); }}></i> 

                                                </td>
                                                <td><Link
                                                    to="/mantenedorusuario"
                                                ><i className="fas fa-pencil-alt iconos-lu" onClick={() => { editarUsuario(id, name, email, password, segundoNombre, apellidoPaterno, apellidoMaterno, area, fono, nacimiento, rol, cargo, rut); }}></i></Link></td>
                                                
                                            </td>
                                        </tr>)
                                        
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="col-1 espacio-tabla-lu">

                        </div>
                    </div>
                    <div className="row espacio-contenedor-lu label-mu">

                    </div>
                </div>
                <div className="col-1 derecha-formulario-mu">

                </div>
            </div>
        </div>

    )
}
