function calcular() {
    var nota1 = document.getElementById('nota1')
    var nota2 = document.getElementById('nota2')
    var nota3 = document.getElementById('nota3')
    var nota4 = document.getElementById('nota4')

    var n1 = Number(nota1.value)
    var n2 = Number(nota2.value)
    var n3 = Number(nota3.value)
    var n4 = Number(nota4.value)

    var soma = n1 + n2 + n3 + n4
    var media = ( n1 + n2 + n3 + n4 ) / 4

    var res_soma = document.getElementById('soma_notas')
    var res_media = document.getElementById('media_notas')
    var situacao = document.getElementById('situacao')
    

    res_soma.innerHTML = soma
    res_media.innerHTML = media

    if ( media >= 7 ) {
        situacao.innerHTML = 'APROVADO'
    } else if ( media < 7 && media >= 6 ) {
        situacao.innerHTML = 'RECUPERAÇÃO'
    } else {
        situacao.innerHTML = 'REPROVADO'
    }
}