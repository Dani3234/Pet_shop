
window.onload = () => {

const intento = document.getElementById('product')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    alert(intento.textContent)
})
}