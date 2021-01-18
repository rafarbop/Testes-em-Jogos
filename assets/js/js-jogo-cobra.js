
var botaoEsq = document.getElementById("botaoEsq");
var botaoDir = document.getElementById("botaoDir");
var botaoCima = document.getElementById("botaoCima");
var botaoBaixo = document.getElementById("botaoBaixo");
var objeto1 = document.getElementById("objeto1");
var comida1 = document.getElementById("comida1");
var comida2 = document.getElementById("comida2");
var posCol = 1;
var posLin = 1;

function posicaoComCol() {
    a = Math.floor(Math.random() * 28+2);
    b = Math.floor(Math.random() * 28+2);
    while (b == a){b = Math.floor(Math.random() * 28+1)}
    return [a,b];
}
function posicaoComLin() {
    a = Math.floor(Math.random() * 18+2);
    b = Math.floor(Math.random() * 18+2);
    while (b == a){b = Math.floor(Math.random() * 18+2)}
    return [a,b];
}



document.body.onload= () => {
    comida1.style.gridColumnStart = posicaoComCol()[0]
    comida1.style.gridRowStart = posicaoComLin()[0]
    comida2.style.gridColumnStart = posicaoComCol()[1]
    comida2.style.gridRowStart = posicaoComLin()[1]    
    console.log(comida1.style.gridColumnStart)
}


botaoEsq.onclick = () => {
    posCol -=  1;
    if (posCol==31){posCol = 1}
    if (posCol==0){posCol = 30}
    objeto1.style.gridColumnStart = posCol;
    if ((posCol == comida1.style.gridColumnStart)&&(posLin == comida1.style.gridRowStart)){
        comida1.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if ((posCol == comida2.style.gridColumnStart)&&(posLin == comida2.style.gridRowStart)){
        comida2.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if (("none" == comida1.style.display)&&("none" == comida2.style.display)){
        alert("Voçe Ganhou - Parabéns");
        window.location.reload();
    }
    console.log('Movendo Esquerda! '+posCol);
}

botaoDir.onclick = () => {
    posCol +=  1;
    if (posCol==31){posCol = 1}
    if (posCol==0){posCol = 30}
    objeto1.style.gridColumnStart = posCol;
    if ((posCol == comida1.style.gridColumnStart)&&(posLin == comida1.style.gridRowStart)){
        comida1.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if ((posCol == comida2.style.gridColumnStart)&&(posLin == comida2.style.gridRowStart)){
        comida2.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if (("none" == comida1.style.display)&&("none" == comida2.style.display)){
        alert("Voçe Ganhou - Parabéns");
        window.location.reload();
    }
    console.log('Movendo Direita! '+posCol);
}

botaoCima.onclick = () => {
    posLin -=  1;
    if (posLin==21){posLin = 1}
    if (posLin==0){posLin = 20}
    objeto1.style.gridRowStart = posLin;
    if ((posCol == comida1.style.gridColumnStart)&&(posLin == comida1.style.gridRowStart)){
        comida1.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if ((posCol == comida2.style.gridColumnStart)&&(posLin == comida2.style.gridRowStart)){
        comida2.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if (("none" == comida1.style.display)&&("none" == comida2.style.display)){
        alert("Voçe Ganhou - Parabéns");
        window.location.reload();
    }
    console.log('Movendo Cima! '+posLin);
}

botaoBaixo.onclick = () => {
    posLin +=  1;
    if (posLin==21){posLin = 1}
    if (posLin==0){posLin = 20}
    objeto1.style.gridRowStart = posLin;
    if ((posCol == comida1.style.gridColumnStart)&&(posLin == comida1.style.gridRowStart)){
        comida1.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if ((posCol == comida2.style.gridColumnStart)&&(posLin == comida2.style.gridRowStart)){
        comida2.style.display = "none";
        alert("Parabéns, pegou uma comida!")
    }
    if (("none" == comida1.style.display)&&("none" == comida2.style.display)){
        alert("Voçe Ganhou - Parabéns");
        window.location.reload();
    }
    console.log('Movendo Baixo! '+posLin);
}