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
    },
    {
      question: "Ποιο εργαλείο χρησιμοποιεί ο οδοντίατρος για να καθαρίσει τα δόντια;",
      answers: ['Κατσαβίδι', 'Οδοντιατρικός καθαριστής', 'Πινέλο', 'Πιρούνι'],
      correct: 1
    },
    {
      question: "Πότε πρέπει να πάμε στον οδοντίατρο;",
      answers: ['Μόνο όταν πονάμε', 'Μία φορά το μήνα', 'Δύο φορές το χρόνο', 'Ποτέ'],
      correct: 2
    },
    {
      question: "Ποιο από αυτά βοηθάει στην καθαριότητα των δοντιών;",
      answers: ['Μολύβι', 'Οδοντικό νήμα', 'Μπαλόνι', 'Τηλεόραση'],
      correct: 1
    },
    {
      question: "Τι χρώμα έχουν συνήθως τα υγιή δόντια;",
      answers: ['Καφέ', 'Κίτρινα', 'Λευκά', 'Μαύρα'],
      correct: 2
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
    },
    {
      question: "Ποιο είναι το σωστό βήμα μετά το βούρτσισμα των δοντιών;",
      answers: ['Κατανάλωση γλυκού', 'Χρήση οδοντικού νήματος', 'Πλύσιμο με σαπούνι', 'Ξαναβούρτσισμα αμέσως'],
      correct: 1
    },
    {
      question: "Η τερηδόνα προκαλείται κυρίως από:",
      answers: ['Φρούτα', 'Καθαρό νερό', 'Βακτήρια και σάκχαρα', 'Γάλα'],
      correct: 2
    },
    {
      question: "Ποια είναι η σωστή κατεύθυνση για να βουρτσίζουμε τα δόντια μας;",
      answers: ['Οριζόντια μπρος-πίσω', 'Κυκλικά και από τα ούλα προς τα κάτω/πάνω', 'Μόνο πάνω', 'Χωρίς να τα αγγίζουμε'],
      correct: 1
    },
    {
      question: "Η μακροχρόνια παραμέληση της στοματικής υγιεινής μπορεί να οδηγήσει σε:",
      answers: ['Μακριά δόντια', 'Περιοδοντίτιδα', 'Αυξημένη όραση', 'Ασθένειες του αυτιού'],
      correct: 1
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
    },
    {
      question: "Ποιος είναι ο ρόλος του σάλιου στην στοματική υγεία;",
      answers: ['Βοηθά στην απορρόφηση ζάχαρης', 'Καθαρίζει και προστατεύει από τα βακτήρια', 'Καταστρέφει δόντια', 'Αδιαφορεί'],
      correct: 1
    },
    {
      question: "Ποια τροφή ενισχύει το σμάλτο των δοντιών;",
      answers: ['Αναψυκτικά', 'Γαλακτοκομικά', 'Γλυκά', 'Πατατάκια'],
      correct: 1
    },
    {
      question: "Η χρήση στοματικού διαλύματος:",
      answers: ['Είναι άχρηστη', 'Αντικαθιστά το βούρτσισμα', 'Συμπληρώνει το βούρτσισμα και μειώνει τα βακτήρια', 'Χρησιμοποιείται μόνο το πρωί'],
      correct: 2
    },
    {
      question: "Τι είναι η απονεύρωση;",
      answers: ['Καθαρισμός των ούλων', 'Εξαγωγή χαλασμένου δοντιού', 'Αφαίρεση του νεύρου από το δόντι', 'Τοποθέτηση εμφυτεύματος'],
      correct: 2
    }
  ]
};


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
<img id="diff-image" src="deer-two-images.png" onload="initFindDifferences()" />
<p id="found-msg"></p>

<script>
function initFindDifferences () {
  const img = document.getElementById('diff-image');

  /*  Συντεταγμένες διαφορών ως προς το
      ΠΑΝΩ‑ΑΡΙΣΤΕΡΟ της ΚΑΤΩ εικόνας  */
  const differences = [
   (-43, -39),   # 1
    (51, -28),    # 2
    (46, -150),   # 3
    (-25, -116),  # 4
    (90, -86)     # 5    
  ];

  const RADIUS = 25;           // εμβαδό «κλικ επιτυχίας» σε px
  const found  = new Set();    // αποθήκευση ευρυμάτων

  img.addEventListener('click', (e) => {
    const rect = img.getBoundingClientRect();

    // Συνολικές συντεταγμένες click μέσα στην εικόνα
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Αν το κλικ είναι στο επάνω μισό, το αγνοούμε
    if (y < rect.height / 2) return;

    // Συντεταγμένες ως προς την ΚΑΤΩ εικόνα
    const localX = x;
    const localY = y - rect.height / 2;

    differences.forEach((diff, idx) => {
      const dx = localX - diff.x;
      const dy = localY - diff.y;

      if (!found.has(idx) && Math.hypot(dx, dy) < RADIUS) {
        found.add(idx);
        alert('Μπράβο! Βρήκες μια διαφορά!');

        if (found.size === differences.length) {
          document.getElementById('found-msg').innerText =
            '🎉 Μπράβο! Τα βρήκες όλα!';
        }
      }
    });
  });
}
</script>


// -----------------------------
// ΕΜΦΑΝΙΣΗ ΕΡΩΤΗΣΗΣ
// -----------------------------
function goBack() {
  // Κρύβει όλες τις ενότητες που μπορεί να είναι ενεργές
  document.getElementById('find-differences').style.display = 'none';
  document.getElementById('quiz').style.display = 'none';
  document.getElementById('result').style.display = 'none';

  // Εμφανίζει την αρχική επιλογή ηλικίας
  document.getElementById('age-select').style.display = 'block';

  // Σταματάει το χρονόμετρο αν υπάρχει
  if (typeof timerInterval !== 'undefined' && timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
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
      `Λάθος! Σωστό: ${currentQuiz[currentQuestion].answers[correct]}`;
  }

  selected = null;
  currentQuestion++;

  if (currentQuestion < currentQuiz.length) {
    setTimeout(showQuestion, 1000);
  } else {
    clearInterval(timerInterval);
    const timeTaken = Math.floor((Date.now() - startTime) / 1000);
    document.getElementById('quiz').innerHTML =
      `<h2>Τέλος! Σωστές: ${score}/${currentQuiz.length}</h2><p>Χρόνος: ${timeTaken} δευτ.</p>`;
  }
};

// -----------------------------
// ΧΡΟΝΟΜΕΤΡΟ
// -----------------------------
function updateTimer() {
  const elapsed = Math.floor((Date.now() - startTime) / 1000);
  document.getElementById('timer').innerText = `Χρόνος: ${elapsed} δευτ.`;
}
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('btn-5-7').addEventListener('click', () => startQuiz('5-7'));
  document.getElementById('btn-7-11').addEventListener('click', () => startQuiz('7-11'));
  document.getElementById('btn-11-16').addEventListener('click', () => startQuiz('11-16'));
  document.getElementById('btn-16plus').addEventListener('click', () => startQuiz('16+'));
});
