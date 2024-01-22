const button = document.querySelector("button");
const quizChallenges = document.getElementById("quiz-challenges");

const answerKey1 = document.getElementById("answer-key-1");
const answerKey2 = document.getElementById("answer-key-2");
const answerKey3 = document.getElementById("answer-key-3");

button.addEventListener("click", function(){
    const newChallenge = document.createElement("div");
    let correctAnswer;

    const question = document.getElementById("question").value;

    const option1 = document.getElementById("option-1").value;
    const option2 = document.getElementById("option-2").value;
    const option3 = document.getElementById("option-3").value;

    const questionElement = document.createElement("h1");
    const optionsElement = document.createElement("select");
    const chooseAnOptionElement = document.createElement("option");
    const option1Element = document.createElement("option");
    const option2Element = document.createElement("option");
    const option3Element = document.createElement("option");

    questionElement.innerText = question;
    chooseAnOptionElement.innerText = "Choose an Option";
    option1Element.innerText = option1;
    option2Element.innerText = option2;
    option3Element.innerText = option3;
 
    
    isNull = question == "" || option1 == "" || option2 == "" || option3 == "" || (!answerKey1.checked && !answerKey2.checked && !answerKey3.checked);
    
    if(isNull){
        alert("Please enter the question, all answers, and indicate the answer key.");
        return
    }

    optionsElement.appendChild(chooseAnOptionElement);
    optionsElement.appendChild(option1Element);
    optionsElement.appendChild(option2Element);
    optionsElement.appendChild(option3Element);

    newChallenge.appendChild(questionElement);
    newChallenge.appendChild(optionsElement);
    newChallenge.classList.add("challenge");
    quizChallenges.appendChild(newChallenge);

    if (answerKey1.checked) {
        correctAnswer = option1;
    } else if (answerKey2.checked) {
        correctAnswer = option2;
    } else if (answerKey3.checked) {
        correctAnswer = option3;
    }
    
    answerKey1.checked = false;
    answerKey2.checked = false;
    answerKey3.checked = false;

    document.getElementById("question").value = "";
    document.getElementById("option-1").value = "";
    document.getElementById("option-2").value = "";
    document.getElementById("option-3").value = "";

    

    optionsElement.addEventListener("change", function(event) {
        const selectedOption = event.target.value;

        switch(selectedOption) {
            case "Choose an Option":
                newChallenge.style.backgroundColor = "";
                break;
            case correctAnswer:
                newChallenge.style.backgroundColor = "#00FA9A";
                break;
            default:
                newChallenge.style.backgroundColor = "#FF6347";
                break;
        }
    });

});

function handleCheckboxChange() {
    if (this.checked) {
        if (this !== answerKey1) {
            answerKey1.checked = false;
        }
        if (this !== answerKey2) {
            answerKey2.checked = false;
        }
        if (this !== answerKey3) {
            answerKey3.checked = false;
        }
    }
}

answerKey1.addEventListener("change", handleCheckboxChange);
answerKey2.addEventListener("change", handleCheckboxChange);
answerKey3.addEventListener("change", handleCheckboxChange);