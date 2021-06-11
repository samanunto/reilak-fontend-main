import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userStartLoading, userStartDelete, userSetActive } from "../../actions/usuarios";
import { Link, NavLink } from 'react-router-dom'
import Swal from 'sweetalert2';
import {
  eventsStartLoading,
  eventsSetActive,
  eventsStartUpdate,
  eventsStartAddNew,
  eventsStartDelete,
  ReunionStartUpdate
} from "../../actions/eventos";
import moment from 'moment';
import DateTimePicker from 'react-datetime-picker';


const now = moment().minutes(0).seconds(0).add(1, 'hours'); // 3:00:00
const nowPlus1 = now.clone().add(1, 'hours');

const initEvent = {
  titulo: '',
  descripcion: '',
  tipo: '',
  usuariosevent: [],
  start: now.toDate(),
  end: nowPlus1.toDate()
}

export const EventosScreen = () => {


  

  const { events, activeEvents } = useSelector(state => state.events);
  const { users } = useSelector(state => state.users);
  const { auth,rol } = useSelector(state => state.auth);

  const [titleValid, setTitleValid] = useState(true);

  const dispatch = useDispatch();

  const [formValues, setFormValues] = useState(initEvent);

  const {
    titulo,
    descripcion,
    start,
    end,
    tipo,
    usuariosevent
  } = formValues;

  useEffect(() => {
    if (activeEvents) {
      setFormValues(activeEvents);
    } else {
      setFormValues(initEvent);

    }
  }, [events, setFormValues])

  const [dateStart, setDateStart] = useState(now.toDate());
  const [dateEnd, setDateEnd] = useState(nowPlus1.toDate());

  const handleStartDateChange = (e) => {
    setDateStart(e);
    setFormValues({
      ...formValues,
      start: e
    })
  }

  const handleEndDateChange = (e) => {
    setDateEnd(e);
    setFormValues({
      ...formValues,
      end: e
    })
  }

  useEffect(() => {
    dispatch(eventsStartLoading());
    dispatch(userStartLoading());
  }, [dispatch])


  const editarUsuario = (id, titulo, descripcion, fecha) => {
    const prueba = { id, titulo, descripcion, fecha };
    dispatch(eventsSetActive(prueba));
  };

  const handleInputChange = ({ target }) => {
    console.log("llegue aqui");
    setFormValues({
      ...formValues,
      [target.name]: target.value
    });
  }

  const handleTipo = ({ target }) => {
    if (target.value == "Evento") {
      setFormValues({
        ...formValues,
        [target.name]: target.value
      });
    } else if (target.value == "Reunion") {
      setFormValues({
        ...formValues,
        [target.name]: target.value
      });
    }
  }

  const handleSubmitForm = (e) => {
    e.preventDefault();

    const momentStart = moment(start);
    const momentEnd = moment(end);

    if (momentStart.isSameOrAfter(momentEnd)) {
      return Swal.fire('Error', 'La fecha fin debe de ser mayor a la fecha de inicio', 'error');
    }
    if (formValues.titulo == "") {
      return Swal.fire('Error', 'El titulo es obligatorio', 'error');
    }
    if (formValues.descripcion == "") {
      return Swal.fire('Error', 'La descripcion es obligatoria', 'error');
    }
    if (formValues.tipo == "") {
      return Swal.fire('Error', 'El tipo es obligatorio', 'error');
    }

    const formData = new FormData();
    formData.set('titulo', formValues.titulo);
    formData.set('descripcion', formValues.descripcion);
    formData.set('start', formValues.start);
    formData.set('end', formValues.end);
    formData.set('tipo', formValues.tipo);
    formData.set('reunion', formValues.usuariosevent);
    console.log(formValues.usuariosevent);
    if (activeEvents) {
      console.log(activeEvents.id);
      formData.set('id', activeEvents.id);
      dispatch(eventsStartUpdate(formData))
    } else {

      dispatch(eventsStartAddNew(formData));
    }


    setTitleValid(true);

  }

  const eliminarEvento = (id) => {
    console.log(id);
    dispatch(eventsStartDelete(id));
  };

  const handleUsuariosEvento = (id) => {

    console.log(id);
    usuariosevent.push(id);
    console.log(usuariosevent);
    setFormValues({
      ...formValues,
      usuariosevent: usuariosevent
  });
  };


  return (

    <div className="main__home">
      {(rol === 'Administrador')?(
      <div className="container-fluid">

        <div className="row">
          <div className="col-1">

          </div>
          <div className="col">
            <div className="row">
              <div className="col">

              </div>
              <div className="col-10">
                <div className="row-top">

                </div>
                <div className="row">
                  <form
                    className="container"
                    onSubmit={handleSubmitForm}
                  >
                    <div className="container_tareas rounded border border-secondary">
                      <div className="col-1">

                      </div>
                      <div className="col">
                        <div className="row-top">

                        </div>
                        <div className="row">
                          <div className="col">
                            <div className="row">
                              <div className="col-1">

                              </div>
                              <div className="col">
                                <h1 className="titulo">{(activeEvents) ? 'Editar evento' : 'Nuevo evento'}</h1>
                              </div>
                              <div className="col-1">

                              </div>

                            </div>
                            <div className="row-top">

                            </div>
                            <div className="row">
                              <div className="col-1">

                              </div>
                              <div className="col">

                                <div className="col input-mailpersonal-mu"><input type="text" name="titulo" value={titulo} className="form-control mb-2 mr-sm-2" id="inlineFormInputName2" onChange={handleInputChange} placeholder="Titulo" /></div>

                              </div>
                              <div className="col-1">

                              </div>

                            </div>
                            <div className="row-top">

                            </div>
                            <div className="row">
                              <div className="col-1">

                              </div>
                              <div className="col ">

                                <textarea class="form-control" type="text" id="exampleFormControlTextarea1" name="descripcion" value={descripcion} onChange={handleInputChange} rows="3" placeholder="Escribe la descripción del evento"></textarea>

                              </div>
                              <div className="col-1">

                              </div>

                            </div>
                            <div className="row-top">

                            </div>
                            <div className="row">
                              <div className="col-4">

                              </div>
                              <div className="col">

                                <DateTimePicker
                                  onChange={handleStartDateChange}
                                  value={dateStart}
                                  className="form-control"
                                />


                              </div>
                              <div className="col-4">

                              </div>

                            </div>
                            <div className="row-top">

                            </div>
                            <div className="row">
                              <div className="col-4">

                              </div>
                              <div className="col">

                                <DateTimePicker
                                  onChange={handleEndDateChange}
                                  value={dateEnd}
                                  minDate={dateStart}
                                  className="form-control"
                                />


                              </div>
                              <div className="col-4">

                              </div>

                            </div>
                            <div className="row-top">

                            </div>
                            <div className="row">
                              <div className="col-1">

                              </div>
                              <div className="col ">


                                <select class="form-control" name="tipo" onChange={handleTipo} id="exampleFormControlSelect1">
                                  <option defaultValue>Selecciona un tipo...</option>
                                  <option value="Evento" >Evento</option>
                                  <option value="Reunion">Reunion</option>
                                </select>

                              </div>
                              <div className="col-1">

                              </div>

                            </div>
                            <div className="row-top">

                            </div>
                            <div className="row">
                              <div className="col-1">

                              </div>
                              <div className="col ">


                                <button type="submit" className="button_tarea">{ (activeEvents)? 'Editar evento': 'Nuevo evento' }</button>

                              </div>
                              <div className="col-1">

                              </div>

                            </div>
                            <div className="row-top">

                            </div>
                            <div className="row">
                              <div className="col-1 ">

                              </div>
                              <div className="col ">
                                {
                                  tipo == "Reunion"
                                    ?
                                    <table class="table texto-principal">
                                      <thead>
                                        <tr>
                                          <th className="text-aling" scope="col ">#</th>
                                          <th className="text-aling" scope="col">Rut</th>
                                          <th className="text-aling" scope="col">Nombre</th>
                                          <th className="text-aling" scope="col">Apellido Paterno</th>
                                          <th className="text-aling" scope="col">Estado</th>
                                          <th className="text-aling" scope="col">Cargo</th>
                                          <th className="text-aling" scope="col">Acciones</th>
                                        </tr>
                                      </thead>
                                      <tbody>

                                        {users.map(({ rut, id, name, apellidoPaterno, apellidoMaterno, email, area, cargo, segundoNombre, rol, estado, password, fono, nacimiento }, i) =>
                                          <tr key={i}>
                                            <th className="text-aling" scope="row">{i}</th>
                                            <td className="text-aling">{rut}</td>
                                            <td className="text-aling">{name}</td>
                                            <td className="text-aling">{apellidoPaterno}</td>
                                            <td className="text-aling">{estado}</td>
                                            <td className="text-aling">{cargo}</td>
                                            <td className="text-aling">
                                            <input className="form-check-input " type="checkbox" id="inlineCheckbox2" onChange={() => { handleUsuariosEvento(id); }} />
                                            </td>
                                          </tr>
                                        )}
                                      </tbody>
                                    </table>
                                    :
                                    <div className="row-bot">

                                    </div>
                                }
                              </div>
                              <div className="col-1 ">

                              </div>

                            </div>

                          </div>
                        </div>
                        <div className="row-bot">

                        </div>

                      </div>
                      <div className="col-1">
                      </div>
                    </div>
                  </form>
                </div>
                <div className="row-bot">

                </div>


              </div>
              <div className="col">

              </div>
            </div>
            <div className="row container_tareas rounded border border-secondary">
              <div className="lista">

                <h1 className="titulo">Lista Eventos</h1>
                <div>
                  <table class="table texto-principal">
                    <thead>
                      <tr>
                        <th scope="col ">#</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Fecha Inicio</th>
                        <th scope="col">Fecha Fin</th>
                        <th scope="col">Acciones</th>
                      </tr>
                    </thead>
                    <tbody>
                      {events.map(({ titulo, id, descripcion, start, end }, i) =>
                        <tr key={i}>
                          <th scope="row">{i}</th>
                          <td>{titulo}</td>
                          <td>{descripcion}</td>
                          <td>{moment(start).format("DD-MM-YYYY, h:mm a")}</td>
                          <td>{moment(end).format("DD-MM-YYYY, h:mm a")}</td>
                          <td>
                            <Link to="/eventos"><i class="fas fa-pencil-alt iconos-lu" onClick={() => { editarUsuario(id, titulo, descripcion, start, end); }} /></Link>
                            <span>  </span>
                            <i class="fas fa-trash iconos-lu" onClick={() => { eliminarEvento(id); }}></i>
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">

            </div>
          </div>
          <div className="col-1">

          </div>
        </div>




      </div>
      ):<div className="no-publicaciones">
        No tienes permisos necesarios para estar aqui
        </div>}
    </div>
  )
}