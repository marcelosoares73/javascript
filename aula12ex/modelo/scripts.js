var hora_atual = new Date()
var hora = hora_atual.getHours()
var div_hora = document.getElementById('hora')
div_hora.innerHTML = `Agora são ${hora} horas`