// src/pages/api/createProjects.js

export async function post({ request }) {
  const { name, description } = await request.json();

  // Lógica de base de datos o procesamiento
  return {
    status: 200,
    body: {
      message: 'Proyecto creado exitosamente',
    },
  };
}
