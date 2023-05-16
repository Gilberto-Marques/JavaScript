
function contar() {
    let inicio = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if(inicio.length == 0 || fim.length == 0 || passo.length == 0){
        alert('[ERRO], um ou mais valores estão vazios')
    }else{
        res.innerHTML = `Contando: `
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(i<f){
            for(let c=i; c<f; c+=p){
                res.innerHTML += `${c}\u{1F449}`//site unicode emoji list, tirar o U+ e colocar \u{restoDoCodigo}
            }

        }else{
            for(let c=i; c>f; c-=p){
                res.innerHTML += `${c} \u{1F448}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`

    }
    

    
}
