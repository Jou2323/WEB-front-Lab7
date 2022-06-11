document.querySelector("#download").onclick = function(){
    for (let i = 0; i < 5; i++) {
        fetch ('https://randomuser.me/api')            
            .then((res) => res.json())
            .then((data) => create(data));
    }
  }

function create({results}) {
    const element = document.querySelector('.table')
    element.innerHTML += `
        <div class="column">
            ${getUser(results)}
        </div>
    `
}

function getUser(results) {
    return results.map(el => `
        <div class="card">
        <img src="${el.picture.large}" width="200px" height="200px">
        <p>City: ${el.location.city} </p>
        <p>Country: ${el.location.country} </p>
        <p>Name: ${el.name.first} ${el.name.last}</p>
        <p>Postcode: ${el.location.postcode}</p>
        
        
        </div>`)
}
