const h1 = document.querySelector('h1');
const nombreproducto = document.querySelector('.nombreproducto');
const preciodeproducto = document.querySelector('.precio')
const img = document.querySelector('.product-img');
const overlay = document.querySelector('.overlay')

function btnOnClick(){
overlay.setAttribute('style','display:block')
}

console.log({
        h1,
        nombreproducto,
        preciodeproducto,            
    });
    
    h1.innerHTML = 'Hola de Nuevo';