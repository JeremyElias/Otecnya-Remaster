// src/utils/database.js
import mysql from 'mysql2/promise'; // Usar la versión que soporta Promesas

// Función para conectar a la base de datos
export const connectToDatabase = async () => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '123456', 
      database: 'proyectos', 
    });
    console.log('Conexión exitosa a la base de datos');
    return connection;
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error);
    throw error;
  }
};
