import React from 'react'
import { CumpleañosCercanos } from './CumpleañosCercanos'
import { EventosCercanos } from './EventosCercanos'

export const RightBar = () => {
    return (
        <div className="row barra_derecha">
            <div className="col">
                <div className="row">
                    <div className="col">
                        <CumpleañosCercanos />
                    </div>

                </div>
                <div className="row espacio-evento">
                    <div className="col ">
                        <EventosCercanos />
                    </div>
                </div>
            </div>

        </div>
    )
}