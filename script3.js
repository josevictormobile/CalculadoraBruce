const calculadora = document.querySelectorAll('#buttons-container');
const teclasNum = document.querySelectorAll('.numero');
const teclasFuncoes = document.querySelectorAll('.funcoes');
const teclasOperacoes = document.querySelectorAll('.operadores');
const display = document.querySelector('#current-operacoes');
const igual = document.querySelector('#igual-btn')
let expressao = ""
let resultado;

function clearDisplay(){
  display.innerHTML = "";
}

function showDisplay(val){
  content = display.innerHTML
  display.innerHTML = content.concat(val);
}

teclasNum.forEach((tecla)=>{
  tecla.addEventListener('click', event => {
      showDisplay(event.target.value);
      expressao+=event.target.value;
  });
});

// teclasFuncoes.forEach((tecla)=>{
//   tecla.addEventListener('click', event => {
//       showDisplay(event.target.value);
//       expressao+=event.target.value;
//   });
// });

teclasOperacoes.forEach((tecla)=>{
  tecla.addEventListener('click', event => {
      showDisplay(event.target.value);
      expressao+=event.target.value;
  });
});

igual.addEventListener('click', event =>{
  debugger
  clearDisplay();
  resultado = calcular(expressao);
  showDisplay(resultado);
  expressao = resultado;
} )

function splitter(mystring, mysplitter) {
  var myreturn = [],
      myindexplusone = mystring.indexOf(mysplitter) + 1;

  if (myindexplusone) {
      myreturn[0] = mystring.split(mysplitter, 1)[0];
      myreturn[1] = mystring.substring(myindexplusone);
  }

  return myreturn;
}

function limpar(){
  debugger
  clearDisplay();
  expressao = "";
}

function limparEntrada(){
  for(let i = expressao.length; i >=0; i--){
    if(expressao[i] == "+" || expressao[i] == "-" || expressao[i] == "/" || expressao[i] == "*"){
      expressao = expressao.substring(i-1);
      display.innerHTML = expressao
    }
  }
}

function calcular(expressao){
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