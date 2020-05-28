//JSNACK 1
var numeroUno = parseInt(prompt('Inserisci un numero:'));
var numeroDue = parseInt(prompt('Inserisci un numero:'));
while (isNaN(numeroUno) || isNaN(numeroDue)) {
  var numeroUno = parseInt(prompt('Inserisci un numero:'));
  var numeroDue = parseInt(prompt('Inserisci un numero:'));
}
var risposta = 'Numeri uguali';
if (numeroUno > numeroDue) {
  risposta = numeroUno;
} else if (numeroDue > numeroUno) {
    risposta = numeroDue;
}
document.getElementById('risposta').innerHTML = risposta;

//JSNACK 2
// //chiedo all'utente due parole
// var parolaUno = prompt('Inserisci la prima parola:');
// var parolaDue = prompt('Inserisci la seconda parola:');
//
// //controllo la lunghezza e stampo
// if (parolaUno.length == parolaDue.length ) {
//   document.getElementById('risposta').innerHTML = 'Le parole hanno lunghezza uguale';
// } else if (parolaUno.length > parolaDue.length) {
//   document.getElementById('risposta').innerHTML = parolaDue + ' ' + parolaUno;
// } else {
//   document.getElementById('risposta').innerHTML = parolaUno + ' ' + parolaDue;
// }


//JSNACK 3
// //versione  col for
//  var lista = [];
//  var somma = 0;
//  for (var i = 0; i < 5; i++) {
//    var numero = parseInt(prompt('Inserisci un numero:'))
//    lista.push(numero);
//    somma += numero;
//  }
//  document.getElementById('risposta').innerHTML = somma;

// //versione col while
// var lista = [];
// var somma = 0;
// var i = 0;
// while (i != 5 ) {
//   var numero = parseInt(prompt('Inserisci un numero:'))
//   lista.push(numero);
//   somma += numero;
//   i++;
// }
// if (isNaN(somma)) {
//   document.getElementById('risposta').innerHTML = 'FOVA';
//
// }else {
//   document.getElementById('risposta').innerHTML = somma;
//
// }



//JSNACK 4
// var lista = ['Ernesto','Pippo','Rossi','Esposito'];
// var nome = prompt('Inserisci il tuo nome:');
// var presente = false;
// for (var i = 0; i < lista.length; i++) {
//   if (nome == lista[i]) {
//     presente = true;
//   }
// }
// if (presente) {
//   document.getElementById('risposta').innerHTML = 'Puoi partecipare';
// } else {
//   document.getElementById('risposta').innerHTML = 'Non puoi partecipare';
// }


//JSNACK 5
// var numero = prompt('Inserisci un numero');
// var somma = 0;
// while (numero.length != 4 || isNaN(numero)) {
//   numero = prompt('Inserisci un numero');
// }
// numero = numero.split('');
// for (var i = 0; i < numero.length; i++) {
//   somma += parseInt(numero[i]);
// }
// document.getElementById('risposta').innerHTML = somma;
