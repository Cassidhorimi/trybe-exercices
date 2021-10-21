function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let days = document.getElementById('days');
let buttonsContainer = document.querySelector('.buttons-container');


window.onload = function () {
  for (let i = 0; i < dezDaysList.length; i += 1) {
    if (dezDaysList[i] === 25) {
      let dayCreator = document.createElement('li');
      dayCreator.innerText = dezDaysList[i];
      dayCreator.className = 'day holyday friday';
      days.appendChild(dayCreator);
    }
    if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
      let dayCreator = document.createElement('li');
      dayCreator.innerText = dezDaysList[i];
      dayCreator.className = 'day holyday ';
      days.appendChild(dayCreator);
    }
    if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
      let dayCreator = document.createElement('li');
      dayCreator.innerText = dezDaysList[i];
      dayCreator.className = 'day friday ';
      days.appendChild(dayCreator);
    } else if (dezDaysList[i] !== 24 && dezDaysList[i] !== 31 && dezDaysList[i] !== 25) {
      let dayCreator = document.createElement('li');
      dayCreator.innerText = dezDaysList[i];
      dayCreator.className = 'day';
      days.appendChild(dayCreator);
    }
  }

  function holyday(y) {
    buttonCreator = document.createElement('button');
    buttonCreator.innerText = y;
    buttonCreator.id = 'btn-holyday';
    buttonsContainer.appendChild(buttonCreator);
  }
  holyday('Feriados');

  let btnHolyday = document.querySelector('#btn-holyday');
  let holydayBtn = document.querySelectorAll('.holyday');

  btnHolyday.addEventListener('click', function () {
    let resetColor = 'unset';
    for (i = 0; i < holydayBtn.length; i += 1) {
      if (holydayBtn[i].style.backgroundColor === resetColor) {
        holydayBtn[i].style.backgroundColor = 'lightgray';
      } else {
        holydayBtn[i].style.backgroundColor = 'unset';
      }
    }
  });

  function friday(y) {
    buttonCreator = document.createElement('button');
    buttonCreator.innerText = y;
    buttonCreator.id = 'btn-friday';
    buttonsContainer.appendChild(buttonCreator);
  }
  friday('Sexta-feira');

  function sextou(z) {
    let btnfriday = document.querySelector('#btn-friday');
    let fridayBtn = document.querySelectorAll('.friday');

    btnfriday.addEventListener('click', function (x) {
      let resetText = 'Sextou';
      for (i = 0; i < fridayBtn.length; i += 1) {
        if (fridayBtn[i].innerText !== resetText) {
          fridayBtn[i].innerText = resetText;
        } else {
          fridayBtn[i].innerText = z[i];
        }
      }
    });
  }
  let fridays = [4, 11, 18, 25];
  sextou(fridays);

  let zoomdays = document.querySelectorAll('.day');

  function zoomIn() {
    for (i = 0; i < zoomdays.length; i += 1) {
      zoomdays[i].addEventListener('mouseover', function (event) {
        event.target.style.fontSize = '40px';
      });
    }
  }
  function zoomOff() {
    for (i = 0; i < zoomdays.length; i += 1) {
      zoomdays[i].addEventListener('mouseout', function (event) {
        event.target.style.fontSize = '20px';
      });
    }
  }
  zoomIn();
  zoomOff();

  let mytasks = document.querySelector('.my-tasks');

  function tasks(x) {
    let tasksCreator = document.createElement('span');
    tasksCreator.innerText = x;
    mytasks.appendChild(tasksCreator);
  }

  function task(x) {
    let taskCreator = document.createElement('div');
    taskCreator.style.backgroundColor = x;
    mytasks.appendChild(taskCreator);
    taskCreator.classList.add('task')
  }
  task('lightblue');
  tasks('cozinhar');

  function selectedTaskClass() {
    let selectedTask = document.getElementsByClassName('task selected');
    let myTasks = document.querySelector('.task');

    myTasks.addEventListener('click', function (event) {
      if (selectedTask.length === 0) {
        event.target.className = 'task selected';
      } else {
        event.target.className = 'task';
      }
    });
  };

  selectedTaskClass();

  function atriColor() {
    let select = document.getElementsByClassName('task selected');
    let task = document.querySelector('.task');
    let days = document.querySelector('#days');
    let colorSelect = task.style.backgroundColor;

    days.addEventListener('click', function (event) {
      let targetColor = event.target.style.color;

      if (select.length > 0 && targetColor !== colorSelect) {

        let color = select[0].style.backgroundColor;
        event.target.style.color = color;
    
      } else if (targetColor === colorSelect && select.length !== 0) {
        
        event.target.style.color = 'rgb(119,119,119)';
      
      }
    })
  }
  atriColor();

  function addNewTask() {
    let getInputField = document.querySelector('#task-input');
    let addInputButton = document.querySelector('#btn-add');
    let getTaskList = document.querySelector('.task-list');
  
    addInputButton.addEventListener('click', function() {
      if (getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      } else {
        alert('Error: Digite ao menos 1 caractere.');
      }
    })
  
    getInputField.addEventListener('keyup', function(event) {
      if (event.key === 'Enter' && getInputField.value.length > 0) {
        let newLi = document.createElement('li');
        newLi.innerText = getInputField.value;
  
        getTaskList.appendChild(newLi);
        getInputField.value = '';
      }
    });
  };
  
  addNewTask();
  
}
