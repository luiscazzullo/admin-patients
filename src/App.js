import React, { useState, useEffect } from 'react';
//Components
import Form from './components/form/Form';
import Card from './components/card/Card';

function App() {
  let initAppointments = JSON.parse(localStorage.getItem('citas'));
  if(!initAppointments) {
    initAppointments = [];
  }
  const [appointments, setAppointments] = useState(initAppointments);
  const addAppointment = appointment => {
    setAppointments([
      ...appointments,
      appointment
    ])
  }
  const removeAppointment = id => {
    const updateAppointments = appointments.filter(appointment => appointment.id !== id);
    setAppointments(updateAppointments);
  }

  useEffect(() => {
    let initAppointments = JSON.parse(localStorage.getItem('citas'));
    if(initAppointments) {
      localStorage.setItem('citas', JSON.stringify(appointments));
    } else {
      localStorage.setItem('citas', JSON.stringify([]));
    }
  }, [appointments])
  //Messages
  const title = appointments.length === 0 ? 'No hay citas' : 'Administa tus citas' 
  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form 
            addAppointment={addAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <Card
                key={appointment.id} 
                appointment={appointment}
                removeAppointment={removeAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
