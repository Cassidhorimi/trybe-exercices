window.onload = function () {

  const inputBtn = document.querySelector('#input-btn');
  let paragraph = document.querySelector('.safeText');

  inputBtn.addEventListener('click', addText);

  function addText() {
    let paragraphContent = document.querySelector('.text').value;
    paragraph.innerText = paragraphContent;
    localStorage.setItem('paragraphCtt', paragraphContent);
  }

  function bgColor(color) {
    paragraph.style.backgroundColor = color;
    localStorage.setItem("backgroundColor", color);
  }

  let btnText = document.querySelectorAll('#background-color>button');
  for (let i = 0; i < btnText.length; i++) {
    btnText[i].addEventListener("click", function (event) {
      bgColor(event.target.innerHTML);
    })
  }

  function fontColor(color) {
    paragraph.style.color = color;
    localStorage.setItem("fontColor", color);
  }

  let btnColorText = document.querySelectorAll('#text-color>button');
  for (let i = 0; i < btnColorText.length; i++) {
    btnColorText[i].addEventListener("click", function (event) {
      fontColor(event.target.innerHTML);
    })
  }

  function fontSize(size) {
    paragraph.style.fontSize = `${size}px`;
    localStorage.setItem("fontSize", size);
  }

  let btnFontSize = document.querySelectorAll('#font-size>button');
  for (let i = 0; i < btnFontSize.length; i++) {
    btnFontSize[i].addEventListener("click", function (event) {
      fontSize(event.target.innerHTML);
    })
  }

  function fontHeight(height) {
    paragraph.style.lineHeight = height;
    localStorage.setItem("fontHeight", height);
  }

  let btnFontHeight = document.querySelectorAll('#height>button');
  for (let i = 0; i < btnFontHeight.length; i++) {
    btnFontHeight[i].addEventListener("click", function (event) {
      fontHeight(event.target.innerHTML);
    })
  }

  function fontFamily(family) {
    paragraph.style.fontFamily = family;
    localStorage.setItem("fontFamily", family);
  }

  let btnFontFamily = document.querySelectorAll('#font-family>button');
  for (let i = 0; i < btnFontFamily.length; i++) {
    btnFontFamily[i].addEventListener("click", function (event) {
      fontFamily(event.target.innerHTML);
    })
  }

  paragraph.style.fontFamily = localStorage.getItem('fontFamily');
  paragraph.style.lineHeight = localStorage.getItem('fontHeight');
  paragraph.style.fontSize = `${localStorage.getItem('fontSize')}px`;
  paragraph.style.color = localStorage.getItem('fontColor');
  paragraph.style.backgroundColor = localStorage.getItem('backgroundColor');
  paragraph.innerText = localStorage.getItem('paragraphCtt');
}

