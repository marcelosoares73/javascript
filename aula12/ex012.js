var hora_atual = new Date()
var hora = hora_atual.getHours()
console.log(`são extatamente ${hora} horas`)
if (hora < 12) {
    console.log('bom dia')
} else if (hora <= 18) {
    console.log('boa tarde')
} else {
    console.log('boa noite')
}
