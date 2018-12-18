// ej 8
// Crea un bucle  que imprima por consola números del 1 al 100
// pero que los múltiplos de 3 imprima GEEKS en lugar del numero
// y los múltiplos de 5 imprima HUBS.
// Además los múltiplos de 3 y 5 ha de imprimir GEEKSHUBS

for (let index = 1; index <= 100; index++) {
    
    if(index%3===0 && index%5===0){
        console.log('GEEKSHUBS');
    }else if(index%3===0){
        console.log('GEEKS');
    }else if(index%5===0){
        console.log('HUBS');
    }else{
        console.log(index);
    }
}