const quizData = [
  {
    question: "Who is known as the 'Father of the Indian Constitution'?",
    options: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar"],
    answer: 3
  },
  {
    question: "Which river is the longest in India?",
    options: ["Godavari", "Brahmaputra", "Ganga", "Yamuna"],
    answer: 2
  },
  {
    question: "Which city is known as the 'Silicon Valley of India'?",
    options: ["Mumbai", "Bengaluru", "Chennai", "Hyderabad"],
    answer: 1
  },
  {
    question: "Who was the first Prime Minister of independent India?",
    options: ["Lal Bahadur Shastri", "Mahatma Gandhi", "Jawaharlal Nehru", "Rajendra Prasad"],
    answer: 2
  },
  {
    question: "Which Indian state is the largest by area?",
    options: ["Uttar Pradesh", "Maharashtra", "Madhya Pradesh", "Rajasthan"],
    answer: 3
  },
  {
    question: "Which monument is known as the symbol of love in India?",
    options: ["Qutub Minar", "Taj Mahal", "Red Fort", "India Gate"],
    answer: 1
  },
  {
    question: "Which Indian festival is known as the 'Festival of Lights'?",
    options: ["Holi", "Diwali", "Navratri", "Eid"],
    answer: 1
  },
  {
    question: "Which Indian scientist won the Nobel Prize in Physics in 1930?",
    options: ["Vikram Sarabhai", "C. V. Raman", "A. P. J. Abdul Kalam", "Homi Bhabha"],
    answer: 1
  },
  {
    question: "Which Indian state has the highest literacy rate?",
    options: ["Punjab", "Goa", "Kerala", "Tamil Nadu"],
    answer: 2
  },
  {
    question: "Which Indian space agency launched the Chandrayaan missions?",
    options: ["SpaceX", "DRDO", "NASA", "ISRO"],
    answer: 3
  }
];

let currentQuestion = 0;
let score = 0;

const questionBox = document.getElementById("question-box");
const optionsList = document.getElementById("options-list");
const nextBtn = document.getElementById("next-btn");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("score-display");

function loadQuestion() {
  const q = quizData[currentQuestion];
  questionBox.innerText = q.question;
  optionsList.innerHTML = "";
  feedback.innerText = "";

  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.innerText = option;
    li.onclick = () => checkAnswer(index);
    optionsList.appendChild(li);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  if (selected === correct) {
    score++;
    feedback.innerText = "✅ Correct!";
  } else {
    feedback.innerText = `❌ Wrong! Correct answer: ${quizData[currentQuestion].options[correct]}`;
  }
  nextBtn.style.display = "block";
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    questionBox.innerText = "Quiz Completed!";
    optionsList.innerHTML = "";
    feedback.innerText = "";
    scoreDisplay.innerText = `Your Score: ${score} / ${quizData.length}`;
    nextBtn.style.display = "none";
  }
};

loadQuestion();

