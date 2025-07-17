<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <style>
      input[type="number"] {
        width: 60px;
        margin: 5px;
      }
    </style>
  </head>
  <body>
    <h2>Ticket de Cenaduría</h2>

    <label>Platillo 1: $<input type="number" id="p1" value="0"></label><br>
    <label>Platillo 2: $<input type="number" id="p2" value="0"></label><br>
    <label>Platillo 3: $<input type="number" id="p3" value="0"></label><br><br>

    <button onclick="calcularTotal()">Calcular total</button>
    <button onclick="guardarTicket()">Guardar ticket</button><br><br>

    <strong>Total: $<span id="total">0</span></strong>

    <script>
      function calcularTotal() {
        const p1 = parseFloat(document.getElementById("p1").value) || 0;
        const p2 = parseFloat(document.getElementById("p2").value) || 0;
        const p3 = parseFloat(document.getElementById("p3").value) || 0;

        const total = p1 + p2 + p3;
        document.getElementById("total").textContent = total.toFixed(2);
      }

      function guardarTicket() {
        const total = document.getElementById('total').textContent;

        google.script.run
          .withSuccessHandler(() => alert("✅ Ticket guardado correctamente"))
          .withFailureHandler((error) => alert("❌ Error al guardar: " + error.message))
          .guardarEnHoja({ total });
      }
    </script>
  </body>
</html>
