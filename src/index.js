import cipher from './cipher.js';

document.getElementById("Encode").addEventListener("click",cifrar);
function cifrar(event){
    event.preventDefault();
    let offset= Number(document.getElementById("position").value);
    let string= document.getElementById("menssagesend").value.toUpperCase();
    document.getElementById("answer").innerHTML= cipher.encode(offset,string);
    //console.log(cipher.encode(offset,string));
}

document.getElementById("Decode").addEventListener("click",decifrar);
function decifrar(event){
    event.preventDefault();
    let offset= Number(document.getElementById("position").value);
    let string= document.getElementById("menssagesend").value.toUpperCase();
    document.getElementById("answer").innerHTML=cipher.decode(offset,string);

}