const aEins = document.querySelector('.aEins');
const aZwei = document.querySelector('.aZwei');
const restart = document.querySelector('.restart');
const body = document.querySelector('body');
const title = document.querySelector('.title');
const secondTitle = document.querySelector('.second');
const title3 = document.querySelector('.title3');
const fadeContainer = document.querySelector('.fade-container');
const nameInput = document.getElementById("name-input");
const mafiaInput = document.getElementById("mafia-input");

let character = "John";
let mafia = "mafia";

let path = -1;
let introPath = -1;

aZwei.style.display = "none";
mafiaInput.style.display = "none";
fadeContainer.style.height = `${document.body.scrollHeight}px`

let introData = [{
  text: `${character} is the leader of the notorious mafia called ${mafia}`,
  title: `Now the name of your mafia.`
}, {
  text: `${mafia} is <button class="aEins">Go on</button> <button class="aZwei">Zwei</button> <button class="restart">3</button>`,
  title: `What type of Mafia should ${mafia} be?`
}];

nameInput.oninput = () => {
  character = nameInput.value;
  introData[0].text = `${character} is the leader of the notorious mafia called`
};

mafiaInput.oninput = () => {
  mafia = mafiaInput.value;
  introData[1].text = `${mafia} is <div class="button-container">
    <button class="aDrei">merciful</button>
    <button class="aEins">unscrupulous</button>
    <button class="aZwei">divided (hard)</button></div>`
  introData[1].title = `What type of Mafia should ${mafia} be?`
};

let mercifulData = "";

async function getData() {
  const response = await fetch('mercifulData.json');
  mercifulData = await response.json();
}

getData();

function fade() {
  fadeContainer.style.opacity = "0"
}

aEins.addEventListener("click", function() {
  fadeContainer.style.opacity = "1";
  setTimeout(fade, 1000);
  setTimeout(function() {
    if (introPath === -1) {
      goIntro2(1);
      nameInput.style.display = "none";
      mafiaInput.style.display = "inline";
    } else if (introPath === 0) {
      goIntro2(1);
      mafiaInput.style.display = "none";
      aEins.style.display = "none";
    }
    if (path === 0) {
      go(2);
    } else if (path === 2) {
      end(1);
    } else if (path === 4) {
      go(2);
    } else if (path === 6) {
      go(1);
    } else if (path === 7) {
      go(3);
    } else if (path === 8) {
      go(1);
    } else if (path === 9) {
      end(8);
    } else if (path === 10) {
      go(1);
    } else if (path === 11) {
      end(3);
    } else if (path === 12) {
      aZwei.style.display = "inline-block";
      go(1);
    } else if (path === 13) {
      end(2);
    }
  }, 1000);
});

aZwei.addEventListener("click", function() {
  fadeContainer.style.opacity = "1";
  setTimeout(fade, 700);
  setTimeout(function() {
    if (path === 0) {
      end(1);
    } else if (path === 2) {
      go(2);
    } else if (path === 4) {
      end(1);
    } else if (path === 6) {
      go(2);
    } else if (path === 7) {
      go(2);
    } else if (path === 8) {
      go(-1);
    } else if (path === 9) {
      end(9);
    } else if (path === 10) {
      go(2);
      aZwei.style.display = "none";
    } else if (path === 11) {
      end(3);
    } else if (path === 13) {
      end(3);
    }
  }, 700);
});

function go(plus) {
  path += plus;
  title.innerText = data[path].question;
  aEins.innerText = data[path].answers.aEins;
  aZwei.innerText = data[path].answers.aZwei;
};

function goIntro(plus) {
  introPath += plus;
  title.innerText = introData[introPath].text;
  title3.innerText = introData[introPath].title;
};

function goIntro2(plus) {
  introPath += plus;
  title.innerHTML = introData[introPath].text;
  title3.innerHTML = introData[introPath].title;
};

function end(plus) {
  path += plus;
  title.innerText = data[path].question;
  aEins.style.display = "none";
  aZwei.style.display = "none";
  restart.style.display = "inline-block";
};

restart.addEventListener("click", function() {
  fadeContainer.style.opacity = "1";
  setTimeout(fade, 700);
  setTimeout(function() {
    path = 0;
    aEins.style.display = "inline-block";
    aZwei.style.display = "inline-block";
    restart.style.display = "none";
    title.innerText = data[path].question;
    aEins.innerText = data[path].answers.aEins;
    aZwei.innerText = data[path].answers.aZwei;
  }, 700);
});
