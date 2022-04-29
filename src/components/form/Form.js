import React, { useState } from 'react';
import uuid from 'uuid/v4';

const Form = ({ addAppointment }) => {
    const [appointment, setAppointment] = useState({
        patient: '',
        date: '',
        time: '',
        symptoms: ''
    })
    const { patient, date, time, symptoms } = appointment

    const submitForm = e => {
        e.preventDefault();
        addAppointment(appointment);
    };
   
    return ( 
        <>
            <h2>Crear citas</h2>
            <form
                onSubmit={submitForm}
            >
                <label>Nombre de la mascota</label>
                <input 
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={handleOnChange}
                    value={pet}
                />
                <label>Propietario</label>
                <input 
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre del dueño"
                    onChange={handleOnChange}
                    value={owner}
                />
                <label>Fecha del Turno</label>
                <input 
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleOnChange}
                    value={date}
                />
                <label>Horario</label>
                <input 
                    type="time"
                    name="hour"
                    className="u-full-width"
                    onChange={handleOnChange}
                    value={hour}
                />
                <label>Síntomas</label>
                <textarea
                    name="symptoms"
                    className="u-full-width"
                    onChange={handleOnChange}
                    value={symptoms}
                ></textarea>
                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Añadir cita
                </button>
            </form>
        </>
     );
}
 
export default Form;
