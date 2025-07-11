const quizzes = {
  '5-7': [
    {
      question: "Ποιο είναι το πιο μεγάλο ζώο;",
      answers: ["Γάτα", "Σκύλος", "Φάλαινα", "Ποντίκι"],
      correct: 2
    }
  ],
  '7-11': [
    {
      question: "Ποια είναι πόλη της Γαλλίας;",
      answers: ["Αθήνα", "Παρίσι", "Ρώμη", "Λονδίνο"],
      correct: 1
    }
  ],
  '11-16': [
    {
      question: "Ποιο είναι το χημικό σύμβολο του νερού;",
      answers: ["Ο2", "CO2", "NaCl", "H2O"],
      correct: 3
    }
  ],
  '16+': [
    {
      question: "Σε ποια ήπειρο βρίσκεται η Χιλή;",
      answers: ["Ασία", "Νότια Αμερική", "Αφρική", "Ωκεανία"],
      correct: 1
    }
  ]
};

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let startTime;
let timerInterval;

function startQuiz(ageGroup) {
  currentQuiz = quizzes[ageGroup];
  currentQuestion = 0;
  score = 0;
  startTime = Date.now();
  document.getElementById('age-select').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  showQuestion();
  timerInterval = setInterval(updateTimer, 1000);
}

function showQuestion() {
  const q = currentQuiz[currentQuestion];
  document.getElementById('question').innerText = q.question;

  const answersDiv = document.getElementById('answers');
  answersDiv.innerHTML = '';

  q.answers.forEach((ans, idx) => {
    const btn = document.createElement('button');
    btn.innerText = ans;
    btn.onclick = () => selectAnswer(idx);
    answersDiv.appendChild(btn);
  });

  document.getElementById('result').innerText = '';
}

let selected = null;

function selectAnswer(idx) {
  selected = idx;
  const buttons = document.querySelectorAll('#answers button');
  buttons.forEach((btn, i) => {
    btn.style.background = i === idx ? '#ffc107' : '#17a2b8';
  });
}

document.getElementById('submitBtn').onclick = () => {
  if (selected === null) {
    alert("Επίλεξε μια απάντηση!");
    return;
  }
  const correct = currentQuiz[currentQuestion].correct;
  if (selected === correct) {
    document.getElementById('result').innerText = "Σωστό!";
    score++;
  } else {
    document.getElementById('result').innerText = `Λάθος! Σωστό: ${currentQuiz[currentQuestion].answers[correct]}`;
  }

  selected = null;
  currentQuestion++;

  if (currentQuestion < currentQuiz.length) {
    setTimeout(showQuestion, 1000);
  } else {
    clearInterval(timerInterval);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('quiz').innerHTML = `<h2>Τέλος! Σωστές: ${score}/${currentQuiz.length}</h2><p>Χρόνος: ${timeTaken} δευτ.</p>`;
  }
};

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById('timer').innerText = `Χρόνος: ${elapsed} δευτ.`;
}
