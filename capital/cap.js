const apiKey = 'A6DzU71Pe3UlFhAl93LOfvjeNQQuO56oQW6nNyJv';
const apiUrl = `https://countryapi.io/api/all?apikey=${apiKey}`;

let countries = [];
let currentQuestion = 0;
let score = 0;

fetch(apiUrl)
                .then(response => response.json())
                .then(data => {
                                countries = data.data;

                                displayQuestion();
                });

function displayQuestion() {
                const randomCountry = countries[Math.floor(Math.random() * countries.length)];

                document.getElementById('country-name').textContent = randomCountry.name;
                document.getElementById('flag').src = randomCountry.flag;

                document.getElementById('submit-btn').addEventListener('click', () => {
                                const userAnswer = document.getElementById('capital-input').value.trim().toLowerCase();
                                const correctAnswer = randomCountry.capital.toLowerCase();

                                if (userAnswer === correctAnswer) {
                                                document.getElementById('result').textContent = 'Correct!';
                                                score++;
                                } else {
                                                document.getElementById('result').textContent = 'Incorrect. The correct answer is: ' + correctAnswer;
                                }

                                currentQuestion++;

                                if (currentQuestion < 10) {
                                                displayQuestion();
                                } else {
                                                document.getElementById('question-container').innerHTML = `<h2>Fin du QCM. Votre score est de ${score}/10.</h2>`;
                                }
                });

                document.getElementById('next-btn').addEventListener('click', () => {
                                displayQuestion();
                });
}


