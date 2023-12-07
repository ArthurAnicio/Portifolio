const modoEscuroToggle = document.getElementById('modoEscuroToggle')
const body = document.body
const header = document.getElementById("cabecario")
const titulo = document.getElementById("h1")
const barra = document.getElementById("barra")
const atual = document.getElementById("atual")
const pag = document.getElementById("pag")
const pag2 = document.getElementById("pag2")
const sobre = document.getElementById("sobre")
const SobreTitulo = document.getElementById("SobreTitulo")
const SobreTexto = document.getElementById("SobreTexto")
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
    sobre.classList.toggle('dark-mode')
    SobreTexto.classList.toggle('dark-mode')
    SobreTitulo.classList.toggle('dark-mode')
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