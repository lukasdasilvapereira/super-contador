function contar() {
    let ini = document.getElementById('start')
    let fim = document.getElementById('end')
    let step = document.getElementById('step')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || step.value.length == 0) {
        window.alert("Todos os campos devem ser preenchidos.")
    } else {
       res.innerHTML = 'Contando'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(step.value)

       if (p <= 0) {
        window.alert('Passo Inválido, Considerando passo 1')
        p = 1
       }
        if (i < f){
            for(let c = i; c <= f; c += p) {
                res.innerHTML +=  ` ${c} 👉`
               }
         } else {
            for(let c = i; c >= f; c -= p) {
                res.innerHTML +=  ` ${c} 👉`
            }
         }
       res.innerHTML += `🏳️`
    }
}