let numeroSecreto = Math.floor(Math.random() * 100) + 1; 
let intentos = 0; 

function adivinar() {
    let intento = document.getElementById("numero").value;
    intentos++;/*para si no pasa uno sea lo otro, en pocas palabras condiciona que pasa si esta lejs o cerca*/
    if (intento == numeroSecreto) {
        document.getElementById("resultado").innerText = "¡Correcto Adivinaste en " + intentos + " intentos.";
    }else if (intento < numeroSecreto) {
        document.getElementById("resultado").innerText = "El número es mayor. Inténtalo de nuevo.";
    } else {
        document.getElementById("resultado").innerText = "El número es menor. Inténtalo de nuevo.";
    }
}