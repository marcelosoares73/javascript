function carregar() {
    var msg = document.getElementById('mensagem')
    var dtn = document.getElementById('dtn')
    var img = document.getElementById('imagem')

    var data = new Date()
    var hora = data.getHours()
    var mt = new Date()
    var minutos = mt.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minutos} hs`
    if ( hora >= 0 && hora < 12 ) {
        dtn.innerHTML = 'Bom dia!'
        img.src = 'manha.jpg'
        document.body.style.background = '#d197e7'
    } else if ( hora >= 12 && hora <= 18 ) {
        dtn.innerHTML = 'Boa tarde!'
        img.src = 'tarde.jpg'
        document.body.style.background = '#daaf38'
    } else {
        dtn.innerHTML = 'Boa noite!'
        img.src = 'noite.jpg'
        document.body.style.background = '#181536'
    }
}
