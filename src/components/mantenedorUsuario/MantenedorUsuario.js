import moment from 'moment';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import { Link } from 'react-router-dom'
//Verificador
import Swal from 'sweetalert2';
import verificador  from 'verificador-rut'

import { userStartAddNew, userStartUpdate, userClearActiveEvent } from '../../actions/usuarios';

const now = moment().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
    name: '',
    rut: '',
    password: '',
    segundoNombre: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    area: '',
    cargo: '',
    fono: '',
    nacimiento: nowPlus1.toDate(),
    rol: '',
    email: '',
    imgusuario: '',
    emailp: '',
    permisos: [] 
}

const fileName = {
    nameFile: ""
}

export const MantenedorUsuario = () => {

    const { activeUser } = useSelector(state => state.users);

    const dispatch = useDispatch();

    const [titleValid, setTitleValid] = useState(true);

    const [formValues, setFormValues] = useState(initEvent);

    const { name,
        rut,
        password,
        segundoNombre,
        apellidoPaterno,
        apellidoMaterno,
        area,
        cargo,
        fono,
        nacimiento,
        rol,
        email,
        emailp,
        permisos,
    } = formValues;

    useEffect(() => {
        if (activeUser) {
            setFormValues(activeUser);
        } else {
            setFormValues(initEvent);
   
        }
    }, [activeUser, setFormValues])

    /***********************************************************
    SUBIDA DE ARCHIVOS
    **********************************************************/

    const [selectedFile, setSelectedFile] = useState("");

    const imageHandleChange = (e) => {
        if (e.target.files) {
            setSelectedFile(e.target.files[0]);
            const file = e.target.files[0];


        }
    };
    useEffect(() => {
        if (selectedFile) {
            formValues.imgusuario = selectedFile;
        }
    }, [selectedFile])


    fileName.nameFile = selectedFile.name;

    const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

    const handleEndDateChange = (e) => {
        setDateEnd(e);
        setFormValues({
            ...formValues,
            nacimiento: e
        })
    }


    const handlePermisos = ({ target }) => {
        const arrpe = ['Publicaciones', 'Eventos'];
        const arre = ['Eventos'];
        const arrp = ['Publicaciones'];
        if(target.value == "Colaborador"){
            setFormValues({
                ...formValues,
                permisos: arrp,
                rol: target.value
            });
    }
        if(target.value == "Jefatura"){
            setFormValues({
                ...formValues,
                permisos: arre,
                rol: target.value
            });
    }
        if(target.value == "Administrador"){
            setFormValues({
                ...formValues,
                permisos: arrpe,
                rol: target.value
            });
    }
    }

    const handleInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    }

    const handleCancelar = () => {
        dispatch(userClearActiveEvent());
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        const formData = new FormData();
        if (activeUser) {
            console.log(formValues.permisos);
            formData.set('rut', formValues.rut);       
            formData.set('password', formValues.password);
            formData.set('segundoNombre', formValues.segundoNombre);
            formData.set('apellidoPaterno', formValues.apellidoPaterno);
            formData.set('apellidoMaterno', formValues.apellidoMaterno);
            formData.set('area', formValues.area);
            formData.set('cargo', formValues.cargo);
            formData.set('fono', formValues.fono);
            formData.set('nacimiento', formValues.nacimiento);
            formData.set('rol', formValues.rol);
            formData.set('email', formValues.email);
            formData.set('emailp', formValues.emailp);
            formData.set('imgusuario', formValues.imgusuario);
            formData.set('name', formValues.name);
            formData.set('permisos', formValues.permisos);
            console.log(activeUser.id);
            formData.set('id', activeUser.id);
            dispatch(userStartUpdate(formData))
            dispatch(userClearActiveEvent());
            
        } else {
            if (verificador(formValues.rut) == false) {
                return Swal.fire('Error', 'El rut es incorrecto', 'error');
              }
              if (formValues.name == "") {
                return Swal.fire('Error', 'El nombre es obligatorio', 'error');
              }
              if (formValues.apellidoPaterno == "") {
                return Swal.fire('Error', 'El apellido paterno es obligatorio', 'error');
              }
              if (formValues.email == "") {
                return Swal.fire('Error', 'El email es obligatorio', 'error');
              }
              if (formValues.password == "") {
                return Swal.fire('Error', 'La contraseÃ±a es obligatorio', 'error');
              }
              if (formValues.imgusuario == null) {
                return Swal.fire('Error', 'La foto de usuario es obligatoria', 'error');
              }
              console.log(formValues.permisos);
              formData.set('rut', formValues.rut);       
              formData.set('password', formValues.password);
              formData.set('segundoNombre', formValues.segundoNombre);
              formData.set('apellidoPaterno', formValues.apellidoPaterno);
              formData.set('apellidoMaterno', formValues.apellidoMaterno);
              formData.set('area', formValues.area);
              formData.set('cargo', formValues.cargo);
              formData.set('fono', formValues.fono);
              formData.set('nacimiento', formValues.nacimiento);
              formData.set('rol', formValues.rol);
              formData.set('email', formValues.email);
              formData.set('emailp', formValues.emailp);
              formData.set('imgusuario', formValues.imgusuario);
              formData.set('name', formValues.name);
              formData.set('permisos', formValues.permisos);
            dispatch(userStartAddNew(formData));
            dispatch(userClearActiveEvent());
        }


        setTitleValid(true);

    }

    return (



        <div className="container-fluid general-mu">

            <div className="row cabezera-mu">

                <div className="col-1 espacioizq-cabezera-mu">

                </div>
                <div className="col titulo-cabezera-mu titulo-label-mu">
                    {(activeUser) ? 'Editar usuario' : 'Nuevo usuario'}
                </div>

                <div className="col espacioder-cabezera-mu">

                </div>

            </div>

            <form
                className="container"
                onSubmit={handleSubmitForm}
            >

                <div className="row formulario-mu ">

                    <div className="col-1 izquierda-formulario-mu">

                    </div>

                    <div className="col contenedor-formulario-mu card border border-secondary">

                        <div className="row datos-contenedor-mu label-mu">

                            <div className="col-1 espacio-datos-mu">

                            </div>

                            <div className="col datos-dato-mus">
                                <div className="row primera-datos-mu paddtop-mu">
                                    <div className="col rut-primera-mu">
                                        <div className="row rut-mu">
                                            <div className="col-4 label-rut-mu">Rut</div>
                                            <div className="col input-rut-mu"><input type="text" name="rut" onChange={handleInputChange} value={rut} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col nombre-primera-mu">
                                        <div className="row nombre-mu">
                                            <div className="col-4 label-nombre-mu">Nombre</div>
                                            <div className="col input-nombre-mu"><input type="text" name="name" value={name} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" onChange={handleInputChange} placeholder="" /></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row segunda-datos-mu paddtop-mu">
                                    <div className="col segundonombre-primera-mu">
                                        <div className="row segundonombre-mu">
                                            <div className="col-4 label-segundonombre-mu">Segundo Nombre</div>
                                            <div className="col input-segundonombre-mu"><input type="text" name="segundoNombre" value={segundoNombre} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" onChange={handleInputChange} placeholder="" /></div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col apellidopaterno-segunda-mu">
                                        <div className="row apellidopaterno-mu">
                                            <div className="col-4 label-apellidopaterno-mu">Apellido Paterno</div>
                                            <div className="col input-apellidopaterno-mu"><input type="text" name="apellidoPaterno" value={apellidoPaterno} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" onChange={handleInputChange} placeholder="" /></div>
                                        </div>
                                    </div>


                                </div>
                                <div className="row tercera-datos-mu paddtop-mu">
                                    <div className="col apellidomaterno-segunda-mu">
                                        <div className="row apellidomaterno-mu">
                                            <div className="col-4 label-apellidomaterno-mu">Apellido Materno</div>
                                            <div className="col input-apellidomaterno-mu"><input type="text" name="apellidoMaterno" value={apellidoMaterno} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" onChange={handleInputChange} placeholder="" /></div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col area-segunda-mu">
                                        <div className="row area-mu">
                                            <div className="col-4 label-area-mu">Ãrea</div>
                                            <div className="col input-area-mu">
                                                <select class="form-control" onChange={handleInputChange} name="area" id="exampleFormControlSelect1">
                                                    <option defaultValue>Selecciona un Ã¡rea...</option>
                                                    <option value="Recursos humanos">Recursos humanos</option>
                                                    <option value="Finanzas">Finanzas</option>
                                                    <option value="Marketing">Marketing</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>



                                </div>

                                <div className="row cuarta-datos-mu paddtop-mu">
                                    <div className="col cargo-tercera-mu">
                                        <div className="row cargo-mu">
                                            <div className="col-4 label-cargo-mu">Cargo</div>
                                            <div className="col input-cargo-mu">
                                                <select class="form-control custom-select " name="cargo" onChange={handleInputChange} id="exampleFormControlSelect1">
                                                    <option defaultValue>Selecciona un cargo...</option>
                                                    <option value="Administrativo Credito" >Administrativo Credito</option>
                                                    <option value="Gerente Administrativo">Gerente Administrativo</option>
                                                    <option value="Jefe de control de calidad" >Jefe de control de calidad</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col mailcorp-tercera-mu">
                                        <div className="row mailcorp-mu form-group">
                                            <div className="col-4 label-mailcorp-mu">Email corporativo</div>
                                            <div className="col input-mailcorp-mu"><input type="text" name="email" onChange={handleInputChange} value={email} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                        </div>
                                    </div>


                                </div>
                                <div className="row quinta-datos-mu paddtop-mu">
                                    <div className="col foto-cuarta-mu">
                                        <div className="row foto-mu">
                                            <div className="col-4 label-foto-mu">Foto Usuario</div>
                                            <div className="col input-foto-mu">
                                                <input type="file" class="form-control" name="file" id="customFile" onChange={imageHandleChange} accept=".img,.png,.jpg,.jepg" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col fono-tercera-mu">
                                        <div className="row fono-mu">
                                            <div className="col-4 label-fono-mu">Fono</div>
                                            <div className="col input-fono-mu"><input type="text" name="fono" value={fono} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" onChange={handleInputChange} placeholder="" /></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row sexta-datos-mu paddtop-mu">
                                    <div className="col fechanac-cuarta-mu">
                                        <div className="row fechanac-mu">
                                            <div className="col-4 label-fechanac-mu">Fecha Nacimiento</div>
                                            <div className="col input-fechanac-mu">
                                                <DateTimePicker
                                                    onChange={handleEndDateChange}
                                                    value={dateEnd}
                                                    className="form-control"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col fechaingreso-cuarta-mu ">
                                        <div className="row fechaingreso-mu">
                                            <div className="col-4 label-fechaingreso-mu">Fecha ingreso</div>
                                            <div className="col input-fechanac-mu"> <fieldset disabled>
                                                    <div class="form-group">
                                                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Hoy" />
                                                    </div>
                                                </fieldset></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row sexta-datos-mu paddtop-mu">
                                    <div className="col Roles-cuarta-mu">
                                        <div className="row Roles-mu">
                                            <div className="col-4 label-Roles-mu">Roles</div>
                                            <div className="col input-Roles-mu">
                                                <select class="form-control" name="rol" onChange={handlePermisos} id="exampleFormControlSelect1">
                                                    <option defaultValue>Selecciona un cargo...</option>
                                                    { (activeUser)? 'Editar usuario': <option value="Colaborador" >Colaborador</option> }
                                                    <option value="Jefatura">Jefatura</option>
                                                    <option value="Administrador">Administrador</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col permisos-cuarta-mu ">
                                        <div className="row permisos-mu">
                                            <div className="col-4 label-permisos-mu">Email Personal</div>
                                            <div className="col input-permisos-mu">
                                            <div className="col input-mailcorp-mu"><input type="text" name="emailp" onChange={handleInputChange} value={emailp} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" placeholder="" /></div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className="row sexta-datos-mu paddtop-mu">
                                    <div className="col empresa-cuarta-mu">
                                        <div className="row empresa-mu">
                                            <div className="col-4 label-empresa-mu">Empresa</div>
                                            <div className="col input-empresa-mu">
                                                <fieldset disabled>
                                                    <div class="form-group">
                                                        <input type="text" id="disabledTextInput" class="form-control" placeholder="Reilak" />
                                                    </div>
                                                </fieldset>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-1 espaciador-primera-mu">

                                    </div>
                                    <div className="col mailpersonal-cuarta-mu ">
                                        <div className="row mailpersonal-mu form-group">
                                            <div className="col-4 label-mailpersonal-mu">ContraseÃ±a</div>
                                            <div className="col input-mailpersonal-mu"><input type="password" name="password" value={password} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" onChange={handleInputChange} placeholder="" /></div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="col-1 espacio-datos-mu">

                            </div>
                        </div>


                        <div className="row btn-formulario-mu">

                            <div className="col-7 espacio-btn-mu">

                            </div>

                            <div className="col  btn-btn-mu">
                            <button type="submit" class="btn btn-primary ">{ (activeUser)? 'Editar usuario': 'Nuevo usuario' }</button>
                            </div>
                            <div className="col btn-btn-mu">
                            <Link to="/usuarios"><button type="button" class="btn btn-primary btn-mu" onClick={handleCancelar}>Cancelar</button></Link>
                            </div>

                        </div>

                    </div>


                    <div className="col-1 derecha-formulario-mu">

                    </div>
                </div>

            </form>
        </div>


        



    )
}