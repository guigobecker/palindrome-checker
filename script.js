const entrada = document.getElementById('entrada');

function inverterString(str) {
    return str.split('').reverse().join('');
}

function verificarString() {
    const str = entrada.value;
    const inverso = inverterString(str);
    alert(inverso);
}