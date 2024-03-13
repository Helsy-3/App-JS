// Méthode avec async et await

const quoteZone = document.getElementsByClassName('quote')[0];
const refresh = document.getElementsByClassName('btn-refresh')[0];

async function getQuoteRandom() {
  var random = Math.floor(Math.random() * 1643);
  quoteZone.innerHTML = '';

  try {
    const response = await axios.get('https://type.fit/api/quotes');

    const randomQuote = response.data[random];
    const content = randomQuote.text;
    const author = randomQuote.author;


    const h1 = document.createElement("h2")
    const textnode = document.createTextNode("\" " + content + " \"")

    const h2 = document.createElement("h3")
    if (author == null) {
      authornode = document.createTextNode('...')
    } else {
      authornode = document.createTextNode(author)
    }

    h1.appendChild(textnode);
    h2.appendChild(authornode);

    quoteZone.appendChild(h1);
    quoteZone.appendChild(h2);

  } catch (error) {
    console.error(error);
  }
}

getQuoteRandom();
refresh.addEventListener('click', getQuoteRandom);

// Méthode avec then()

// const quoteZone = document.querySelector('.quote')
// const refresh = document.querySelector('.btn-refresh')

// const api = 'https://type.fit/api/quotes'

// const quote = document.createElement('q')
// const author = document.createElement('p')


// function getRandom() {
//   axios.get(api)
//   .then((res) => {
//     const data = res.data
//     return data
//   })
//   .then(data => {
//     const randomIndex = Math.floor(Math.random() * data.length +1)

//     const randomQuote = data[randomIndex]

//     quote.textContent = randomQuote.text 
//     author.textContent = randomQuote.author

//     quoteZone.appendChild(quote)
//     quoteZone.appendChild(author)
//   })
//   .catch(e => console.log(e))
// }

// getRandom()
// refresh.addEventListener('click', getRandom)


// Stocker la citation actuelle dans le localStorage
localStorage.setItem('currentQuote', JSON.stringify(randomQuote));
} catch (error) {
  console.error('Erreur lors de la récupération de la citation:', error.message);
}
}

// Événement du bouton de rafraîchissement
refreshButton.addEventListener('click', fetchQuote);

// Charger la dernière citation stockée dans le localStorage au chargement de la page
const storedQuote = localStorage.getItem('currentQuote');
if (storedQuote) {
  const parsedQuote = JSON.parse(storedQuote);
  quoteTextElement.textContent = parsedQuote.text;
  quoteAuthorElement.textContent = `— ${parsedQuote.author || 'Anonyme'}`;
} else {
  // Si aucune citation n'est stockée, récupérer une nouvelle citation
  fetchQuote();
}
});
