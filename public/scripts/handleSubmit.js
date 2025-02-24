document.getElementById('formularioProyecto').addEventListener('submit', async (event) => {
    event.preventDefault(); // Evita que la página se recargue
  
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData); // Convierte a un objeto
  
    console.log("Datos a enviar:", data);
  
    try {
      const response = await fetch('http://localhost:4321/api/form-handler', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Los datos a enviar
      });
  
      const result = await response.json();
      if (result.success) {
        alert(`Proyecto creado con ID: ${result.id}`);
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
      alert("Hubo un error al enviar el formulario.");
    }
  });
  