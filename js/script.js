// JSNACK BLOCCO 1

// //JSNACK 1
// var numeroUno = parseInt(prompt('Inserisci un numero:'));
// var numeroDue = parseInt(prompt('Inserisci un numero:'));
// while (isNaN(numeroUno) || isNaN(numeroDue)) {
//   var numeroUno = parseInt(prompt('Inserisci un numero:'));
//   var numeroDue = parseInt(prompt('Inserisci un numero:'));
// }
// var risposta = 'Numeri uguali';
// if (numeroUno > numeroDue) {
//   risposta = numeroUno;
// } else if (numeroDue > numeroUno) {
//     risposta = numeroDue;
// }
// document.getElementById('risposta').innerHTML = risposta;

// //JSNACK 2
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


// JSNACK 3
//versione  col for
 // var somma = 0;
 // for (var i = 0; i < 5; i++) {
 //   var numero = parseInt(prompt('Inserisci un numero:'))
 //   somma += numero;
 // }
 // document.getElementById('risposta').innerHTML = somma;

//versione col while
// var somma = 0;
// var i = 0;
// while (i != 5 ) {
//   var numero = parseInt(prompt('Inserisci un numero:'))
//   if (!(isNaN(numero))) {
//     somma += numero;
//     i++;
//   }
// }
//   document.getElementById('risposta').innerHTML = somma;
//



//JSNACK 4
// var lista = ['Ernesto','Pippo','Rossi','Esposito'];
// var nome = prompt('Inserisci il tuo nome:');
// var presente = false;
// var i = 0;
// while (presente == false && i < lista.length) {
//   if (nome == lista[i]) {
//     presente = true;
//   }
//   i++;
// }
// if (presente) {
//   document.getElementById('risposta').innerHTML = 'Puoi partecipare';
// } else {
//   document.getElementById('risposta').innerHTML = 'Non puoi partecipare';
// }


//JSNACK 5
// var numero = prompt('Inserisci un numero di 4 cifre');
// console.log(isNaN(numero));
// numero = numero.trim();
// var somma = 0;
// while (numero.length != 4 || isNaN(numero)) {
//   numero = prompt('Inserisci un numero di 4 cifre');
//   console.log(isNaN(numero));
//
//   numero = numero.trim();
// }
// for (var i = 0; i < numero.length; i++) {
//   somma += parseInt(numero[i]);
// }
// document.getElementById('risposta').innerHTML = somma;








//JSNACK BLOCCO 2

// //JSNACK 1
// var numero = prompt('Inserisci un numero:');
// for (var i = 0; i < numero; i++) {
//   var arrayGenerato = genera();
//   console.log(arrayGenerato);
// }
//
//
// function genera(){
//  var array = [];
//  for (var i = 0; i < 10; i++) {
//    array.push(Math.floor(Math.random() * 100 ) +1);
//  }
//  return array;
// }



// //JSNACK 2
// var nomi = ['Luca', 'Alessandro', 'Marco', 'Davide', 'Mario'];
// var cognomi = ['Rossi', 'Verdi', 'Caputo','Tonali','Ronaldo'];
// console.log(nomi.length,cognomi.length);
// var nomiCognomi = [];
// for (var i = 0; i < nomi.length; i++) {
//   var x = casuale(0, nomi.length);
//   var y = casuale(0, cognomi.length);
//   console.log(x,y);
//   nomiCognomi[i] = nomi[x] + ' ' + cognomi[y];
// }
// console.log(nomiCognomi);
//
// function casuale (min,max){
//   return Math.floor(Math.random()*(max-min)) + min;
// }


//JSNACK 3
var arrayUno = [1,2,3];
var arrayDue = [1,2,3,4,5,6];

var arrayUnoLunghezza = arrayUno.length;
var arrayDueLunghezza = arrayDue.length;
if (arrayUnoLunghezza < arrayDueLunghezza) {
  insert(arrayUno,arrayDueLunghezza)
} else {
  insert(arrayDue,arrayUnoLunghezza)

}
console.log(arrayUno);
console.log(arrayDue);

function casuale (min,max){
  return Math.floor(Math.random()*(max - min + 1)) + min;
}
function insert(array,lunghezza){
  while (array.length<lunghezza){
    array.push(casuale(0,100))
  }
}

// //JSNACK 4
// var array = [1,2,3,4,5,6,7,8,9,10];
// var elementoVerde = document.getElementById('verde');
// elementoVerde.style.color = 'green';
// var elementoRosso = document.getElementById('rosso');
// elementoRosso.style.color = 'red';
// for (var i = 0; i < array.length; i++) {
//   if (array[i] % 2 ==0) {
//     elementoRosso.innerHTML += array[i] + ' ';
//   }else {
//     elementoVerde.innerHTML += array[i] + ' ';
//   }
// }
