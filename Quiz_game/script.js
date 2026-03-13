const initialscreen = document.getElementById("initial-screen");
const startbtn = document.getElementById("start-btn");
const questionscreen = document.getElementById("question-screen");
const questiontext = document.getElementById("question-text");
const currentquestionspan = document.getElementById("current-question");
const totalquestionspan = document.getElementById("total-question");
const questionscorespan = document.getElementById("question-score");
const questionoptions = document.getElementById("question-options");
const progress = document.getElementById("progress");
const resultscreen = document.getElementById("result-screen");
const currentscorespan = document.getElementById("current-score");
const totalscorespan = document.getElementById("total-score");
const restartbtn = document.getElementById("restart-btn");
const resultmessage = document.getElementById("result-message");
const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Trainer Marking Language",
      "Hyper Text Markup Language",
      "Hyper Text Marketing Language",
      "Hyper Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },
  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "JQL", "CSS", "XML"],
    answer: "CSS",
  },
  {
    question: "Which language is used for web app logic?",
    options: ["Python", "Java", "JavaScript", "C++"],
    answer: "JavaScript",
  },
  {
    question: "Which HTML tag is used to create a hyperlink?",
    options: ["<a>", "<link>", "<href>", "<hyperlink>"],
    answer: "<a>",
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["font-color", "text-color", "color", "background-color"],
    answer: "color",
  },
  {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Apple"],
    answer: "Netscape",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "**", "##"],
    answer: "//",
  },
  {
    question: "Which HTML element is used for the largest heading?",
    options: ["<h6>", "<heading>", "<h1>", "<head>"],
    answer: "<h1>",
  },
  {
    question: "Which CSS property controls text size?",
    options: ["text-style", "font-size", "text-size", "font-style"],
    answer: "font-size",
  },
  {
    question: "Which method is used to select an element by ID in JavaScript?",
    options: [
      "querySelectorAll()",
      "getElementByClass()",
      "getElementById()",
      "getElement()",
    ],
    answer: "getElementById()",
  },
];

questions.sort(() => Math.random() - 0.5);
let currentquestionindex = 0;
let score = 0;

totalquestionspan.textContent = questions.length;

startbtn.addEventListener("click", quizstart);

function quizstart() {
  initialscreen.classList.remove("active");
  questionscreen.classList.add("active");

  showquestionscreen();
}

function showquestionscreen() {
  let currentquestion = questions[currentquestionindex];
  questiontext.textContent = currentquestion.question;
  currentquestionspan.textContent = currentquestionindex + 1;
  questionoptions.innerHTML = "";
  let progressbar = (currentquestionindex / questions.length) * 100;
  progress.style.width = progressbar + "%";

  currentquestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("question-btn");
    button.addEventListener("click", () => {
      const allbutton = document.querySelectorAll(".question-btn");
      if (option === currentquestion.answer) {
        score++;
        questionscorespan.textContent = score;
        button.classList.add("correct");
      } else {
        button.classList.add("incorrect");
      }
      allbutton.forEach((btn) => {
        if (btn.textContent === currentquestion.answer) {
          btn.classList.add("correct");
        }
        btn.disabled = true;
      });
      setTimeout(() => {
        currentquestionindex++;
        if (currentquestionindex < questions.length) {
          showquestionscreen();
        } else {
          showreult();
        }
      }, 1000);
    });

    questionoptions.appendChild(button);
  });
}

function showreult() {
  questionscreen.classList.remove("active");
  resultscreen.classList.add("active");
  currentscorespan.innerText = score;
  totalscorespan.innerText = questions.length;
  if (score < 3) {
    resultmessage.innerText = "Try Again 😅 ";
  } else if (score >= 3 && score < 7) {
    resultmessage.innerText = "Good 👍 ";
  } else {
    resultmessage.innerText = "Excellent 🎉";
  }
}

restartbtn.addEventListener("click", () => {
  currentquestionindex = 0;
  score = 0;
  resultscreen.classList.remove("active");
  initialscreen.classList.add("active");
  questionscorespan.textContent = 0;
});
