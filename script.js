function generarFolio() {
  const now = new Date();
  return 'F' + now.getFullYear() +
         (now.getMonth() + 1).toString().padStart(2, '0') +
         now.getDate().toString().padStart(2, '0') +
         now.getHours().toString().padStart(2, '0') +
         now.getMinutes().toString().padStart(2, '0') +
         now.getSeconds().toString().padStart(2, '0');
}

let ultimoTicket = '';

function calcular() {
const productos = [
    { nombre: "Pozole Gde", precio: 70, cantidad: parseInt(document.getElementById("pozole_gde").value) || 0 },
    { nombre: "Pozole litro", precio: 50, cantidad: parseInt(document.getElementById("pozole_ltr").value) || 0 },  
    { nombre: "Pozole Chico", precio: 50, cantidad: parseInt(document.getElementById("pozole_chico").value) || 0 },
    { nombre: "Quesadilla con carne", precio: 40, cantidad: parseInt(document.getElementById("quesa_con").value) || 0 },
    { nombre: "Quesadilla sin carne", precio: 30, cantidad: parseInt(document.getElementById("quesa_sin").value) || 0 },  
    { nombre: "Sopes con carne", precio: 20, cantidad: parseInt(document.getElementById("sopes_con").value) || 0 },
    { nombre: "Sopes sin carne", precio: 15, cantidad: parseInt(document.getElementById("sopes_sin").value) || 0 },  
   { nombre: "Tacos dorados con carne", precio: 15, cantidad: parseInt(document.getElementById("tacos_dor_con").value) || 0 },
   { nombre: "Tacos dorados sin carne", precio: 12, cantidad: parseInt(document.getElementById("tacos_dor_sin").value) || 0 },
    { nombre: "Aguas frescas", precio: 15, cantidad: parseInt(document.getElementById("aguas").value) || 0 },
    { nombre: "Refresco", precio: 20, cantidad: parseInt(document.getElementById("soda").value) || 0 },
    { nombre: "Gelatina", precio: 10, cantidad: parseInt(document.getElementById("gela").value) || 0 },
  ];



  let total = 0;
  const folio = generarFolio();
  const fecha = new Date().toLocaleString('es-MX');

  let ticket = `===== TICKET DE CENADURÍA =====\nFolio: ${folio}\nFecha: ${fecha}\n\n`;

  productos.forEach(p => {
    if (p.cantidad > 0) {
      let subtotal = p.precio * p.cantidad;
      total += subtotal;
      ticket += `${p.nombre} (${p.cantidad} x $${p.precio}): $${subtotal}\n`;
    }
  });

  ticket += "------------------------------\n";
  ticket += `TOTAL: $${total.toFixed(2)} MXN\n`;
  ticket += "Gracias por su compra.";

  document.getElementById("total").textContent = total.toFixed(2);
  document.getElementById("ticket").textContent = ticket;
  ultimoTicket = ticket;
}

function guardarTicket() {
  if (!ultimoTicket) {
    alert("Primero genera un ticket.");
    return;
  }
  const blob = new Blob([ultimoTicket], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  const folio = generarFolio();
  link.download = `ticket_${folio}.txt`;
  link.click();
  URL.revokeObjectURL(url);
}
function limpiarCampos() {
  const inputs = document.querySelectorAll('input[type="number"]');
  inputs.forEach(input => input.value = '');

  document.getElementById("total").textContent = "0.00";
  document.getElementById("ticket").textContent = "";
  ultimoTicket = "";

  document.getElementById("pozole_gde").focus();
}