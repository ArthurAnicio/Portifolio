function mascara_telefone()
{
    let tel = document.getElementById("telefone").value
    tel = tel.slice(0,14)
    console.log(tel.length)
    document.getElementById("telefone").value = tel
    if(tel[0] != "(" && tel[0] != undefined)
    {
        document.getElementById("telefone").value = "("+ tel[0]
    }
    if(tel[3] != ")" && tel[3] != undefined)
    {
        document.getElementById("telefone").value = tel.slice(0,3) + ")"+ tel[3]
    }
    if(tel[9] != "-" && tel[9] != undefined)
    {
        document.getElementById("telefone").value = tel.slice(0,9) + "-"+ tel[9]
    }
}
function mascara_nome()
{
    let input = document.getElementById("nomeUser").value

    
    input = input.charAt(0).toUpperCase() + input.slice(1)

    let palavras = input.split(' ')

    for (let i = 0; i < palavras.length; i++) {
        
        if (palavras[i] !== "") {
            palavras[i] = palavras[i][0].toUpperCase() + palavras[i].slice(1)
        }
    }

    
    let textoFormatado = palavras.join(' ')
    document.getElementById("nomeUser").value = textoFormatado
   
}
const modoEscuroToggle = document.getElementById('modoEscuroToggle')
const body = document.body
const header = document.getElementById("cabecario")
const titulo = document.getElementById("h1")
const barra = document.getElementById("barra")
const atual = document.getElementById("atual")
const pag = document.getElementById("pag")
const pag2 = document.getElementById("pag2")
const corpo = document.getElementById("corpo")
const nome = document.getElementById("nome")
const email = document.getElementById("email")
const numero = document.getElementById("numero")
const assunto = document.getElementById("assunto")
const mensagem = document.getElementById("mensagem")
const botao = document.getElementById("botao")
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
    nome.classList.toggle('dark-mode')
    email.classList.toggle('dark-mode')
    numero.classList.toggle('dark-mode')
    assunto.classList.toggle('dark-mode')
    mensagem.classList.toggle('dark-mode')
    botao.classList.toggle('dark-mode')
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