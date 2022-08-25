const calculadora = document.querySelectorAll('#buttons-container');
const teclasNum = document.querySelectorAll('.numero');
const teclasFuncoes = document.querySelectorAll('.funcoes');
const teclasOperacoes = document.querySelectorAll('.operadores');
const display = document.querySelector('#current-operacoes');
const botaoIgualdade = document.querySelector('#igual-btn');

let resultado=0;
let expressao='';

function clearDisplay(){
    display.innerHTML = "";
}

function showDisplay(val){
    content = display.innerHTML;
    display.innerHTML = content.concat(val);
}

teclasNum.forEach((tecla)=>{
    tecla.addEventListener('click', event => {
        showDisplay(event.target.value);
        expressao+=event.target.value;
    });
});

teclasFuncoes.forEach((tecla)=>{
    tecla.addEventListener('click', event => {
        clearDisplay();
        expressao='';
    });
});

teclasOperacoes.forEach((tecla)=>{
    tecla.addEventListener('click', event => {
        showDisplay(event.target.value);
        expressao+=event.target.value;
    });
});

botaoIgualdade.addEventListener('click', event => {
    clearDisplay();
    resultado = calcular(expressao);
    showDisplay(resultado);
    expressao=resultado;
})

function splitter(mystring, mysplitter) {
    var myreturn = [],
        myindexplusone = mystring.indexOf(mysplitter) + 1;

    if (myindexplusone) {
        myreturn[0] = mystring.split(mysplitter, 1)[0];
        myreturn[1] = mystring.substring(myindexplusone);
    }

    return myreturn;
}

function calcular(expressao){
    debugger
    let operandos;
    if(expressao.includes('+')){
        operandos =  splitter(expressao,'+');
        return calcular(operandos[0])+calcular(operandos[1]);
    }
    if(expressao.includes('-')){
        operandos =  splitter(expressao,'-');
        return calcular(operandos[0])-calcular(operandos[1]);
    }
    if(expressao.includes('/')){
        operandos =  splitter(expressao,'/');
        return calcular(operandos[0])/calcular(operandos[1]);
    }
    if(expressao.includes('*')){
        operandos =  splitter(expressao,'*');
        return calcular(operandos[0])*calcular(operandos[1]);
    }
    return Number(expressao);
}