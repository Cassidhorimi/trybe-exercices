let ondeEstou = document.getElementById('elementoOndeVoceEsta');
console.log(ondeEstou);

let pai = ondeEstou.parentElement;
console.log(pai.style.color = 'green');

let filhoDoFilho = ondeEstou.firstElementChild;
console.log(filhoDoFilho.innerText = 'Hello!');

let primeiroFilho = pai.firstElementChild;
console.log(primeiroFilho);

let text = ondeEstou.nextSibling;
console.log(text);

let terceiroFilho = ondeEstou.nextElementSibling;
console.log(terceiroFilho);

console.log(pai.lastElementChild.previousElementSibling);

let criadorDeIrmao = document.createElement('section');
criadorDeIrmao.innerText = 'Irmao';
criadorDeIrmao.id = 'IrmaoDoOndeEstou'
let criadorDeFilho = document.createElement('section');
criadorDeFilho.innerText = 'Filho'
criadorDeFilho.id = 'filhoDoOndeEstou'
let criadorDeFilhoDoFilho = document.createElement('section');
criadorDeFilho.innerText = 'Filho'
criadorDeFilho.id = 'filhoDoFilhoDoFIlho'

pai.appendChild(criadorDeIrmao);
ondeEstou.appendChild(criadorDeFilho);
filhoDoFilho.appendChild(criadorDeFilhoDoFilho)

let terceiroIrmao = criadorDeFilhoDoFilho.parentElement.parentElement.nextElementSibling;
console.log(terceiroIrmao)

for (let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
  const currentChildren = pai.childNodes[index];
  if (currentChildren.id !== 'elementoOndeVoceEsta') {
    currentChildren.remove();
  }
}

let segundoEUltimoFilhoDoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
segundoEUltimoFilhoDoFilho.remove();