import React from 'react';

const Card = ({ appointment }) => {
    const { patient, time, date, symptoms } = appointment;
    return ( 
        <div className="cita">
            <p>Mascota: <span>{patient}</span> </p>
            <p>Fecha: <span>{date}</span> </p>
            <p>Hora: <span>{time}</span> </p>
            <p>Síntomas: <span>{symptoms}</span> </p>
        </div>
     );
}
 
export default Card;
