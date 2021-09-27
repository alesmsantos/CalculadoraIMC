function calcularImc() {
    let peso = document.getElementById("peso").value
    let altura = document.getElementById("altura").value
    let resultadoImc = document.getElementById("resultadoImc")
    
    let imc = peso / Math.pow(altura, 2)
    let imcFormatado = imc.toFixed(2)
    
    if (imc < 18.5) {
        resultadoImc.innerHTML = "Você está abaixo do peso: " + imcFormatado
    } else if (imc >= 18.5 && imc <= 24.9) {
        resultadoImc.innerHTML = "Você está com peso normal: " + imcFormatado
    } else if (imc >= 25 && imc <= 29.9) {
        resultadoImc.innerHTML = "Você está com sobrepeso: " + imcFormatado
    } else if (imc >= 30 && imc <= 34.9) {
        resultadoImc.innerHTML = "Você está com obesidade grau I: " + imcFormatado
    } else if (imc >= 35 && imc <= 39.9) {
        resultadoImc.innerHTML = "Você está com obesidade grau II: " + imcFormatado
    } else {
        resultadoImc.innerHTML = "Você está com obesidade grau III ou mórbida: " + imcFormatado
    }
}