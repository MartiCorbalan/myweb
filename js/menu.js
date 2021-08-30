const hamburguer = document.querySelector('.hamburguer');
const menu = document.querySelector('.menu-navegacion');

console.log(menu)
console.log(hamburguer)

hamburguer.addEventListener('click', () => {
    menu.classList.toggle("spread")
})


/*todo lo que sea click que no sea menu o hamburguer pero tmb tenga la clase spread se ejecute*/
window.addEventListener('click', e => {
    if (menu.classList.contains('spread') && e.target != menu && e.target != hamburguer) {

        menu.classList.toggle("spread")
    }

})