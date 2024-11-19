const questions = [
    {
        'que' : 'Which of the following is a markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavaScript',
        'd' : 'PHP',
        'correct' : 'a',
    },

    {
        'que' : 'What year was JavaScript launched?',
        'a' : '1996',
        'b' : '1995',
        'c' : '1994',
        'd' : 'none of the above',
        'correct' : 'b',
    },

    {
        'que' : 'What does CSS stands for?',
        'a' : 'Hypertext Markup Language',
        'b' : 'Cascading Style Sheet',
        'c' : 'Jason Object Notation',
        'd' : 'Helicopters Terminals Motorboats Lamborginis',
        'correct' : 'b',
    }
]

const quesBox = document.getElementById('quesBox');
const optionsInputs = document.querySelectorAll('.options'); 
let index = 0;
let total = questions.length;
let right = 0, 
    wrong = 0;

const loadQuestion = () => {
    if(index === total){
        return endQuiz();
    }
    reset();
    const data = questions[index];
    quesBox.innerText = `${index+1} ${data.que}`;
    optionsInputs[0].nextElementSibling.innerText = data.a;
    optionsInputs[1].nextElementSibling.innerText = data.b;
    optionsInputs[2].nextElementSibling.innerText = data.c;
    optionsInputs[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer();
    if(ans === data.correct){
        right++;
    }else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionsInputs.forEach(
        (input) => {
            if(input.checked){
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionsInputs.forEach((input) => {
        input.checked = false;
    });
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center;"> 
    <h3> Thank You For Playing Quiz </h3> 
    <h2> ${right} / ${total} are correct </h2>
    </div>`;
}

//initial call
loadQuestion();