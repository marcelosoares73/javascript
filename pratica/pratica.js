var meses_do_ano = new Date()
var mes = meses_do_ano.getMonth()
mes = 0
console.log(mes)
switch (mes) {
    case 0:
        console.log('Janeiro')
        break;
    case 1:
        console.log('Fevereiro')
        break
    case 2:
        console.log('Março')
        break
    case 3:
        console.log('Abril')
        break
    case 4:
        console.log('Maio')
        break
    case 5:
        console.log('Junho')
        break
    case 6:
        console.log('Julho')
        break
    case 7:
        console.log('Agosto')
        break
    case 8:
        console.log('Setembro')
        break
    case 9:
        console.log('Outubro')
        break
    case 10:
        console.log('Novembro')
        break
    case 11:
        console.log('Dezembro')
        break
    default:
        console.log('[ERRO]')
}

if ( mes == 1 ) {
    console.log('Esse é o mês do seu aniversário!')
} else if ( mes == 2 ) {
    console.log('Seu aniversário foi mês passado.')
}

/*
   Para o JS:
    0 = janeiro
    1 = fevereiro
    2 = março
    3 = abril
    4 = maio
    5 = junho
    6 = julho
    7 = agosto
    8 = setembro 
    9 = outubro
    10 = novembro
    11 = dezembro
*/ 