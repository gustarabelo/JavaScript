function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector("input#txtano")
    var res = document.querySelector("div#res")

    if (fAno.value.length == 0 || Number(fAno.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotos/bebeH.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','fotos/jovemH.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'fotos/adultoH.png')
            }else {
                //idoso
                img.setAttribute('src', 'fotos/idosoH.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'fotos/bebeM.png')
            }else if(idade < 21){
                img.setAttribute('src', 'fotos/jovemM.png')
                //jovem
            }else if(idade < 50){
                img.setAttribute('src', 'fotos/adultoM.png')
                //adulto
            }else {
                img.setAttribute('src', 'fotos/idosoM.png')
                //idoso
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}