const aEins = document.querySelector('.aEins');
const aZwei = document.querySelector('.aZwei');
const body = document.querySelector('body');
const titel = document.querySelector('.titel');

let lose = false;

const qArray = [
  'Du hast verloren. Beide waren dir um weitem überlegen. Besonders im Video Editing.',
  'Du schaffst es vorerst zu fliehen. Doch jetzt steht Muslim vor dir. Er sieht verärgert aus. Was tust du?',
  'Muslim ist von deiner Schwäche angeekelt. Er bringt dich um.',
  'Er verschont dich und sagt: "Ok aber du musst in einem Monat wissen, wie man das Hintergrundrauschen entfernt."'
]


aEins.addEventListener('click', function() {
  if (state === 0) {
    lose = true;
    titel.innerText = qArray[0];
  }
  if (lose === true) {
    aEins.style.display = 'none';
    aZwei.style.display = 'none';
  }
})

aZwei.addEventListener('click', function() {
  if (state === 0) {
    titel.innerText = qArray[1];
    aEins.innerText = 'Um Verzeihung bitten'
    aZwei.innerText = 'Sage: "Ich lerne gerade wie man Videos schneidet"'
  }
  if (lose === true) {
    aEins.style.display = 'none';
    aZwei.style.display = 'none';
  }
})

aZwei.addEventListener('click', function() {
  if (state === 1) {
    titel.innerText = qArray[3];
    aEins.innerText = 'Um Verzeihung bitten'
    aZwei.innerText = 'Sage: "Ich lerne gerade wie man Videos schneidet"'
    state++;
  }
  if (lose === true) {
    aEins.style.display = 'none';
    aZwei.style.display = 'none';
  }
})
