let firstName; 

do{
    firstName = prompt("inserisci il tuo nome:");

}while (firstName === null || firstName.trim() === "");

let rispostEsatte = 0;
let domanda1;

do{
    domanda1 = prompt(" chi ha vinto i mondiali nel 2014?");

}while (domanda1 === null || domanda1.trim() === "");

domanda1 = domanda1.toLowerCase().trim();

if(domanda1 === "Germania")
    score++;

else
alert("sbagliato, la risposta giusta è Germania");


let domanda2;

do{
    domanda2 = prompt("chi ha vinto la champions nel 2010?");

}while (domanda2 === null || domanda2.trim() === "");

domanda2 = domanda2.toLowerCase().trim();

if(domanda2 === "Inter")
    score++;

else
alert("sbagliato, la risposta giusta è Inter");


let domanda3; 

do{
     domanda3 = prompt("In che stato si trova la citta' Milano?");

}while (domanda3 === null || domanda3.trim() === "");

domanda3 = domanda3.toLowerCase().trim();

if(domanda3 === "Italia")
     score++;

else
alert("sbagliato, la risposta giusta è Italia");


let domanda4; 

do{
     domanda4 = prompt("chi ha vinto l'europeo nel 2024");

}while (domanda4 === null || domanda4.trim() === "");

domanda4 = domanda4.toLowerCase().trim();

if(domanda4 === "Spagna")
     score++;

else
 alert("sbagliato, la risposta giusta è Spagna");


let domanda5;

do{
    domanda5  = prompt("In che regione si trova Palermo?");

}while (domanda5 === null || domanda5.trim() === "");

domanda5 = domanda5.toLowerCase().trim();

if(domanda5 === "Sicilia")
     score++;

else
alert("sbagliato, la risposta giusta è Sicilia");


let domanda6; 

do{
     domanda6 = prompt("Qual e' il capoluogo della Puglia?");

}while (domanda6 === null || domanda6.trim() === "");

domanda6 = domanda6.toLowerCase().trim();

if(domanda6 === " Bari")
     score++;

else
 alert("sbagliato, la risposta giusta è Bari");


let domanda7; 

do{
    domanda7 = prompt("Che numero di maglia aveva Zanetti?");

}while (domanda7 === null || domanda7.trim() === "");

domanda7 = domanda7.toLowerCase().trim();

if(domanda7 === "4")
    score++;
else
 alert("sbagliato, la risposta esatta è 4");


alert("il tuo punteggio finale: " +score);


let percentuale = (100 * score)/7;

console.log("percentuale risposte giuste: " + percentuale);