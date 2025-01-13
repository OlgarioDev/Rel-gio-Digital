const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


const now = new Date();
const hr = now.getHours();
const body = document.body;
const greeting = document.getElementById('greeting');


    



const relogio = setInterval(function time(){
    let datetoday = new Date();
    let hr = datetoday.getHours();
    let min = datetoday.getMinutes();
    let s = datetoday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (s < 10) s = '0' + s;

    horas.textContent = hr;
    minutos.textContent = min;
    segundos.textContent = s;


    
    
    
   
    
    
    
    
    
    
    



})







if(hr > 0 &&  hr < 12){
greeting.textContent = 'Bom dia';
greeting.style.color = 'white';





}else if(hr > 12 && hr < 18 ){

greeting.textContent = 'Boa tarde';
greeting.style.color = 'white';

}else{
body.style.backgroundColor = ``
greeting.style.color = `white`;

greeting.textContent = 'Boa Noite';

}




