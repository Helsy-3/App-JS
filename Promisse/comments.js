//récupérer les éléments html
const container = document.querySelector('.comments')

//Effectuer la requête htpps avec fetch vers jsonplacholder
fetch('https://jsonplaceholder.typicode.com/comments', {

    method: "GET",
    headers: {
        'Accept' = 'application /json',
        'Content-type' = 'application/json'

    }

}
)