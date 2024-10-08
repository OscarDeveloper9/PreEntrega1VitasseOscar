/* Programa que pide dos números y nos dice cual es mayor, cual es menor o si son iguales (IF) 
Pero si los números no son números o son menores a 0 nos los vuelve a pedir (WHILE) */
let numero1 = parseInt(prompt('introduce el primer número'));
let numero2 = parseInt(prompt('introduce el segundo número'));

while(numero1<=0 || numero2<=0 || isNaN(numero1) || isNaN(numero2) ){
    numero1 = parseInt(prompt('introduce el primer número'));
    numero2 = parseInt(prompt('introduce el segundo número'));
}

if(numero1 == numero2){
    alert('Los numeros son iguales');
}else if(numero1 > numero2){
    alert('El número mayor es: ' + numero1);
    alert('El número menor es: ' + numero2);
}else if(numero2 > numero1){
    alert('El número mayor es: ' + numero2);
    alert('El número menor es: ' + numero1);
}else{
    alert('Introduce números correctos');
}