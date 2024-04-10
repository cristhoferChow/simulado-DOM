function ex1(){
    document.querySelectorAll("div p").forEach(p => {
        p.style.color ="pink";
    })
}

function ex2(){
    const nomes = [{nome:"teste1", acao:"mostrar"},{nome:"teste2", acao:"mostrar"},{nome:"teste3", acao:"mostrar"},{nome:"teste4", acao:"ignorar"}];
    let mostrar = 0;
    let ignorar = 0;
    let divI = document.createElement("div");
    let divM = document.createElement("div");
    for(let i = 0; i<nomes.length;i++){
        if(nomes[i].acao === "mostrar"){
            let p = document.createElement("p");
            p.innerText = nomes[i].nome;
            document.body.appendChild(p);
            mostrar++
        }
        else{
            ignorar++
        }
        divI.innerText = "ignorados: "+ignorar;
        divM.innerText = "total: "+(mostrar+ignorar);

        document.body.appendChild(divI)
        document.body.appendChild(divM)

    }
}

