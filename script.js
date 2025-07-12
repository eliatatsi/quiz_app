// -----------------------------
// ΕΡΩΤΗΣΕΙΣ ΟΔΟΝΤΙΑΤΡΙΚΟΥ ΠΕΡΙΕΧΟΜΕΝΟΥ
// -----------------------------
const quizzes = {
  '7-11': [
    {
      question: "Πόσες φορές την ημέρα πρέπει να βουρτσίζουμε τα δόντια μας;",
      answers: ['Μία', 'Δύο', 'Τρεις', 'Δεν χρειάζεται'],
      correct: 1
    },
    {
      question: "Ποιο γεύμα είναι πιο βλαβερό για τα δόντια αν δεν τα βουρτσίσουμε μετά;",
      answers: ['Πρωινό', 'Μεσημεριανό', 'Βραδινό', 'Κανένα'],
      correct: 2
    },
    {
      question: "Πώς λέγονται τα πρώτα δόντια που έχουμε όταν είμαστε μικροί;",
      answers: ['Βοηθητικά', 'Νεογιλές οδοντοστοιχίες', 'Γαλακτικά', 'Μόνιμα'],
      correct: 2
    },
    {
      question: "Τι κάνει η ζάχαρη στα δόντια μας;",
      answers: ['Τα καθαρίζει', 'Τα δυναμώνει', 'Μπορεί να προκαλέσει τερηδόνα', 'Δεν έχει επίδραση'],
      correct: 2
    },
    {
      question: "Ποιο από αυτά βοηθάει να κρατήσουμε τα δόντια καθαρά;",
      answers: ['Αναψυκτικά', 'Καρότα', 'Καραμέλες', 'Σοκολάτα'],
      correct: 1
    }
  ],

  '11-16': [
    {
      question: "Ποιο συστατικό στην οδοντόκρεμα βοηθά στην πρόληψη της τερηδόνας;",
      answers: ['Ασβέστιο', 'Βιταμίνη C', 'Φθόριο', 'Μαγνήσιο'],
      correct: 2
    },
    {
      question: "Η «πλάκα» (plaque) είναι…",
      answers: [
        'Σκληρό οστό',
        'Μαλακό στρώμα βακτηρίων πάνω στα δόντια',
        'Μία μορφή τερηδόνας',
        'Άλλο όνομα για τα ούλα'
      ],
      correct: 1
    },
    {
      question: "Πόση ώρα συνιστούν οι οδοντίατροι να βουρτσίζουμε τα δόντια μας κάθε φορά;",
      answers: ['30 δευτερόλεπτα', '1 λεπτό', '2 λεπτά', '5 λεπτά'],
      correct: 2
    },
    {
      question: "Τι μπορεί να προκαλέσει η συχνή κατανάλωση όξινων ποτών (π.χ. αναψυκτικά);",
      answers: ['Λεύκανση', 'Διάβρωση σμάλτου', 'Ενδυνάμωση ούλων', 'Καμία αλλαγή'],
      correct: 1
    },
    {
      question: "Σε ποια ηλικία ξεκινά συνήθως η ανατολή των φρονιμιτών (σωφρονιστήρων);",
      answers: ['Γύρω στα 9‑10', 'Γύρω στα 12‑13', 'Γύρω στα 17‑25', 'Μετά τα 30'],
      correct: 2
    }
  ],

  '16+': [
    {
      question: "Η ουλίτιδα είναι φλεγμονή…",
      answers: ['του σμάλτου', 'των ούλων', 'της ρίζας', 'της γλώσσας'],
      correct: 1
    },
    {
      question: "Ποια είναι η κύρια αιτία της περιοδοντίτιδας;",
      answers: [
        'Κληρονομικότητα',
        'Βακτηριακή πλάκα που δεν αφαιρείται',
        'Έλλειψη ασβεστίου',
        'Πάρα πολλά φρούτα στη διατροφή'
      ],
      correct: 1
    },
    {
      question: "Τι υλικό χρησιμοποιείται συχνότερα για λευκές σφραγίσεις (fillings);",
      answers: ['Αμάλγαμα', 'Ρητίνη σύνθεσης (composite)', 'Χρυσός', 'Πορσελάνη'],
      correct: 1
    },
    {
      question: "Ποιος παράγοντας αυξάνει σημαντικά τον κίνδυνο καρκίνου στόματος;",
      answers: ['Υψηλή πρόσληψη νερού', 'Τακτική άσκηση', 'Κάπνισμα και αλκοόλ', 'Κατανάλωση γαλακτοκομικών'],
      correct: 2
    },
    {
      question: "Ποιο τεστ χρησιμοποιεί συχνά ο οδοντίατρος για να ελέγξει τη ζωτικότητα του πολφού;",
      answers: ['Τεστ κρύου αέρα', 'MRI', 'Εξέταση αίματος', 'Υπέρηχος'],
      correct: 0
    }
  ]
};

// -----------------------------
// Ο ΥΠΟΛΟΙΠΟΣ ΚΩΔΙΚΑΣ ΣΟΥ ΠΑΡΑΜΕΝΕΙ ΟΠΩΣ ΕΙΝΑΙ
// (startQuiz, showQuestion, selectAnswer, χρονομέτρηση κ.λπ.)
// -----------------------------


// -----------------------------
// ΒΑΣΙΚΕΣ ΜΕΤΑΒΛΗΤΕΣ
// -----------------------------

let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let startTime;
let timerInterval;
let selected = null;

// -----------------------------
// ΕΝΑΡΞΗ QUIZ
// -----------------------------

function startQuiz(ageGroup) {
  if (ageGroup === '5-7') {
    document.getElementById('age-select').style.display = 'none';
    document.getElementById('find-differences').style.display = 'block';
    initFindDifferences();
    return;
  }

  currentQuiz = quizzes[ageGroup];
  currentQuestion = 0;
  score = 0;
  selected = null;
  startTime = Date.now();
  document.getElementById('age-select').style.display = 'none';
  document.getElementById('quiz').style.display = 'block';
  showQuestion();
  timerInterval = setInterval(updateTimer, 1000);
}

// -----------------------------
// FIND THE DIFFERENCES GAME
// -----------------------------

function initFindDifferences() {
  const image = document.getElementById('diff-image');

  const differences = [
    { x: -43, y: -39 },
    { x: 51, y: -28 },
    { x: 46, y: -150 },
    { x: -25, y: -116 },
    { x: 90, y: -86 }
  ];

  const radius = 90; 
  const found = [];

  image.addEventListener('click', (e) => {
    const rect = image.getBoundingClientRect();
    const clickX = e.clientX - rect.left - rect.width / 2;
    const clickY = e.clientY - rect.top - rect.height / 2;

    differences.forEach(diff => {
      const dx = clickX - diff.x;
      const dy = clickY - diff.y;
      if (Math.sqrt(dx * dx + dy * dy) < radius && !found.includes(diff)) {
        found.push(diff);
        alert('Μπράβο! Βρήκες μια διαφορά!');
        if (found.length === differences.length) {
          document.getElementById('found-msg').innerText = "🎉 Μπράβο! Τα βρήκες όλα!";
        }
      }
    });
  });
}

// -----------------------------
// ΕΜΦΑΝΙΣΗ ΕΡΩΤΗΣΗΣ
// -----------------------------

function goBack() {
  document.getElementById('find-differences').style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('age-select').style.display = 'block';
  clearInterval(timerInterval);
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

// -----------------------------
// ΕΠΙΛΟΓΗ ΑΠΑΝΤΗΣΗΣ
// -----------------------------

function selectAnswer(idx) {
  selected = idx;
  const buttons = document.querySelectorAll('#answers button');
  buttons.forEach((btn, i) => {
    btn.style.background = i === idx ? '#ffc107' : '#17a2b8';
  });
}

// -----------------------------
// ΥΠΟΒΟΛΗ ΑΠΑΝΤΗΣΗΣ
// -----------------------------

document.getElementById('submitBtn').onclick = () => {
  if (selected === null) {
    document.getElementById('result').innerText = "⚠️ Επίλεξε μια απάντηση!";
    return;
  }

  const correct = currentQuiz[currentQuestion].correct;
  if (selected === correct) {
    document.getElementById('result').innerText = "Σωστό!";
    score++;
  } else {
    document.getElementById('result').innerText =
      Λάθος! Σωστό: ${currentQuiz[currentQuestion].answers[correct]};
  }

  selected = null;
  currentQuestion++;

  if (currentQuestion < currentQuiz.length) {
    setTimeout(showQuestion, 1000);
  } else {
    clearInterval(timerInterval);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('quiz').innerHTML =
      <h2>Τέλος! Σωστές: ${score}/${currentQuiz.length}</h2><p>Χρόνος: ${timeTaken} δευτ.</p>;
  }
};

// -----------------------------
// ΧΡΟΝΟΜΕΤΡΟ
// -----------------------------

function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById('timer').innerText = Χρόνος: ${elapsed} δευτ.;
}


