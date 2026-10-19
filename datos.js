// Datos del centro: edita SOLO este archivo y se actualiza toda la web.
// WhatsApp con código de país y sin "+" ni espacios (Perú = 51).
window.DIAGNOSTICA = {
  whatsapp: "51900000000",
  telefonoVisible: "+51 900 000 000",
  correo: "contacto@diagnosticaplus.pe",
  direccion: "Av. Por confirmar 123",
  ciudad: "Lima, Perú",
  mapa: "https://maps.google.com/?q=Diagn%C3%B3stica+PLUS",
  horario: [
    ["Lunes a viernes", "7:00 a. m. – 8:00 p. m."],
    ["Sábados", "7:00 a. m. – 1:00 p. m."],
  ],
  razonSocial: "Diagnóstica PLUS",
  ruc: "Por confirmar",
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
  document.querySelectorAll("[data-horario]").forEach((dl) => {
    dl.innerHTML = d.horario.map(([dia, h]) => `<div><dt>${dia}</dt><dd>${h}</dd></div>`).join("");
  });
  document.querySelectorAll("[data-anio]").forEach((el) => (el.textContent = new Date().getFullYear()));
});
