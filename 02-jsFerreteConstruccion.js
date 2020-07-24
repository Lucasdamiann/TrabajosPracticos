/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    
    largo=parseInt(txtIdLargo.value);
    ancho=parseInt(txtIdAncho.value);
    alert("son "+(largo*2+ancho*2)*3+ "m de alambre");

}
function Circulo () 
{
    let radio;
    let resultado;
    radio=parseInt(txtIdRadio.value);
    resultado=(2*Math.PI*radio)*3
    alert("La cantidadd de alambre necesaria para alambrar todo el terreno es: " + resultado.toFixed(2)+ "m");
    
}
function Materiales () 
{
	let largo;
    let ancho;
    let cemento;
    let cal;
    largo=parseInt(txtIdLargo.value);
    ancho=parseInt(txtIdAncho.value);
    cemento=(largo*ancho)*2
    cal=(largo*ancho)*3
    
    alert("son "+ cemento + " bolsas de cemento " + "y " + cal + " bolsas de cal");
}