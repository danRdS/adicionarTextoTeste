const input = document.getElementsByTagName('input')[0]
const btn = document.getElementsByTagName('input')[1]
const del = document.querySelector('button');
const paragrafo = document.querySelector('p');
let valor;

const clique = () => {
    valor = input.value;
    if(valor.length > 0){
        paragrafo.innerHTML += valor + '<hr>';
        ativarInput();
    } else {
        alert('Digite algo!');
    }
}

btn.onclick = clique

const ativarInput = function(){
    input.value = '';
    input.focus();
}

del.addEventListener('click', ()=>{
    paragrafo.innerText = '';
    ativarInput();
})

