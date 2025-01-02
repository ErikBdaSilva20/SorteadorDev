// Função para realizar o sorteio
function numberDrawer() {
    const min = Math.ceil(document.querySelector(".input-min").value); // Valor mínimo
    const max = Math.floor(document.querySelector(".input-max").value); // Valor máximo

    // Verificação de valor mínimo maior ou igual ao valor máximo
    if (min >= max) {
        alert("O valor mínimo DEVE ser MENOR que o valor MÁXIMO");
    } else {
        // Sorteio de número aleatório
        const result = Math.floor(Math.random() * (max - min + 1)) + min;
        // Chama a função ChangeText para exibir o número sorteado
        ChangeText(result);
    }
}

// Função para mudar o conteúdo do elemento de resultado
function ChangeText(result) {
    const resultadoH2 = document.querySelector(".resultado");
    const resultadoText = document.getElementById("resultadoText");

    // Atualiza o título com o texto
    resultadoH2.textContent = "Número Sorteado";

    // Atualiza o parágrafo com o número sorteado
    resultadoText.innerHTML = `${result}`;
}

// Adiciona o evento de clique ao botão
window.onload = function() {
    document.getElementById("sortearButton").addEventListener("click", numberDrawer);
};