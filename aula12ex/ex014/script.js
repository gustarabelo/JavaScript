function carregar(){
    var msg = document.querySelector("div#msg")
    var img = document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'manha.png'
        document.body.style.background = "#F9CD9D"
    }else if(hora >= 12 && hora < 18){
        img.src = 'tarde.png'
        document.body.style.background = "#CF8F6C"
    }else{
        img.src = 'noite.png'
        document.body.style.background = "#01234C"
    }
}