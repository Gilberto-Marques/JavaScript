var hAgora = new Date();
var mAgora = new Date();
var hora = hAgora.getHours();
var minuto = mAgora.getMinutes();
console.log(`Agora são exatamente: ${hora}:${minuto}.`);
if(hora <12){
    console.log('Bom dia!');
}else if(hora <=18){
    console.log('Boa tarde!');
}else{
    console.log('Boa noite!');
}
//CONDIÇÃO ANINHADA!