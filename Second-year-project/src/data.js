// src/data.js
export const doctors = [
  {
    id: 1,
    name: 'Dr. Sudan',
   
    specialty: 'Cardiologist',
    rating: 4.5,
    experience: 10
  },
  {
    id: 2,
    name: 'Dr. Mukunda',
   
    specialty: 'Neurologist',
    rating: 4.7,
    experience: 8
  },

  {
    id: 2,
    name: 'Dr. Utkrish',
   
    specialty: 'Neurologist',
    rating: 4.7,
    experience: 8
  },
  ];
  
  export const appointments = [
    {
      id: 1,
      patient: 'John Doe',
      date: '2023-08-25',
      time: '10:00 AM',
      status: 'pending'
    },
    {
      id: 2,
      patient: 'Jane Smith',
      date: '2023-08-26',
      time: '2:00 PM',
      status: 'accepted'
    },
    // Add more appointments
  ];
  
  export const users = [
    {
      email: 'patient@example.com',
      password: 'patient123',
      role: 'patient'
    },
    {
      email: 'doctor@example.com',
      password: 'doctor123',
      role: 'doctor'
    },
    {
      email: 'admin@example.com',
      password: 'admin123',
      role: 'admin'
    }
  ];