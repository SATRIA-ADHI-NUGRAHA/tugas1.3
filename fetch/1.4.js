const fetch = require ('node-fetch')

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => json.map((a) => console.log(a.name)))