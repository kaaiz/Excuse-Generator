let who = ['the dog', 'my granma', 'his turtle', 'my bird'];
let what = ['eat', 'pissed', 'crushed', 'broked'];
let when = ['before the class', 'right in time', 'when I finished', 'during my lunch', 'while I was praying'];
let evitar = ['my car', 'my home', 'my cellphone', 'my backpack', 'my guitar'];

var valor0 = who[Math.floor(Math.random() * who.length)] + " ";
var valor1 = what[Math.floor(Math.random() * what.length)] + " ";
var valor2 = when[Math.floor(Math.random() * when.length)] + " ";
var valor3 = evitar[Math.floor(Math.random() * evitar.length)] + " ";


let elemento = document.getElementById("excuse");
let frase = valor0.concat(valor1, valor2, valor3);

elemento.innerHTML = frase;