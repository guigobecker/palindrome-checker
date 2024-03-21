const entrada = document.getElementById('entrada');
const alerta = document.getElementById('alerta');
const mensagem = document.getElementById('mensagem');

function mostrarAlerta(bool){
    if(bool) {
        mensagem.innerText = 'É um palíndromo!';
        alerta.classList.add('sim');
        alerta.classList.remove('escondido');
        alerta.classList.add('visivel');

    } else {
        mensagem.innerText = 'Não é um palíndromo.';
        alerta.classList.add('nao');
        alerta.classList.remove('escondido');
        alerta.classList.add('visivel');
    }

    setTimeout(function() {
        alerta.classList.add('escondido');
        alerta.classList.remove('visivel');
        alerta.classList.remove('sim');
        alerta.classList.remove('nao');
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