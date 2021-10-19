let header = document.getElementById('header-container');

header.style.backgroundColor = '#77DD77';

let urgente = document.querySelectorAll('.emergency-tasks h3');

for (i = 0; i < urgente.length; i += 1) {
  urgente[i].style.backgroundColor = '#990099';
}

let naoUrgente = document.querySelectorAll('.no-emergency-tasks h3');

for (i = 0; i < urgente.length; i += 1) {
  naoUrgente[i].style.backgroundColor = 'black';
}

let urgenteBackground = document.querySelector('.emergency-tasks');

urgenteBackground.style.backgroundColor = '#FFA07A';

let naoUrgenteBackground = document.querySelector('.no-emergency-tasks');

naoUrgenteBackground.style.backgroundColor = '#F8ED84';