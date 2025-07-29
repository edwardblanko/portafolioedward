let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intentos = 0;

function verificarNumero() {
  const input = document.getElementById("input-numero");
  const valor = parseInt(input.value);
  const mensaje = document.getElementById("mensaje");

  if (!valor) {
    alert("Por favor, ingresa un número");
    return;
  }

  intentos++;
  input.value = "";

  if (valor === numeroSecreto) {
    mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intento${intentos > 1 ? "s" : ""}.`;
  } else if (valor < numeroSecreto) {
    mensaje.textContent = "El número secreto es mayor.";
  } else {
    mensaje.textContent = "El número secreto es menor.";
  }
}

function nuevoJuego() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  intentos = 0;
  document.getElementById("mensaje").textContent = "Nuevo juego iniciado.";
}
