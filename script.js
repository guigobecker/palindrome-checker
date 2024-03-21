const entrada = document.getElementById('entrada');
const alerta = document.getElementById('alerta');
const mensagem = document.getElementById('mensagem');

function mostrarAlerta(bool){
    if(bool) {
        mensagem.innerText = 'Sua palavra é um palíndromo!';
        alerta.classList.add('sim');
        alerta.classList.remove('escondido');
        alerta.classList.add('visivel');

    } else {
        mensagem.innerText = 'Sua palavra não é um palíndromo.';
        alerta.classList.add('nao');
        alerta.classList.remove('escondido');
        alerta.classList.add('visivel');
    }

    setTimeout(function() {
        alerta.classList.add('escondido');
        alerta.classList.remove('visivel');
        mensagem.innerText = ''
    }, 3000)
}

function inverterString(str) {
    return str.split('').reverse().join('');
}

function verificarString() {
    const str = entrada.value;
    const inverso = inverterString(str);
    
    str === inverso ? mostrarAlerta(true) : mostrarAlerta(false);

    entrada.value = '';
}