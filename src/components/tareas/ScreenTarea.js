import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  TareasMarcaUpdate,
  tareasSetActive,
  tareasStartAddNew,
  tareasStartDelete,
  tareasStartLoading,
  tareasStartUpdate,
} from "../../actions/tarea";
import moment from "moment";
import { eventSetActive } from "../../actions/events";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from "date-fns/locale/es";
registerLocale("es", es);

const initEvent = {
  titulo: "",
  contenido: "",
  fecha: new Date(),
};

export const ScreenTarea = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tareasStartLoading());
  }, [dispatch]);

  const [formValues, setFormValues] = useState(initEvent);

  const handleInputChange = ({ target }) => {

    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const { activeTareas } = useSelector((state) => state.tareas);

  useEffect(() => {
    if (activeTareas) {
      setFormValues(activeTareas);
    } else {
      setFormValues(initEvent);
    }
  }, [activeTareas, setFormValues]);

  const { tareas } = useSelector((state) => state.tareas);



  const handleCreateTareas = (e) => {
    e.preventDefault();

    setFormValues(initEvent);
    console.log();
    if (activeTareas) {
      dispatch(tareasStartUpdate(formValues));
    } else {
      dispatch(tareasStartAddNew(formValues));
    }
  };

  const editarTareas = (_id, titulo, contenido, fecha) => {
    const prueba = { _id, titulo, contenido, fecha };
    dispatch(tareasSetActive(prueba));
  };

  const eliminarTareas = (_id) => {

    dispatch(tareasStartDelete(_id));
  };

  /*
  const marcarTarea = (_id, titulo, contenido, fecha, marcar) => {

    const prueba = { id, titulo, contenido, fecha, marcar };


    dispatch(MarcarStartUpdate(prueba));

  }*/

  const [fechaTareas, setFechaTareas] = useState(initEvent.fecha);

  useEffect(() => {
    if(fechaTareas!==new Date()){
      initEvent.fecha=fechaTareas
      console.log(initEvent.fecha)
    }
  }, [fechaTareas]);

  const onChangeFecha = (date) => {
    setFechaTareas(date);

   
  };

  const tareasMarca = (id) => {

    const prueba = { id };


    dispatch(TareasMarcaUpdate(prueba));

  }
  return (
    <div className="main__home">
      <div className="container_tareas">
        <div className="crear_tarea">
          <form onSubmit={handleCreateTareas}>
            <h3 className="titulo_tarea">Crear tarea</h3>

            <div>
              <input
                className="input_tarea"
                type="text"
                name="titulo"
                onChange={handleInputChange}
                autoComplete="off"
                value={formValues.titulo}
              />
            </div>
            <div>
              <textarea
                className="input_tarea"
                type="text"
                name="contenido"
                onChange={handleInputChange}
                value={formValues.contenido}
              />
            </div>
            <div>
              <DatePicker
                selected={fechaTareas}
                name="fecha"
                className="tarea_fecha"
                dateFormat="dd-MM-yyyy"
                locale="es"
                onChange={onChangeFecha}
              />
            </div>
            <div>
              <button type="submit" className="button_tarea">
                Crear
              </button>
            </div>
          </form>
        </div>
        <div className="listar_tarea">
          <div className="col datos-tabla-lu table-responsive">
            <table class="table texto-principal">
              <thead>
                <tr>
                  
                  <th scope="col" className="t">titulo</th>
                  <th scope="col" className="c">contenido</th>
                  <th scope="col" className="f">fecha</th>
                  <th scope="col" className="o">Opciones</th>
                </tr>
              </thead>
              <tbody>
                {tareas.map(({ _id, titulo, contenido, fecha,  estado }, i=1) =>
                  estado === false ? (
                    <tr key={i }>
                      
                      <td>{titulo}</td>
                      <td>{contenido}</td>
                      <td>{moment(fecha).format("DD-MM-YYYY")}</td>

                      <td>
                        <i
                          className="fas fa-trash"
                          onClick={() => {
                            eliminarTareas(_id);
                          }}
                        ></i>

                        <i
                          class="far fa-edit"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => {
                            editarTareas(_id, titulo, contenido, fecha);
                          }}
                        ></i>
                        <i
                          class="fas fa-times iconos-lu"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => { tareasMarca(_id) }}
                        ></i>
                      </td>
                    </tr>
                  ) : (
                    <tr key={i} >
                      
                      <td className="color_estado">{titulo}</td>
                      <td className="color_estado">{contenido}</td>
                      <td className="color_estado">{moment(fecha).format("DD-MM-YYYY")}</td>

                      <td>
                        <i
                          className="fas fa-trash"
                          onClick={() => {
                            eliminarTareas(_id);
                          }}
                        ></i>

                        <i
                          class="far fa-edit"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => {
                            editarTareas(_id, titulo, contenido, fecha);
                          }}
                        ></i>
                        <i
                          class="fas fa-check iconos-lu"
                          data-toggle="modal"
                          data-target="#exampleModal"
                          onClick={() => { tareasMarca(_id) }}
                        ></i>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
