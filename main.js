const aEins = document.querySelector('.aEins');
const aZwei = document.querySelector('.aZwei');
const restart = document.querySelector('.restart');
const body = document.querySelector('body');
const titel = document.querySelector('.titel');
const titel3 = document.querySelector('.titel3');
const fadeContainer = document.querySelector('.fade-container');
const nameInput = document.getElementById("name-input");
const mafiaInput = document.getElementById("mafia-input");

let character = "John";
let mafia = "mafia";

let path = -1;
let introPath = 0;

aZwei.style.display = "none";

let introData = [{
  text: `${character} is the leader of the notorious mafia called ${mafia}`,
  title: `Now the name of your mafia.`
}];

nameInput.oninput = function (){
  character = nameInput.value;
  introData[0].text = `${character} is the leader of the notorious mafia called <span><input id="mafia-input" type="text" size="25" placeholder="mafia name" autofocus></span>`
}

// mafiaInput.oninput = function (){
//   mafia = mafiaInput.value;
//   introData[1].text = `${mafia} is the leader of the notorious mafia called <span><input id="mafia-input" type="text" size="25" placeholder="mafia name" autofocus></span>`
// }


let data = "";

async function getData() {
  const response = await fetch('data.json');
  data = await response.json();
  fadeContainer.style.height = `${document.body.scrollHeight}px`
}

getData();

function fade() {
  fadeContainer.style.opacity = "0"
}

aEins.addEventListener("click", function() {
  fadeContainer.style.opacity = "1";
  setTimeout(fade, 1000);
  setTimeout(function() {
    if (introPath === 0) {
      goIntro2(0);
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
  titel.innerText = data[path].question;
  aEins.innerText = data[path].answers.aEins;
  aZwei.innerText = data[path].answers.aZwei;
};

function goIntro(plus) {
  introPath += plus;
  titel.innerText = introData[introPath].text;
  titel3.innerText = introData[introPath].title;
};

function goIntro2(plus) {
  introPath += plus;
  titel.innerHTML = introData[introPath].text;
  titel3.innerText = introData[introPath].title;
};

function end(plus) {
  path += plus;
  titel.innerText = data[path].question;
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
    titel.innerText = data[path].question;
    aEins.innerText = data[path].answers.aEins;
    aZwei.innerText = data[path].answers.aZwei;
  }, 700);
});
