import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  eventsStartLoading,
} from "../../actions/eventos";
import moment from "moment";

export const EventosCercanos = () => {

  const tiempoActual = new Date().getTime()

  const dispatch = useDispatch();

  const { events } = useSelector(state => state.events);
  console.log(events);

  useEffect(() => {
    dispatch(eventsStartLoading());
  }, [dispatch])
  const mes = moment(tiempoActual).format("MMMM")
  return (
    
    <div className="row proximos-eventos">
      
      <div className="col">
        <div className="row titulo-eventos">
          <div className="col-1">
          </div>
          <div className="col">
            Proximos Eventos
        </div>
          <div className="col-1">
          </div>
        </div>
        <div className="row espacio-eventos">
        </div>
        <div className="row">
          <div className="col">
          </div>
          <div className="col mes-eventos">
            <h6>{mes.toUpperCase()}</h6>
          </div>
          <div className="col">
          </div>
        </div>
        {events.map(({ titulo, id, descripcion, start, end },i) =>
        <div className="row">
          <div className="col-1">
          </div>
          <div className="col">
            <div className="row ">
            </div>
            <div className="row fondo-descripcion-eventos rounded">
              <div className="col ">
              <div className="row espacio-eventos">
              </div>
              <div className="row ">
              <div className="col-1">
              </div>
              <div className="col-2 descripcion-eventos">
                  <i class="far fa-calendar fa-2x icono-cal icono-eventos"></i><div className="dia numerojodido">{moment(start).format("DD")}</div>
              </div>
              <div className="col descripcion-eventos ">
              <div className="tit-eventos">{titulo}</div> 
              </div>
              <div className="col-1">
              </div>
              </div>            
              </div>   
            </div>
            <div className="row">
            </div>
          </div>
          <div className="col-1">
          </div>
          <div className="row-top">
          </div>
        </div>
         )}
      </div>
     
    </div>

  );

};