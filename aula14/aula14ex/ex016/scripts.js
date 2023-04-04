function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        // alert('[ERRO] Faltam dados!')
        res.innerHTML = 'impossível contar!'
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(txti.value)
        let f = Number(txtf.value)
        let p = Number(txtp.value)
        if ( p <= 0) {
            alert('Passo inválido!')
            p = 1
        }
        if ( i < f ) {
            // contagem crescente
            for (var c = i ; c <= f ; c+=p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        } else {
            // contagem regressiva
            for (var c = i ; c >= f ; c -= p) {
                res.innerHTML += `${c} \u{1f449}`
            }
        }
        res.innerHTML += `\u{1f3c1}`
    }
}