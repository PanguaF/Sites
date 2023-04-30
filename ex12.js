function carregar() {
var msg = window.document.getElementById('carro')
var img = window.document.getElementById('imagem') 
var data = new Date()
var hora = data.getHours()
msg.innerText = `agora são ${hora} horas`
if (hora >= 0 && hora < 12) {
    // bom dia
    img.src = 'manha.jpg'
    document.body.style.background = '#231F14'
} else if (hora >= 12 && hora <= 18) {
    // boa tarde
    img.src = 'tarde.jpg'
    document.body.style.background = '##A0ADB6'
} else {
   // boa noite
   img.src = 'noite.jpg'
   document.body.style.background = '#202A11'
}
}