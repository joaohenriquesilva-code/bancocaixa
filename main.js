const add = document.querySelector("#bloco")
const body = document.querySelector("#body")
const bnt = document.querySelector("#btn")
const delet = document.querySelector("#delete")
const formctl = document.querySelector("#formctl")
let time = 0
const listaNomes = {
    "001":"Jean",
    "002":"João Henrique da Silva...",
    "003":"José Olinto Franquin"
}

bnt.addEventListener("click",()=>{
    time += 1
    delet.style.display  = "auto"
    let elDupli  = add.cloneNode(true)
    elDupli.id = String("bloco_"+time)
    elDupli.classList.add("bloco")
    formctl.parentNode.appendChild(elDupli)
    delet.addEventListener("click",()=>{elDupli.remove()})
    console.log(time);
})


let result = document.querySelector("#resultado")
let quantidade = document.querySelector("#quantidade")
let listcf = document.querySelector("#ListCf")
let ident = document.querySelector("#identificado")

quantidade.addEventListener("input",()=>{
    let valorCalc = quantidade.value
    result.value = math.evaluate(valorCalc);
})
quantidade.addEventListener("blur",()=>{})

listcf.addEventListener("input",()=>{
    let valorCalc = listcf.value
    ident.value = listaNomes[String(valorCalc)]
})
