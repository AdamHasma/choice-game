const aEins = document.querySelector('.aEins');
const aZwei = document.querySelector('.aZwei');
const restart = document.querySelector('.restart');
const body = document.querySelector('body');
const titel = document.querySelector('.titel');

let path = 0;

let data = [{
    path: "0",
    question: 'Du bist Andreas und du wirst von zwei bekannten Leuten (Ilyas und Tchadarou) verfolgt. Was machst du?',
    answers: {
      aEins: 'fliehen',
      aZwei: 'sich den beiden stellen'
    }
  },
  {
    path: "1",
    question: 'Du hast verloren. Beide waren dir um weitem überlegen. Besonders im Video Editing.',
    answers: {
      aEins: '',
      aZwei: ''
    }
  },
  {
    path: "2",
    question: 'Du schaffst es vorerst zu fliehen. Doch jetzt steht Muslim vor dir. Er sieht verärgert aus. Was tust du?',
    answers: {
      aEins: 'Um Verzeihung bitten',
      aZwei: 'Sage: "Ich lerne gerade wie man Videos schneidet"'
    }
  },
  {
    path: "3",
    question: 'Muslim ist von deiner Schwäche angeekelt. Er bringt dich um.',
    answers: {
      aEins: '',
      aZwei: ''
    }
  },
  {
    path: "4",
    question: 'Er verschont dich und sagt: "Ok, aber du musst in einem Monat wissen, wie man das Hintergrundrauschen entfernt, sonst werde ich dich umbringen."',
    answers: {
      aEins: 'Bedanke dich und gehe weiter',
      aZwei: 'Sage: "Das schaffe ich doch niemals!"'
    }
  },
  {
    path: "5",
    question: 'Muslim hat die Hoffnung in dir aufgegeben und lässt dich ab sofort in Ruhe. Du hast das Spiel gewonnen, aber um welchen Preis? Du bist immernoch der gleiche loser wie immer.',
    answers: {
      aEins: '',
      aZwei: ''
    }
    // END ==> 1 <==
  },
  {
    path: "6",
    question: 'Du bist auf dem Weg nach Hause und siehst plötzlich eine merkwürdige alte Dame. Sie scheint was von dir zu wollen. Was machst du?',
    answers: {
      aEins: 'Sehen was sie zu sagen hat',
      aZwei: 'Ignorieren und weitergehen'
    }
  },
  {
    path: "7",
    question: '"Um die *röps* ‒ Antwort auf deine Fragen zu finden, musst du nach einem weißen Dreieck in einer roten Fläche suchen!"',
    answers: {
      aEins: 'Gehe ihren Tipp nach und such nach dem Dreieck',
      aZwei: 'Versuche sie zu töten'
    }
  },
  {
    path: "8",
    question: 'Du gehst ihr aus dem Weg. "Oh du arme Seele. Hoffentlich kann dir jemand anderes helfen", sagt sie mit einer sehr rauen Stimme.',
    answers: {
      aEins: 'Versuche sie zu töten',
      aZwei: 'Gehe zu ihr zurück und frage sie wie man dir helfen könnte'
    }
  },
  {
    path: "9",
    question: 'Du holst dein Messer raus und stichst ihr in den Hals. Nach ein paar Sekunden merkst du wa du getan hast. Jetzt fliehst du.',
    answers: {
      aEins: 'Lass ihre Leiche liegen und renn in dein abgelegenes Haus',
      aZwei: 'Schmeiß die Leiche in ein nahgelegenes Teich'
    }
  },
  {
    path: "10",
    question: 'Nach paar mal googlen, hast du 2 Sachen gefunden, Illuminati und Youtube. Welche der beiden Dinge gehst du nach?',
    answers: {
      aEins: 'Illuminati ▲',
      aZwei: 'Youtube ▶'
    }
  },
  {
    path: "11",
    question: 'Weil du nicht im Inkognito Modus nach Illuminati recherchiert hast, wurdest von zwei mysteriösen Männern besucht. Sie fragen: "Wie lautet der Code?"',
    answers: {
      aEins: '666',
      aZwei: 'Erdbeermarmelade'
    }
  },
  {
    path: "12",
    question: 'Du suchst nach "Hintergrundrauschen entfernen". Du wirst fündig und schaffst es nach knapp einem Monat, das Gelernte in Praxis umzusetzen. Jemand klingelt.',
    answers: {
      aEins: 'Tür aufmachen',
      aZwei: ''
    }
  },
  {
    path: "13",
    question: 'Es ist Muslim. Er fragt wie der Stand ist. Wie antwortest du?',
    answers: {
      aEins: '"Ich töte dich jetzt"',
      aZwei: '"Ich habs geschafft. Ich kann jetzt das Hintergrundrauschen entfernen!"'
    }
  },
  {
    path: "14",
    question: '"Falsche Antwort, es gibt keinen." Du stirbst direkt nach diesem Satz.',
    answers: {
      aEins: '',
      aZwei: ''
    }
  },
  {
    path: "15",
    question: 'Er tötet dich zuerst.',
    answers: {
      aEins: '',
      aZwei: ''
    }
  },
  {
    path: "16",
    question: 'Muslim hat gesehen, wie du auf "Ich töte dich jetzt drücken wolltest". Aufgrund dessen tötet er dich. Sorry, aber für Andreas gibt es kein Happy End.',
    answers: {
      aEins: '',
      aZwei: ''
    }
  },
  {
    path: "17",
    question: 'Ein Rentner sah die Leiche kurze Zeit später. Die Polizei ermittelt und ist nach kurzer Zeit erfolgreich. Du sitzt lebenslänglich.',
    answers: {
      aEins: '',
      aZwei: ''
    }
  },
  {
    path: "18",
    question: 'Ein Paar hat die Leiche ein Tag später entdeckt. Die Polizei ermittelt und ist nach kurzer Zeit erfolgreich. Du sitzt lebenslänglich.',
    answers: {
      aEins: '',
      aZwei: ''
    }
  },
]

window.addEventListener('load', function() {
  titel.innerText = data[path].question;
  aEins.innerText = data[path].answers.aEins;
  aZwei.innerText = data[path].answers.aZwei;
});

aEins.addEventListener("click", function() {
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
});

aZwei.addEventListener("click", function() {
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
});

function go(plus) {
  path += plus;
  titel.innerText = data[path].question;
  aEins.innerText = data[path].answers.aEins;
  aZwei.innerText = data[path].answers.aZwei;
};

function end(plus) {
  path += plus;
  titel.innerText = data[path].question;
  aEins.style.display = "none";
  aZwei.style.display = "none";
  restart.style.display = "inline-block";
};

restart.addEventListener("click", function() {
  path = 0;
  aEins.style.display = "inline-block";
  aZwei.style.display = "inline-block";
  restart.style.display = "none";
  titel.innerText = data[path].question;
  aEins.innerText = data[path].answers.aEins;
  aZwei.innerText = data[path].answers.aZwei;
});
