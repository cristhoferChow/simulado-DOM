function ex1(){
    /*Não preciso criar var para pegar o elemento direto do html */
    document.querySelectorAll("div p").forEach(p => {
        p.style.color ="pink";
    })
}

function ex2(){
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

function rolar() {
    let numero = parseInt(document.getElementById("numero").value);
    let ul = document.createElement("ul");
    ul.className = "lista";

    for (let i = 0; i < numero; i++) {
        let li = document.createElement("li");
        li.textContent = i;
        li.style.color = i % 2 === 0 ? "blue" : "red";
        ul.appendChild(li);
    }

    document.body.appendChild(ul);
}


function nomearImgs() {
    document.querySelectorAll("img").forEach((img,i) =>{
        img.src = "image" + i + ".png"

    });
}




