function calcular(){
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
    let resultado;
    switch(operacion) {/*para q se diga q sucede si selecciona algo*/
        case "+":
            resultado = num1 + num2;
            break;
        case"-":
        resultado = num1 - num2;
            break;
        case"*":
        resultado = num1 * num2;
            break;
        case"/":
        resultado = num1 / num2;
            break;
        default:
            resultado = "Operación no válida";
        
    }
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}