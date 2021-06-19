const btnOne = document.querySelector('.btn-one');
const btnTwo = document.querySelector('.btn-two');
const restart = document.querySelector('.restart');
const body = document.querySelector('body');
const text = document.querySelector('.text');
const title = document.querySelector('.title');
const fadeContainer = document.querySelector('.fade-container');
const input = document.getElementById("input");
const input2 = document.getElementById("input-2");

let inputValue = "Test";
let inputValue2 = "Test";

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

async function getData() {
  const response = await fetch('dasPaketData.json');
  dasPaketData = await response.json();
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
      input.focus();
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
      input2.focus();
      goIntro2(1)
    } else if (introPath === 3) {
      go(1);
    }

    if (path === 0) {
      input2.style.display = 'none';
      btnTwo.style.display = 'block';
      document.querySelector(".btn-two > button").disabled = true;
      go(0);
    } else if (path === 1) {
      btnTwo.style.display = 'none';
      go(0);
    } else if (path === 2) {
      btnTwo.style.display = 'block';
      document.querySelector(".btn-two > button").disabled = true;
      go(0);
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
    }
  }, 700);
};

btnOne.addEventListener("click", btnOneFunction);

// Go on by pressing enter
input2.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 13) {
    btnOneFunction();
    inputValue2 = input2.value;
    }
});
input.addEventListener("keyup", event => {
  if (event.isComposing || event.keyCode === 13) {
    btnOneFunction();
    inputValue = input.value;
    }
});

btnTwo.addEventListener("click", btnTwoFunction);

function go(plus) {
  path += plus;
  text.innerText = dasPaketData[path].question;
  document.querySelector(".btn-one > button").innerText = dasPaketData[path].answers.btnOne;
  document.querySelector(".btn-two > button").innerText = dasPaketData[path].answers.btnTwo;
  if (path === 0) {
    inputValue2 = input2.value;
    title.innerHTML = `Chapter 1`;
  }
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
