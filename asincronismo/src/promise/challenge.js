//es posible que se requiera babel
const fetchData = require('../utils/fetchData');
const API = 'https://rickandmortyapi.com/api/character/';

fetchData(API)
.then(data => {
    console.log(data.info.count);
    console.log(data.results[0].origin.url);
    //console.log(data.results[0].name);
    //console.log(data.results[0].origin.url);
    //return fetchData(`${API}${data.result[0].id}`)
    return fetchData(API)
})
.then(data => {
    console.log(data.results[0].name);
    return fetchData(data.results[0].origin.url);
})
.then( data => {
    console.log(data.dimension);
})
.catch(err => new Error(err));