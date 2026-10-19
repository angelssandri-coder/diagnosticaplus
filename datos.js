// Datos del centro: edita SOLO este archivo y se actualiza toda la web.
// Un campo vacío ("") se oculta automáticamente en la web.
// WhatsApp con código de país y sin "+" ni espacios (Perú = 51).
window.DIAGNOSTICA = {
  whatsapp: "51973558709",
  telefonoVisible: "+51 973 558 709",
  correo: "",
  direccion: "Jr. Loreto N.° 205, frente a la Plaza Bolognesi",
  ciudad: "Juliaca, Puno",
  mapa: "https://www.google.com/maps/search/?api=1&query=Jr.+Loreto+205+Juliaca",
  horario: [["Atención", "8:00 a. m. – 6:00 p. m."]],
  razonSocial: "Diagnóstica PLUS",
  ruc: "",
  actualizado: "18 de octubre de 2026",
};

document.addEventListener("DOMContentLoaded", () => {
  const d = window.DIAGNOSTICA;
  const mensaje = encodeURIComponent("Hola, quisiera información sobre sus servicios.");
  document.querySelectorAll("[data-whatsapp]").forEach((a) => {
    const texto = a.dataset.whatsapp ? encodeURIComponent(a.dataset.whatsapp) : mensaje;
    a.href = `https://wa.me/${d.whatsapp}?text=${texto}`;
  });
  document.querySelectorAll("[data-dato]").forEach((el) => {
    const valor = d[el.dataset.dato];
    if (typeof valor === "string") el.textContent = valor;
  });
  document.querySelectorAll("[data-enlace]").forEach((a) => {
    const k = a.dataset.enlace;
    a.href = k === "correo" ? `mailto:${d.correo}` : k === "telefono" ? `tel:+${d.whatsapp}` : d[k];
  });
  // Oculta bloques cuyo dato aún no se ha completado
  document.querySelectorAll("[data-si]").forEach((el) => {
    if (!d[el.dataset.si]) el.hidden = true;
  });
  document.querySelectorAll("[data-horario]").forEach((dl) => {
    dl.innerHTML = d.horario.map(([dia, h]) => `<div><dt>${dia}</dt><dd>${h}</dd></div>`).join("");
  });
  document.querySelectorAll("[data-anio]").forEach((el) => (el.textContent = new Date().getFullYear()));
});
