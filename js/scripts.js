function calcular() {
    var n1 = parseFloat(document.getElementById('n1').value) || 0;
    var n2 = parseFloat(document.getElementById('n2').value) || 0;
    var n3 = parseFloat(document.getElementById('n3').value) || 0;
    var n4 = parseFloat(document.getElementById('n4').value) || 0;
    var totalNotas = n1 + n2 + n3 + n4;
    var md = (n1 + n2 + n3 + n4) / 4;

    //Tabela de notas e a Média
    document.getElementById('nota1').textContent = n1;
    document.getElementById('nota2').textContent = n2;
    document.getElementById('nota3').textContent = n3;
    document.getElementById('nota4').textContent = n4;
    document.getElementById('media').textContent = md;

    //Verificação para o input aceitar só números entre 0 e 10
    if (isNaN(n1) || isNaN(n2) || isNaN(n3) || isNaN(n4) ||
        n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10 ||
        n3 < 0 || n3 > 10 || n4 < 0 || n4 > 10) {
        alert('Por favor, insira notas válidas entre 0 e 10.');
        document.getElementById('nota1').textContent = '';
        document.getElementById('nota2').textContent = '';
        document.getElementById('nota3').textContent = '';
        document.getElementById('nota4').textContent = '';
        document.getElementById('media').textContent = '';
        return;
    }
    if (totalNotas === 0) {
        alert('Por favor, insira pelo menos uma nota.');
        return;
    }

    // Verificando quantas notas foram fornecidas pelo usuário
    var notasNaoDigitadas = 4 - (n1 ? 1 : 0) - (n2 ? 1 : 0) - (n3 ? 1 : 0) - (n4 ? 1 : 0);

    // Situação
    if (notasNaoDigitadas > 0) {
        var notasFaltando = (28 - totalNotas) / notasNaoDigitadas;
        if (notasFaltando > 10) {
            var provaFinal = 12 - media;
            document.getElementById('resultado').innerHTML = "Você já esta de recuperação final! Sua média está muito baixa.<br>";
        } else {
            document.getElementById('resultado').innerHTML = 'Você precisa obter ' + notasFaltando.toFixed(2) + ' nas notas faltantes para atingir a soma total de 28.';
        }
    } else {
        var media = totalNotas / 4;

        if (media < 2) {
            document.getElementById('resultado').innerHTML = "Você já está reprovado!!"
            return;
        }

        if (media < 7) {
            var provaFinal = 12 - media;
            document.getElementById('resultado').innerHTML = 'Média: ' + media.toFixed(2) + '<br>' +
                'Você precisa obter ' + provaFinal.toFixed(2) + ' na prova final para ser aprovado.';
        } else {
            document.getElementById('resultado').innerHTML = 'Média: ' + media.toFixed(2) + '<br>' +
                'Parabéns! Você foi aprovado.';
        }
    }
}