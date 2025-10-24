const form = document.getElementById('testimonioForm');
const lista = document.getElementById('listaTestimonios');

document.addEventListener('DOMContentLoaded', mostrarTestimonios);

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nombre = document.getElementById('nombre').value.trim() || "Anónimo";
  const edad = document.getElementById('edad').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();

  if (mensaje === "") return;

  const nuevo = { nombre, edad, mensaje };
  guardarTestimonio(nuevo);
  agregarTestimonio(nuevo);

  form.reset();
});

// Guardar en localStorage
function guardarTestimonio(testimonio) {
  const testimonios = JSON.parse(localStorage.getItem('testimonios')) || [];
  testimonios.push(testimonio);
  localStorage.setItem('testimonios', JSON.stringify(testimonios));
}

// Mostrar testimonios guardados
function mostrarTestimonios() {
  const testimonios = JSON.parse(localStorage.getItem('testimonios')) || [];
  testimonios.forEach(agregarTestimonio);
}

// Agregar testimonio al HTML
function agregarTestimonio({ nombre, edad, mensaje }) {
  const div = document.createElement('div');
  div.classList.add('card');
  div.innerHTML = `
    <img src="https://i.pravatar.cc/100?u=${nombre}" alt="Foto de ${nombre}">
    <h4>${nombre}${edad ? `, ${edad} años` : ""}</h4>
    <p>“${mensaje}”</p>
  `;
  lista.prepend(div);
}
