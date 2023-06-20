
const questions = [
    {
        question: "Which of the following tag is used to embed css in html page?",
        choice: ["<css>", "<!DOCTYPE html>", "<script>", "<style>"],
        correct: "<style>"

    },
    {
        question: " Which of the following CSS selector is used to specify a rule to bind a particular unique element?",
        choice: ["tag", "id", "class", " both class and tag"],
        correct: "id"

    },
    {
        question: "Which of the following CSS property is used to make the text bold?",
        choice: ["text-decoration: bold", "font-weight: bold", "font-style: bold", "text-align: bold"],
        correct: "font-weight: bold"

    },
    {
        question: "Which of the following CSS style property is used to specify an italic text?",
        choice: ["style", "font", "font-style", "@font-face"],
        correct: "font-style"

    },
]


const app = document.getElementById('app');
const questionBox = document.getElementById('question');
const answerBtn = document.getElementById('answer-button');
const nextBtn = document.getElementById('next-btn');
const scoreCard = document.getElementById('score');
const alertMsg = document.querySelector('.alert');
const startBtn = document.getElementById('start');
const timer = document.querySelector('.timer');

console.log(alertMsg);
let currentIndex = 0;
let score = 0;
let quizOver = false;
let timeLeft = 15;
let timerId=null;


// Question display function
const showQuestion = () => {
    const questionDetail = questions[currentIndex];
    const QNo = currentIndex + 1;
    questionBox.textContent = QNo + ".) " + questionDetail.question;

    answerBtn.textContent = "";
    for (let i = 0; i < questionDetail.choice.length; i++) {
        const choiceDetail = questionDetail.choice[i];
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = choiceDetail;

        answerBtn.appendChild(button);

        // add click event on buttom which we make in js and give his class selected
        button.addEventListener('click', () => {
            if (button.classList.contains('selected')) {
                button.classList.remove('selected');
            } else {
                button.classList.add('selected');
            }
        });
    }
    if (currentIndex < questions.length) {
        startTimer();
    }
}



// Show alert function

const alertShow = (msg) => {
    alertMsg.style.display = "block";
    alertMsg.textContent = msg;
    setTimeout(() => {
        alertMsg.style.display = "none"
    }, 2000)
}



// Check question is correct or not !!!
const checkQuestion = () => {
    const selectedchoice = document.querySelector('.btn.selected');

    

    if (selectedchoice.textContent === questions[currentIndex].correct) {
        alertShow("Correct Answer Well Done !!!!");
        alertMsg.style.backgroundColor="green";
        score++;


    } else {

        alertShow("Incorrect Answer !!!");
        alertMsg.style.backgroundColor="red";

    }
    timeLeft=15;
    currentIndex++;
    if (currentIndex < questions.length) {

        showQuestion();
    } else {

        scoreDisplay();
        stopQuiz();
        
    }
}

// Left time function


const startTimer = () => {
    clearInterval(timerId);

timer.textContent = timeLeft;
    let countDown = () => {
        timeLeft--;
        timer.textContent = timeLeft;

        if(timeLeft===0){
            const conformBox=confirm("Time is up you Want to restart it !!!");

            if(conformBox){
                timeLeft=15;
                StartQuiz();
            }else{
                startBtn.style.display="block";
                app.style.display="none";
                return;
            }
        }

    }
   timerId= setInterval(countDown, 1000);
}

// Stop Quiz function

const stopQuiz=()=>{
clearInterval(timerId);
}

// Start Quiz Quwstion

const StartQuiz=()=>{
    timeLeft=15;
    timer.style.display="block";
    showQuestion();
}




// ADD event Lisner to Start Btn

startBtn.addEventListener('click', () => {
    startBtn.style.display = "none";
    app.style.display = "block";
    StartQuiz();

})



// Show score function 
const scoreDisplay = () => {
    questionBox.textContent = "";
    answerBtn.textContent = "";

    scoreCard.textContent = `You get ${score} out of ${questions.length}`;
    alertShow("You completed the Quiz");
    nextBtn.textContent = "play Again";
    quizOver=true;
    timer.style.display="none";
}


// Add event linner on next button 


nextBtn.addEventListener('click', () => {

    const selectedAnswer = document.querySelector(' .selected');

    if (!selectedAnswer && nextBtn.textContent === "Next") {

        alertShow("Select your answer");
        return;
    }
    if (quizOver) {
        nextBtn.textContent = "Next";
        currentIndex = 0;
        scoreCard.textContent = "";
        currentIndex = 0;
        StartQuiz();
        quizOver = false;
        score=0;


    }

    else {
        checkQuestion();
    }






})


