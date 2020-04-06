import React from 'react';

const Card = ({ appointment, removeAppointment }) => {
    const { pet, owner, date, hour, symptoms, id} = appointment;
    return ( 
        <div className="cita">
            <p>Mascota: <span>{pet}</span> </p>
            <p>Dueño: <span>{owner}</span> </p>
            <p>Fecha: <span>{date}</span> </p>
            <p>Hora: <span>{hour}</span> </p>
            <p>Síntomas: <span>{symptoms}</span> </p>
            <button
            className="u-full-width button eliminar"
            onClick={() => removeAppointment(id)}
            >
            Eliminar &times;
            </button>
        </div>
     );
}
 
export default Card;