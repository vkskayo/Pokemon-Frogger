const pokemon = document.getElementById("pokemon");
const bulbasaurContainer = document.getElementById("bulbasaur-container");
const charmanderContainer = document.getElementById("charmander-container");
const squirtleContainer = document.getElementById("squirtle-container");
console.log(pokemon);
console.log(bulbasaurContainer);
console.log(squirtleContainer);
console.log(charmanderContainer);



bulbasaurContainer.addEventListener("click",()=>{

    var pokemonImage = "images/bulbasaur1";
    location.href = "index.html";
})

squirtleContainer.addEventListener("click",()=>{
   var pokemonImage = "images/squirtle";
    location.href = "index3.html";
})

charmanderContainer.addEventListener("click",()=>{
   var pokemonImage = "images/charmander";
    location.href = "index2.html";
})

//export{pokemonImage};