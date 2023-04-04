// var dados = document.querySelectorAll('input#fen', 'input#mas', 'input#txtano', 'div#res')
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if ( fano.value.length == 0 || fano.value > ano ) {
        alert('[ERRO]')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = '' // string vazia
        var img = document.createElement('img') // cria uma ag img
        img.setAttribute('id', 'foto') // a tag img tem o id foto
        if ( fsex[0].checked) {
            genero = 'Homem'
            if ( idade >= 0 && idade < 10 ) {
                img.setAttribute('src', 'crianca-homem.jpg')
            } else if ( idade < 20 ) {
                img.setAttribute('src', 'jovem-homem.jpg')
            } else if ( idade < 60 ) {
                img.setAttribute('src', 'adulto-homem.jpg')
            } else {
                img.setAttribute('src', 'idoso-homem.jpg')
            }
        } else if ( fsex[1].checked) {
            genero = 'Mulher'
            if ( idade >= 0 && idade < 10 ) {
                img.setAttribute('src', 'crianca-mulher.jpg')
            } else if ( idade < 20 ) {
                img.setAttribute('src', 'jovem-mulher.jpg')
            } else if ( idade < 60 ) {
                // adulto
                img.setAttribute('src', 'adulto-mulher.jpg')
            } else {
                // idoso
                img.setAttribute('src', 'idoso-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // cria um elemento após res
    }
}