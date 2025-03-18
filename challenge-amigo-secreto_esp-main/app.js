document.addEventListener("DOMContentLoaded", function() {
    const nombres = [];
    const input = document.getElementById("amigo");
    const lista = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");

    document.querySelector(".button-add").addEventListener("click", agregarNombre);
    document.querySelector(".button-draw").addEventListener("click", sortearAmigo);

    function agregarNombre() {
        const nombre = input.value.trim();
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }
        if (nombres.includes(nombre)) {
            alert("Este nombre ya ha sido ingresado. Por favor, agrégale un apellido o una diferencia.");
            return;
        }
        nombres.push(nombre);
        input.value = "";
        actualizarLista();
    }

    function actualizarLista() {
        lista.innerHTML = "";
        nombres.forEach(nombre => {
            const li = document.createElement("li");
            li.textContent = nombre;
            lista.appendChild(li);
        });
    }

    function sortearAmigo() {
        if (nombres.length < 2) {
            alert("Debe haber al menos dos participantes para el sorteo.");
            return;
        }
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        resultado.textContent = `El amigo secreto es: ${nombres[indiceAleatorio]}`;
    }
});
