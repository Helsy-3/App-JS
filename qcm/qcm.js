const questions = [
                {
                                id: 1,
                                question: 'Qui est Brendan Eich ?',
                                reponses: {
                                                a: 'Le fils de Douglas Eich',
                                                b: 'Le ministre de l\'éducation Finlandaise',
                                                c: 'Le créateur de Javascript',
                                                d: 'L\'inventeur de Chat GPT'
                                },
                                correction: 'c'
                },
                {
                                id: 2,
                                question: 'Javascript a été créé à partir de Java ?',
                                reponses: {
                                                a: 'Vrai',
                                                b: 'Faux',
                                },
                                correction: 'b'
                },
                {
                                id: 3,
                                question: 'Qu\'est ce qu\'un objet en JS ?',
                                reponses: {
                                                a: 'Une paire de clés',
                                                b: 'Une entité cosmique',
                                                c: 'Un conteneur d\'informations',
                                                d: 'Rien d\'intéressant',
                                },
                                correction: 'c'
                }
]

export default questions;

const quizContainer = document.getElementById('quiz-container');
const resultContainer = document.getElementById('result');

function afficherQuestions() {
                questions.forEach(question => {
                                const questionDiv = document.createElement('div');
                                questionDiv.classList.add('question');
                                questionDiv.innerHTML = `<p>${question.id}. ${question.question}</p>`;

                                for (const option in question.reponses) {
                                                const radioInput = document.createElement('input');
                                                radioInput.type = 'radio';
                                                radioInput.name = `question-${question.id}`;
                                                radioInput.value = option;
                                                radioInput.id = `${question.id}-${option}`;

                                                const label = document.createElement('label');
                                                label.htmlFor = `${question.id}-${option}`;
                                                label.textContent = question.reponses[option];

                                                questionDiv.appendChild(radioInput);
                                                questionDiv.appendChild(label);
                                }

                                quizContainer.appendChild(questionDiv);
                });
}

function corriger() {
                const userAnswers = [];
                const questionDivs = document.querySelectorAll('.question');

                questionDivs.forEach(questionDiv => {
                                const selectedOption = questionDiv.querySelector('input:checked');
                                userAnswers.push({
                                                questionId: parseInt(questionDiv.id),
                                                userAnswer: selectedOption ? selectedOption.value : null
                                });
                });

                afficherResultat(userAnswers);
}

function afficherResultat(userAnswers) {
                let score = 0;
                let htmlResult = '<h2>Résultat :</h2>';

                userAnswers.forEach(userAnswer => {
                                const question = questions.find(q => q.id === userAnswer.questionId);

                                if (question.correction === userAnswer.userAnswer) {
                                                score++;
                                                htmlResult += `<p>Question ${question.id} : Correct!</p>`;
                                } else {
                                                htmlResult += `<p>Question ${question.id} : Incorrect. La réponse correcte était ${question.correction}.</p>`;
                                }
                });

                htmlResult += `<p>Score final : ${score} / ${questions.length}</p>`;
                resultContainer.innerHTML = htmlResult;
}

afficherQuestions();