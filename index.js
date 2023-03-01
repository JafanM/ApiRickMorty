function getCharacters(done){
    //direccion de la api
    const results = fetch("https://rickandmortyapi.com/api/character");

    results
    .then(response => response.json())
    .then(data =>{
        done(data);
    });
}

getCharacters(data =>{
    //recorremos los personajes
    data.results.forEach(personaje => {
        //creamos html
        const article = document.createRange().createContextualFragment(/*html*/  `
        
        <article>
        <div class="img-container">
           <img src="${personaje.image}" alt="personaje">
   
        </div>
   
       <h2>${personaje.name}</h2>
       <span>${personaje.status} - ${personaje.species}</span>
       <h3>last seen at:</h3>
       <h4>${personaje.location.name}<h4>
       
   
       
       </article>
        `);
        //seleccionamos el main de html
        const main = document.querySelector("main");
        //main mete todo los personajes aqui:
        main.append(article);
        
    });
 
  
});