const btnOn = document.getElementById('btnOn');
const btnOff = document.getElementById('btnOff');
const lamp = document.getElementById('lamp');


function isLampBroken(){
    return lamp.src.indexOf ('LQuebrada') > -1
}


function lampAcesa(){
    if (!isLampBroken()){
        lamp.src="LAcesa.png";
    }
}
function lampApagada(){
    if (!isLampBroken()){
        lamp.src='LApagada.png'
    }
}
function lampBroken(){
        lamp.src='LQuebrada.png'
}



btnOn.addEventListener('click', lampAcesa);
lamp.addEventListener('mouseover', lampAcesa);

btnOff.addEventListener('click', lampApagada);
lamp.addEventListener('mouseleave', lampApagada);

lamp.addEventListener('dblclick', lampBroken)