const symbols = "!@#$%^&*()_+-=<>?/|";

function randomSymbol(){
return symbols[Math.floor(Math.random() * symbols.length)];
}

function encrypt(){

let s = document.getElementById("message").value;
let key = parseInt(document.getElementById("key").value);

let res = "";

s = s.split("").reverse().join("");

for(let i=0;i<s.length;i++){

let c = s.charCodeAt(i);
let enc = ((c - 32 + key) % 95) + 32;

res += String.fromCharCode(enc);
res += randomSymbol();

}

document.getElementById("result").value = res;

}

function decrypt(){

let s = document.getElementById("message").value;
let key = parseInt(document.getElementById("key").value);

let res = "";

for(let i=0;i<s.length;i+=2){

let c = s.charCodeAt(i);
let dec = ((c - 32 - key + 95) % 95) + 32;

res += String.fromCharCode(dec);

}

res = res.split("").reverse().join("");

document.getElementById("result").value = res;

}