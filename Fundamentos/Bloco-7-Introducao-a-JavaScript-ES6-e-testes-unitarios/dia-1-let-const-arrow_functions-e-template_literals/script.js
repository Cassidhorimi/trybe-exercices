const btnClick = document.getElementById('countClick');
let x = 0
btnClick.addEventListener ('click', () => {
  x += 1;
  
  document.getElementById('number').innerText = x;
})