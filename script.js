document.getElementById("buscar").addEventListener("click", function() {
    let texto = document.getElementById("texto").value;
    let resultadoHTML = "";

    // Verifica se o campo de texto está vazio
    if (texto.trim() === "") {
        resultadoHTML = "Por favor, insira um texto.";
    } else {
        // 1) Buscar a primeira posição de "em"
        let posicaoEm = texto.indexOf("em");

        // 2) Buscar a última posição de "ia"
        let ultimaPosicaoIa = texto.lastIndexOf("ia");

        // 3) Buscar a palavra "ciência"
        let posicaoCiencia = texto.indexOf("ciência");

        // 4) Buscar a palavra "métodos"
        let posicaoMetodos = texto.indexOf("métodos");

        // Formatar os resultados
        resultadoHTML = "1) Primeira posição de 'em': " + posicaoEm + "<br>" +
                        "2) Última posição de 'ia': " + ultimaPosicaoIa + "<br>" +
                        "3) Posição da palavra 'ciência': " + posicaoCiencia + "<br>" +
                        "4) Posição da palavra 'métodos': " + posicaoMetodos;
    }

    // Exibir resultados na página HTML
    document.getElementById("resultado").innerHTML = resultadoHTML;
});