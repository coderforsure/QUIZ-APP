const quizData = [
  // LEVEL 1
  [
    { q: "HTML stands for?", o: ["Hyper Text Markup Language", "High Text Machine", "Hyperlinks", "None"], a: 0 },
    { q: "CSS is used for?", o: ["Logic", "Styling", "Database", "Server"], a: 1 },
    { q: "JS is a?", o: ["Markup", "Styling", "Programming", "Database"], a: 2 },
    { q: "Which runs in browser?", o: ["Java", "C", "Python", "JavaScript"], a: 3 },
    { q: "HTML tag for heading?", o: ["<p>", "<h1>", "<div>", "<span>"], a: 1 },
    { q: "CSS file extension?", o: [".html", ".js", ".css", ".txt"], a: 2 },
    { q: "JS file extension?", o: [".java", ".js", ".py", ".c"], a: 1 },
    { q: "Web pages use?", o: ["HTML", "C", "Java", "Python"], a: 0 }
  ],

  // LEVEL 2–5 (same structure, you can change questions)
  ...Array(4).fill([
    { q: "TCP/IP is?", o: ["Protocol", "Language", "Hardware", "OS"], a: 0 },
    { q: "HTTP is?", o: ["Protocol", "Database", "Browser", "OS"], a: 0 },
    { q: "Port 80 is for?", o: ["FTP", "HTTP", "HTTPS", "SSH"], a: 1 },
    { q: "IP address is?", o: ["Identity", "Hardware", "Cable", "Browser"], a: 0 },
    { q: "Browser example?", o: ["Chrome", "Linux", "MySQL", "Node"], a: 0 },
    { q: "HTTPS means?", o: ["Secure", "Slow", "Private", "None"], a: 0 },
    { q: "LAN is?", o: ["Local", "Global", "Wide", "Public"], a: 0 },
    { q: "Router is?", o: ["Device", "Protocol", "Software", "Language"], a: 0 }
  ])
];

let level = 0;
let index = 0;
let score = 0;

function startLevel(l) {
  level = l;
  index = 0;
  score = 0;
  document.getElementById("level-box").classList.add("hidden");
  document.getElementById("quiz-box").classList.remove("hidden");
  loadQuestion();
}

function loadQuestion() {
  const q = quizData[level][index];
  document.getElementById("question").innerText = q.q;

  document.querySelectorAll("#options button").forEach((btn, i) => {
    btn.innerText = q.o[i];
  });

  document.getElementById("progress-bar").style.width =
    ((index / 8) * 100) + "%";
}

function selectOption(i) {
  if (i === quizData[level][index].a) score++;
  index++;

  if (index < 8) {
    loadQuestion();
  } else {
    document.getElementById("quiz-box").innerHTML =
      `<h2>Level Completed</h2>
       <p>Score: ${score} / 8</p>
       <button onclick="location.reload()">Back to Levels</button>`;
  }
}
