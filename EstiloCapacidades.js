const modoEscuroToggle = document.getElementById('modoEscuroToggle')
const body = document.body
const header = document.getElementById("cabecario")
const titulo = document.getElementById("h1")
const barra = document.getElementById("barra")
const atual = document.getElementById("atual")
const pag = document.getElementById("pag")
const pag2 = document.getElementById("pag2")
const corpo = document.getElementById("corpo")
const habilidades = document.getElementById("habilidades")
const capacidade1 = document.getElementById("capacidade")
const capacidade2 = document.getElementById("capacidade2")
const capacidade3 = document.getElementById("capacidade3")
const capacidade4 = document.getElementById("capacidade4")
const capacidade5 = document.getElementById("capacidade5")
const capacidade6 = document.getElementById("capacidade6")
const capacidade7 = document.getElementById("capacidade7")
const capacidade8 = document.getElementById("capacidade8")
const capacidade9 = document.getElementById("capacidade9")
const rodape = document.getElementById("rodape")
const direito = document.getElementById("direitos")

modoEscuroToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode')
    titulo.classList.toggle('dark-mode')
    barra.classList.toggle('dark-mode')
    atual.classList.toggle('dark-mode')
    pag.classList.toggle('dark-mode')
    pag2.classList.toggle('dark-mode')
    corpo.classList.toggle('dark-mode')
    habilidades.classList.toggle('dark-mode')
    capacidade1.classList.toggle('dark-mode')
    capacidade2.classList.toggle('dark-mode')
    capacidade3.classList.toggle('dark-mode')
    capacidade4.classList.toggle('dark-mode')
    capacidade5.classList.toggle('dark-mode')
    capacidade6.classList.toggle('dark-mode')
    capacidade7.classList.toggle('dark-mode')
    capacidade8.classList.toggle('dark-mode')
    capacidade9.classList.toggle('dark-mode')
    rodape.classList.toggle('dark-mode')
    direito.classList.toggle('dark-mode')
    
    const mudaonda = body.classList.contains('dark-mode')
    if(mudaonda){
        imagemOnda.src = 'OndaDia.png'
    }
    else{
        imagemOnda.src = 'Onda.png'
    }
});