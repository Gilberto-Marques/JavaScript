function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    //var hora = 19
    msg.innerHTML = `Hora: (<i>${hora} : ${minuto} </i>)`

    if(hora >= 0 && hora < 12){
        //bom dia
        img.src = 'manha.png'
        document.body.style.background = "#e2cd9f"
        
    }else if(hora >= 12 && hora <= 18){
        //boa tarde
        img.src = 'tarde.png'
        document.body.style.background = "#b9846f"
    }else{
        //boa noite
        img.src = 'noite.png'
        document.body.style.background = "515154"
    }
}