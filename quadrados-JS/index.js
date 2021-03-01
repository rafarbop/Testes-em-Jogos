import { QuadroBase } from "./componentes/QuadroBase.js";
import { QuadroTexto } from "./componentes/QuadroTexto.js";
import { QuadradoItem } from "./componentes/QuadradoItem.js";

const root = document.getElementById('Base-Jogo');

root.style.height = '100vh';
root.style.display = 'flex';
root.style.justifyContent = 'center';
root.style.alignItems = 'center';
root.style.gap = '5vw';

window.onload = () => {
    const childQuadroBase = QuadroBase();
    const childQuadroTexto = QuadroTexto();

    //Linha1
    const childPonto11 = QuadradoItem('#044','50%','Ponto','1','1');
    const childPonto12 = QuadradoItem('#044','50%','Ponto','1','2');
    const childPonto13 = QuadradoItem('#044','50%','Ponto','1','3');
    const childPonto14 = QuadradoItem('#044','50%','Ponto','1','4');
    const childLinha11 = QuadradoItem('#08a','','Linha 11','1','1');
    const childLinha12 = QuadradoItem('#08a','','Linha 12','1','2');
    const childLinha13 = QuadradoItem('#08a','','Linha 13','1','3');
    childQuadroBase.appendChild(childPonto11)
    childQuadroBase.appendChild(childLinha11)
    childQuadroBase.appendChild(childPonto12)
    childQuadroBase.appendChild(childLinha12)
    childQuadroBase.appendChild(childPonto13)
    childQuadroBase.appendChild(childLinha13)
    childQuadroBase.appendChild(childPonto14)

    //Linha2
    const childLinha21 = QuadradoItem('#08a','','Linha 21','2','1');
    const childLinha22 = QuadradoItem('#08a','','Linha 22','2','2');
    const childLinha23 = QuadradoItem('#08a','','Linha 23','2','3');
    const childLinha24 = QuadradoItem('#08a','','Linha 24','2','4');
    const childQuad21 = QuadradoItem('#248','','Quadrado','2','1');
    const childQuad22 = QuadradoItem('#248','','Quadrado','2','2');
    const childQuad23 = QuadradoItem('#248','','Quadrado','2','3');
    childQuadroBase.appendChild(childLinha21)
    childQuadroBase.appendChild(childQuad21)
    childQuadroBase.appendChild(childLinha22)
    childQuadroBase.appendChild(childQuad22)
    childQuadroBase.appendChild(childLinha23)
    childQuadroBase.appendChild(childQuad23)
    childQuadroBase.appendChild(childLinha24)

    //Linha3
    const childPonto31 = QuadradoItem('#044','50%','Ponto','3','1');
    const childPonto32 = QuadradoItem('#044','50%','Ponto','3','2');
    const childPonto33 = QuadradoItem('#044','50%','Ponto','3','3');
    const childPonto34 = QuadradoItem('#044','50%','Ponto','3','4');
    const childLinha31 = QuadradoItem('#08a','','Linha 31','3','1');
    const childLinha32 = QuadradoItem('#08a','','Linha 32','3','2');
    const childLinha33 = QuadradoItem('#08a','','Linha 33','3','3');
    childQuadroBase.appendChild(childPonto31)
    childQuadroBase.appendChild(childLinha31)
    childQuadroBase.appendChild(childPonto32)
    childQuadroBase.appendChild(childLinha32)
    childQuadroBase.appendChild(childPonto33)
    childQuadroBase.appendChild(childLinha33)
    childQuadroBase.appendChild(childPonto34)

    //Linha4
    const childLinha41 = QuadradoItem('#08a','','Linha 41','4','1');
    const childLinha42 = QuadradoItem('#08a','','Linha 42','4','2');
    const childLinha43 = QuadradoItem('#08a','','Linha 43','4','3');
    const childLinha44 = QuadradoItem('#08a','','Linha 44','4','4');
    const childQuad41 = QuadradoItem('#248','','Quadrado','4','1');
    const childQuad42 = QuadradoItem('#248','','Quadrado','4','2');
    const childQuad43 = QuadradoItem('#248','','Quadrado','4','3');
    childQuadroBase.appendChild(childLinha41)
    childQuadroBase.appendChild(childQuad41)
    childQuadroBase.appendChild(childLinha42)
    childQuadroBase.appendChild(childQuad42)
    childQuadroBase.appendChild(childLinha43)
    childQuadroBase.appendChild(childQuad43)
    childQuadroBase.appendChild(childLinha44)

    //Linha5
    const childPonto51 = QuadradoItem('#044','50%','Ponto','5','1');
    const childPonto52 = QuadradoItem('#044','50%','Ponto','5','2');
    const childPonto53 = QuadradoItem('#044','50%','Ponto','5','3');
    const childPonto54 = QuadradoItem('#044','50%','Ponto','5','4');
    const childLinha51 = QuadradoItem('#08a','','Linha 51','5','1');
    const childLinha52 = QuadradoItem('#08a','','Linha 52','5','2');
    const childLinha53 = QuadradoItem('#08a','','Linha 53','5','3');
    childQuadroBase.appendChild(childPonto51)
    childQuadroBase.appendChild(childLinha51)
    childQuadroBase.appendChild(childPonto52)
    childQuadroBase.appendChild(childLinha52)
    childQuadroBase.appendChild(childPonto53)
    childQuadroBase.appendChild(childLinha53)
    childQuadroBase.appendChild(childPonto54)

    //Linha6
    const childLinha61 = QuadradoItem('#08a','','Linha 61','6','1');
    const childLinha62 = QuadradoItem('#08a','','Linha 62','6','2');
    const childLinha63 = QuadradoItem('#08a','','Linha 63','6','3');
    const childLinha64 = QuadradoItem('#08a','','Linha 64','6','4');
    const childQuad61 = QuadradoItem('#248','','Quadrado','6','1');
    const childQuad62 = QuadradoItem('#248','','Quadrado','6','2');
    const childQuad63 = QuadradoItem('#248','','Quadrado','6','3');
    childQuadroBase.appendChild(childLinha61)
    childQuadroBase.appendChild(childQuad61)
    childQuadroBase.appendChild(childLinha62)
    childQuadroBase.appendChild(childQuad62)
    childQuadroBase.appendChild(childLinha63)
    childQuadroBase.appendChild(childQuad63)
    childQuadroBase.appendChild(childLinha64)

    //Linha7
    const childPonto71 = QuadradoItem('#044','50%','Ponto','7','1');
    const childPonto72 = QuadradoItem('#044','50%','Ponto','7','2');
    const childPonto73 = QuadradoItem('#044','50%','Ponto','7','3');
    const childPonto74 = QuadradoItem('#044','50%','Ponto','7','4');
    const childLinha71 = QuadradoItem('#08a','','Linha 71','7','1');
    const childLinha72 = QuadradoItem('#08a','','Linha 72','7','2');
    const childLinha73 = QuadradoItem('#08a','','Linha 73','7','3');
    childQuadroBase.appendChild(childPonto71)
    childQuadroBase.appendChild(childLinha71)
    childQuadroBase.appendChild(childPonto72)
    childQuadroBase.appendChild(childLinha72)
    childQuadroBase.appendChild(childPonto73)
    childQuadroBase.appendChild(childLinha73)
    childQuadroBase.appendChild(childPonto74)

    root.appendChild(childQuadroBase);
    root.appendChild(childQuadroTexto);
    console.log('foi')

    alterarCorLinhas();
    alterarCorQuadrado();
}

function alterarCorLinhas(){
    const linhas = document.getElementsByClassName('Linha')

    for (let i=0;i<linhas.length;i++){
        linhas[i].onclick = (function() {
            return function(){
                console.log(linhas[i])
                linhas[i].style.backgroundColor = '#000';
                console.log(linhas[0].getAttribute('data-a'))
            }
        })();
    }
}

function alterarCorQuadrado(){
    const quadrado = document.getElementsByClassName('Quadrado')

    for (let i=0;i<quadrado.length;i++){
        quadrado[i].onclick = (function() {
            return function(){
                if (i<=2) {
                    console.log(quadrado[i])
                    let linhaCima = document.getElementsByClassName(`1${i+1}`)
                    let linhaDireita = document.getElementsByClassName(`2${i+2}`)
                    let linhaEsquerda = document.getElementsByClassName(`2${i+1}`)
                    let linhaBaixo = document.getElementsByClassName(`3${i+1}`)
                    console.log(linhaCima,linhaDireita,linhaEsquerda,linhaBaixo)
                    let corlinhaCima = window.getComputedStyle(linhaCima[0]).getPropertyValue('background-color')
                    let corlinhaDireita = window.getComputedStyle(linhaDireita[0]).getPropertyValue('background-color')
                    let corlinhaEsquerda = window.getComputedStyle(linhaEsquerda[0]).getPropertyValue('background-color')
                    let corlinhaBaixo = window.getComputedStyle(linhaBaixo[0]).getPropertyValue('background-color')
                    console.log(corlinhaCima,corlinhaDireita,corlinhaEsquerda,corlinhaBaixo)
                    if (corlinhaCima == 'rgb(0, 0, 0)' && corlinhaDireita == 'rgb(0, 0, 0)' && corlinhaEsquerda == 'rgb(0, 0, 0)' && corlinhaBaixo == 'rgb(0, 0, 0)'){
                        console.log('Alterado cor do Quadrado devido os 4 lados estarem pretos!')
                        quadrado[i].style.backgroundColor = '#0004';
                    }
                    else{console.log('não foi')}
                }
                if (i>=3 && i<= 5) {
                    console.log(quadrado[i])
                    let linhaCima = document.getElementsByClassName(`3${i-2}`)
                    let linhaDireita = document.getElementsByClassName(`4${i-1}`)
                    let linhaEsquerda = document.getElementsByClassName(`4${i-2}`)
                    let linhaBaixo = document.getElementsByClassName(`5${i-2}`)
                    console.log(linhaCima,linhaDireita,linhaEsquerda,linhaBaixo)
                    let corlinhaCima = window.getComputedStyle(linhaCima[0]).getPropertyValue('background-color')
                    let corlinhaDireita = window.getComputedStyle(linhaDireita[0]).getPropertyValue('background-color')
                    let corlinhaEsquerda = window.getComputedStyle(linhaEsquerda[0]).getPropertyValue('background-color')
                    let corlinhaBaixo = window.getComputedStyle(linhaBaixo[0]).getPropertyValue('background-color')
                    console.log(corlinhaCima,corlinhaDireita,corlinhaEsquerda,corlinhaBaixo)
                    if (corlinhaCima == 'rgb(0, 0, 0)' && corlinhaDireita == 'rgb(0, 0, 0)' && corlinhaEsquerda == 'rgb(0, 0, 0)' && corlinhaBaixo == 'rgb(0, 0, 0)'){
                        console.log('Alterado cor do Quadrado devido os 4 lados estarem pretos!')
                        quadrado[i].style.backgroundColor = '#0004';
                    }
                    else{console.log('não foi')}
                }
                if (i>=6 && i<= 8) {
                    console.log(quadrado[i])
                    let linhaCima = document.getElementsByClassName(`5${i-5}`)
                    let linhaDireita = document.getElementsByClassName(`6${i-4}`)
                    let linhaEsquerda = document.getElementsByClassName(`6${i-5}`)
                    let linhaBaixo = document.getElementsByClassName(`7${i-5}`)
                    console.log(linhaCima,linhaDireita,linhaEsquerda,linhaBaixo)
                    let corlinhaCima = window.getComputedStyle(linhaCima[0]).getPropertyValue('background-color')
                    let corlinhaDireita = window.getComputedStyle(linhaDireita[0]).getPropertyValue('background-color')
                    let corlinhaEsquerda = window.getComputedStyle(linhaEsquerda[0]).getPropertyValue('background-color')
                    let corlinhaBaixo = window.getComputedStyle(linhaBaixo[0]).getPropertyValue('background-color')
                    console.log(corlinhaCima,corlinhaDireita,corlinhaEsquerda,corlinhaBaixo)
                    if (corlinhaCima == 'rgb(0, 0, 0)' && corlinhaDireita == 'rgb(0, 0, 0)' && corlinhaEsquerda == 'rgb(0, 0, 0)' && corlinhaBaixo == 'rgb(0, 0, 0)'){
                        console.log('Alterado cor do Quadrado devido os 4 lados estarem pretos!')
                        quadrado[i].style.backgroundColor = '#0004';
                    }
                    else{console.log('não foi')}
                }
                
            }
        })();
    }
}

