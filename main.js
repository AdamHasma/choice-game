const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const restart = document.querySelector('.restart');
const body = document.querySelector('body');
const text = document.querySelector('.text');
const fadeContainer = document.querySelector('.fade-container');
const input = document.getElementById("input");
const input2 = document.getElementById("input-2");

let inputValue = "Test";

let path = -1;
let introPath = -1;

btnTwo.style.display = "none";
restart.style.display = "none";
input.style.display = "none";
input2.style.display = "none";
fadeContainer.style.height = `${document.body.scrollHeight}px`;

let introData = [{
  text: `But even small villages like these have their own secrets.`,
}, {
  text: `After a quiet day of work in the library of the neighboring village where you are working as a librarian. You ride eight kilometers to your home on your bike, as usual.`,
}, {
  text: `Arriving in ${inputValue}, you drive past your yard to your large empty barn to your front door.`,
}, {
  text: `It is not particularly large and modern, but it is enough for someone living alone.`,
}
];

let mercifulData = "";

async function getData() {
  const response = await fetch('mercifulData.json');
  mercifulData = await response.json();
}

getData();

function fade() {
  fadeContainer.style.opacity = "0"
}

const btnOneFunction = () => {
  fadeContainer.style.opacity = "1";
  setTimeout(fade, 700);
  setTimeout(function() {
    if (introPath === -1) {
      goIntro2(1);
      input.style.display = 'block';
    } else if (introPath === 0) {
      // If no value is typed in
      if (!input.value) {
        input.placeholder = 'You gotta type in a name, mate'
      } else {
        input.style.display = "none";
        goIntro2(1);
      }
    } else if (introPath === 1) {
      goIntro2(1)
    } else if (introPath === 2) {
      input2.style.display = 'block';
      goIntro2(1)
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
      btnTwo.style.display = "inline-block";
      go(1);
    } else if (path === 13) {
      end(2);
    }
  }, 700);
};

const btnTwoFunction = () => {
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
      btnTwo.style.display = "none";
    } else if (path === 11) {
      end(3);
    } else if (path === 13) {
      end(3);
    }
  }, 700);
};

btnOne.addEventListener("click", btnOneFunction);

input.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 13) {
    btnOneFunction();
    inputValue = input.value;
    }
});

btnTwo.addEventListener("click", btnTwoFunction);

function go(plus) {
  path += plus;
  text.innerText = data[path].question;
  btnOne.innerText = data[path].answers.btnOne;
  btnTwo.innerText = data[path].answers.btnTwo;
};

function goIntro(plus) {
  introPath += plus;
  text.innerText = introData[introPath].text;
};

function goIntro2(plus) {
  // when there are variables used the ifs get executed
  if (introPath === 1) {
    introPath += plus;
    inputValue = input.value;
    introData[introPath].text = `Arriving in ${inputValue}, you drive past your yard to your large empty barn to your front door.`;
    text.innerHTML = introData[introPath].text;
  } else {
    introPath += plus;
    text.innerHTML = introData[introPath].text;
  }
};

function end(plus) {
  path += plus;
  text.innerText = data[path].question;
  btnOne.style.display = "none";
  btnTwo.style.display = "none";
  restart.style.display = "inline-block";
};

restart.addEventListener("click", function() {
  fadeContainer.style.opacity = "1";
  setTimeout(fade, 700);
  setTimeout(function() {
    path = 0;
    btnOne.style.display = "inline-block";
    btnTwo.style.display = "inline-block";
    restart.style.display = "none";
    text.innerText = data[path].question;
    btnOne.innerText = data[path].answers.btnOne;
    btnTwo.innerText = data[path].answers.btnTwo;
  }, 700);
});
