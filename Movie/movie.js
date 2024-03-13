// APP VIDÉO + API

// 1) Faire le HTML / CSS 

// 2) Récup les éléments depuis JS

// 3) Faire la recherche de film (on recup ce qu'il y a dans l'input 
// et on fait une requete http)

// 4) On affiche les films 

// 5) On crée un bouton pour les favoris 

// 6) On récupère le film liké pour l'ajouter à un tableau de favoris (par exemple)

// On veut pouvoir préserver les favoris meme après fermeture du navigateur 
// 

// Pusher sur guthub une fois fini !! 

const input = document.querySelector('input')
const submit = document.querySelector('.submit')
const favBtn = document.querySelector('.btn-list')
const list = document.querySelector('.list')
const favList = document.querySelector('.fav-list')

const key = 'f1cd3768'

const favs = []

// On écoute le bouton de soumission 
submit.addEventListener('click', () => {
                list.innerHTML = ""

                const search = input.value
                const url = `http://www.omdbapi.com/?apikey=${key}&s=${search}&page=1`

                axios.get(url)
                                .then(res => res.data.Search)
                                .then(data => displayMovies(data))
                                .catch(err => console.log(err))
})
