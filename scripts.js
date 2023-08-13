function calcular() {
    const n1 = parseFloat(document.getElementById('n1').value) || 0;
    const n2 = parseFloat(document.getElementById('n2').value) || 0;
    const n3 = parseFloat(document.getElementById('n3').value) || 0;
    const n4 = parseFloat(document.getElementById('n4').value) || 0;
    const media = (n1+n2+n3+n4) / 4;
    const final = 12 - media

    //Verificação para o input aceitar só números entre 0 e 10
    if (n1 < 0 || n1 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
    }
    if (n2 < 0 || n2 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
    }
    if (n3 < 0 || n3 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
    }
    if (n4 < 0 || n4 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
    }


    //Situação
    if (media >= 7) {
        document.getElementById('resultado').innerHTML = 'Parabéns, você está APROVADO(A)!'
    }
    if (media < 7) {
        document.getElementById('resultado').innerHTML = `Você está de RECUPERAÇÃO FINAL, e precisa tirar ${final} para poder passar de ano.`
    }
    if (final > 10) {
        document.getElementById('resultado').innerHTML = `Você está REPROVADO(A), sua media foi muito baixa.`
    }

    //Tabela de notas e a Média
    document.getElementById('nota1').textContent = n1;
    document.getElementById('nota2').textContent = n2;
    document.getElementById('nota3').textContent = n3;
    document.getElementById('nota4').textContent = n4;
    document.getElementById('media').textContent = media;
    //Verificação para o input aceitar só números entre 0 e 10
    if (n1 < 0 || n1 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
        document.getElementById('nota1').textContent = 0;
        document.getElementById('nota2').textContent = 0;
        document.getElementById('nota3').textContent = 0;
        document.getElementById('nota4').textContent = 0;
        document.getElementById('media').textContent = 0;
    }
    if (n2 < 0 || n2 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
        document.getElementById('nota1').textContent = 0;
        document.getElementById('nota2').textContent = 0;
        document.getElementById('nota3').textContent = 0;
        document.getElementById('nota4').textContent = 0;
        document.getElementById('media').textContent = 0;        
    }
    if (n3 < 0 || n3 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
        document.getElementById('nota1').textContent = 0;
        document.getElementById('nota2').textContent = 0;
        document.getElementById('nota3').textContent = 0;
        document.getElementById('nota4').textContent = 0;
        document.getElementById('media').textContent = 0;
    }
    if (n4 < 0 || n4 > 10) {
        document.getElementById('resultado').innerHTML = 'ERRO! Digite apenas números entre 0 e 10.'
        document.getElementById('nota1').textContent = 0;
        document.getElementById('nota2').textContent = 0;
        document.getElementById('nota3').textContent = 0;
        document.getElementById('nota4').textContent = 0;
        document.getElementById('media').textContent = 0;
    }

}