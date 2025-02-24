// src/pages/api/form-handler.js
export async function handler(req, res) {
  if (req.method === 'POST') {
    // Aquí va tu lógica para manejar los datos POST
    const { name, description, participants, totalParticipants, dateStart, dateEnd, img } = req.body;
    
    // Responde con el éxito de la operación
    res.status(200).json({ success: true, message: 'Datos recibidos correctamente' });
  } else {
    res.status(405).json({ error: 'Método no permitido' });
  }
}
