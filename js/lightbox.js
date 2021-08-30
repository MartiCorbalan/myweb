/*todos los elementos que tengan la clase img-galeria, agregar-imagen y imagen-light*/
const imagenes = document.querySelectorAll('.img-galeria')
const imagenesLight = document.querySelector('.agregar-imagen')
const contenedorLight = document.querySelector('.imagen-light')
const hamburguer1 = document.querySelector('.hamburguer');

console.log(imagenes)
console.log(imagenesLight)
console.log(contenedorLight)

imagenes.forEach(imagen => {

    imagen.addEventListener('click', () => {

        aparecerImagen(imagen.getAttribute('src'))
    })
})

/*click a cualquier cosa menos a imagenesLight e va a cerrar el lightbox* */
contenedorLight.addEventListener('click', (e) => {
    if (e !== imagenesLight) {
        contenedorLight.classList.toggle('show')
        imagenesLight.classList.toggle('showImage')
        hamburguer1.style.opacity = '1'
    }
})

const aparecerImagen = (imagen) => {

    imagenesLight.src = imagen;
    contenedorLight.classList.toggle('show')
    imagenesLight.classList.toggle('showImage')
    hamburguer1.style.opacity = '0'
}