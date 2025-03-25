// src/data.js
export const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    image: 'https://example.com/doctor1.jpg',
    specialty: 'Cardiologist',
    rating: 4.5,
    experience: 10
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    image: "D:\assassins-creed-cape-or-banner.png",
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