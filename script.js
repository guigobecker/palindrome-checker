const entrada = document.getElementById('entrada');

function inverterString(str) {
    return str.split('').reverse().join('');
}

function verificarString() {
    const str = entrada.value;
    const inverso = inverterString(str);
    
    str === inverso ? alert('É um palíndromo!') : alert('Não é um palíndromo.');

    entrada.value = '';
}