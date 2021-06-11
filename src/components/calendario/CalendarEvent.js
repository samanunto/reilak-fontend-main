import React from 'react'

export const CalendarEvent = ({ event }) => {
console.log(event);
    const { titulo, usuario } = event;

    return (
        <div>
            <strong> { titulo } </strong>
            <span>- { usuario.name } </span>
        </div>
    )
}
