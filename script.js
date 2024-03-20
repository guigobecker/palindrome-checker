const entrada = document.getElementById('entrada');
const alerta = document.getElementById('alerta');

function mostrarAlerta(bool){
    if(bool) {
        alerta.classList.add('sim');
        alerta.classList.remove('escondido');
        alerta.classList.add('visivel');

    } else {
        alerta.classList.add('nao');
        alerta.classList.remove('escondido');
        alerta.classList.add('visivel');
    }

    setTimeout(function() {
        alerta.classList.add('escondido');
        alerta.classList.remove('visivel');
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