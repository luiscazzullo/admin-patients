import React, { useState } from 'react';
import uuid from 'uuid/v4';

const Form = ({ addAppointment }) => {
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        hour: '',
        symptoms: ''
    })
    const { pet, owner, date, hour, symptoms } = appointment
    const [error, setError] = useState(false);
    const handleOnChange = ev => {
        setAppointment({
            ...appointment,
            [ev.target.name]: ev.target.value
        })
    }
    const submitForm = ev => {
        ev.preventDefault();
        if(pet.trim() === '' || owner.trim() === '' || date.trim() === '' || hour.trim() === '' || symptoms.trim() === '') {
            setError(true);
            return;
        };
        setError(false)
        appointment.id = uuid();
        addAppointment(appointment);
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            hour: '',
            symptoms: ''
        })
        
    }
    return ( 
        <>
            <h2>Crear citas</h2>
            { error ? 
            <p className="alerta-error">Todos los campos son obligatorios</p>
            : null}
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