function calcImc() {
    // Obter altura em centímetros e converter para metros
    let altura = document.getElementById("al").value / 100;

    // Obter peso
    let peso = document.getElementById("ps").value;

    // Converter valores para número (float)
    altura = parseFloat(altura);
    peso = parseFloat(peso);

    // Calcular o IMC
    let imc = peso / (altura * altura);

    // Exibir o resultado com 2 casas decimais
    window.alert("Seu IMC é: " + imc.toFixed(2));
}