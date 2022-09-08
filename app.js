


document.addEventListener('DOMContentLoaded', () => {
    var isOnPlatform = false;
    var numOfLifes = 3;
    var despertedSnorlax = 0;
    var isYourFirstTime = true;
    const tryAgain = document.getElementById("try-again");
    const gameOver = document.getElementById("game-over");
    const board = document.getElementById("board");
    const lifeSection = document.getElementById("life-sec");
    const heartIcons = document.getElementById("heart-icons");
    const heart1Container = document.getElementById("heart1-container");
    const heart2Container = document.getElementById("heart2-container");
    const heart3Container = document.getElementById("heart3-container");
    const heartCrack1 = document.getElementById("heart-crack1");
    const heartCrack2 = document.getElementById("heart-crack2");
    const heartCrack3 = document.getElementById("heart-crack3");
    const heart1 = document.getElementById("heart1");
    const heart2 = document.getElementById("heart2");
    const heart3 = document.getElementById("heart3");
    const differentPokemon = document.getElementById("different-pokemon");
    const dittoInformation = document.getElementById("ditto-information");
    const arrowAnimation = document.getElementById("arrow-animation");
    
    // try again button listener
    tryAgain.addEventListener("click", ()=>{
        isYourFirstTime = false;
        gameOver.style.display = "none";
        board.style.display = "flex";
        lifeSection.style.display = "flex";
        dittoInformation.style.display = "flex";
        numOfLifes = 3;
        heartIcons.appendChild(heartCrack1);
        heartIcons.appendChild(heartCrack2);
        heartIcons.appendChild(heartCrack3);
        heart1Container.appendChild(heart1);
        heart2Container.appendChild(heart2);
        heart3Container.appendChild(heart3);
        
   
        
        start();
    });

    //different pokemon listener  
    differentPokemon.addEventListener("click", ()=>{
        location.href = "initialPage.html";
    })

    function start(){

    // initializing html elements    
    const squares = document.querySelectorAll("div.square");
    const pokemon = document.getElementById("pokemon");
    const heart1Container = document.getElementById("heart1-container");
    const heart2Container = document.getElementById("heart2-container");
    const heart3Container = document.getElementById("heart3-container");
    const heartCrack1 = document.getElementById("heart-crack1");
    const heartCrack2 = document.getElementById("heart-crack2");
    const heartCrack3 = document.getElementById("heart-crack3");
    const heart1 = document.getElementById("heart1");
    const heart2 = document.getElementById("heart2");
    const heart3 = document.getElementById("heart3");
    const gameOver = document.getElementById("game-over");
    const board = document.getElementById("board");
    const lifeSection = document.getElementById("life-sec");
    const differentPokemon = document.getElementById("different-pokemon");
    const heartIcons = document.getElementById("heart-icons");   
    const bubble = document.getElementById("bubble");
    const dittoInformation = document.getElementById("ditto-information");
    const arrowAnimation = document.getElementById("arrow-animation");
    const platform = document.getElementById("platform");
    const platform2 = document.getElementById("platform-2");
    const platform3 = document.getElementById("platform-3");
    const platform4 = document.getElementById("platform-4");
    const platform5 = document.getElementById("platform-5");
    pokemon.style.display = "block";
   

    let platformChecker = (platform)=>{
     
        if(pokemon.offsetLeft + pokemon.width >= platform.offsetLeft + (pokemon.width / 2)  &&
            (pokemon.offsetLeft + pokemon.width) <= (platform.offsetLeft + platform.offsetWidth + (pokemon.width / 2))
             && pokemon.offsetTop == platform.offsetTop){
                let distanceRelativeRight = (platform.offsetWidth + platform.offsetLeft) -
                 (pokemon.width + pokemon.offsetLeft)
                 platform.appendChild(pokemon);
                 let variablePosition = platform.offsetLeft + platform.offsetWidth -(platform.offsetWidth-(pokemon.offsetLeft));
               console.log(platform.offsetTop / 39)
                if(Math.round(platform.offsetTop / 39) == 7){
                    currentPosition = 108;
                    console.log("here");
                    console.log(currentPosition);
                }
                
                
                 
                 pokemon.style.right = `${distanceRelativeRight}px`
                 
                
                
                isOnPlatform = true;
        }
            }

   if(numOfLifes == 3 && isYourFirstTime){
    arrowAnimation.style.display = "block";
   }

   //reset of bubble
   heartIcons.appendChild(bubble); 
    
    //Initializing positions
     var currentPosition = 187;
     squares[currentPosition].appendChild(pokemon);
     const width = 15;
     var numOfSquares = 194;
    
     

    // Handling sea fall
        let arrow = setInterval(()=>{
            
            if(arrowAnimation.style.opacity == 1){
                setTimeout(()=>{
                    arrowAnimation.style.opacity = 0.1;
                }, 600)
                
            }else {
                setTimeout(()=>{
                    arrowAnimation.style.opacity = 1;
                }, 600)  
            }  
        }, 200)

        let debugging = setInterval(()=>{
            console.log(isOnPlatform)
            if(currentPosition >= 90 && currentPosition <= 104){

            isOnPlatform = false;
            }
        }, 200);
        //desperted snorlax

       /*  if(despertedSnorlax == 4){
            alert("victory");
        }
        if(squares[currentPosition].classList.contains("snorlax-floor")){
            clearInterval(collisions);
            document.removeEventListener('keyup', movePokemon);
            squares[currentPosition].classList.remove("snorlax-floor");
            squares[currentPosition].classList.add("despertedSnorlax");
            despertedSnorlax++;
            start();
            
        }else if(squares[currentPosition].classList.contains("despertedSnorlax")){
            currentPosition = currentPosition + width;
            squares[currentPosition].appendChild(pokemon);
        }

 */
     let dead = (currentPosition)=>{
        
        

        // morte

        
            
            if(1){
            
                if(numOfLifes ==3){
                    heart1Container.removeChild(heart1);
                    heart1Container.appendChild(heartCrack1);
                    numOfLifes--;
                    
                    document.removeEventListener('keyup', movePokemon);
                   
                    pokemon.style.display = "none";
                    squares[currentPosition].style.position = "relative";
                    squares[currentPosition].appendChild(bubble);
                    
                    squares[(Math.round((pokemon.offsetLeft + platform.offsetLeft) / 36.6) + 165)].classList.remove("sea");
                    setTimeout(start, 2000);
                    
                    
                }else if(numOfLifes == 2){
                    heart2Container.removeChild(heart2);
                    heart2Container.appendChild(heartCrack2);
                    numOfLifes--;
                    document.removeEventListener('keyup', movePokemon);
    
                    pokemon.style.display = "none";
                    squares[currentPosition].style.position = "relative";
                    squares[currentPosition].appendChild(bubble);
                    setTimeout(start, 2000);
                    
                }else if(numOfLifes == 1){
                      heart3Container.removeChild(heart3);
                      heart3Container.appendChild(heartCrack3);
                    numOfLifes--;
                    document.removeEventListener('keyup', movePokemon);
                    pokemon.style.display = "none";
                    squares[currentPosition].style.position = "relative";
                    squares[currentPosition].appendChild(bubble);
                    
                    setTimeout(()=>{
                        board.style.display = "none";
                        lifeSection.style.display = "none";
                        dittoInformation.style.display = "none";
                        gameOver.style.display = "block";
                    }, 2000)
                    
                }  
            
        }
             
    }
    
    // Setting the pokemon movement 
     document.addEventListener('keyup', movePokemon);
    function movePokemon(e){
        let rowNum = Math.floor(currentPosition / 15);
        switch(e.key) {
            case 'ArrowLeft' :
               
                if(numOfLifes == 3){
                    clearInterval(arrow);
                    arrowAnimation.style.display = "none";
                }

                if(isOnPlatform){
                  
                    if((platform.offsetWidth-(pokemon.offsetLeft + pokemon.offsetWidth)) + 36 >= 90){
                        pokemon.style.right = "";
                        let variablePosition = platform.offsetLeft + pokemon.offsetLeft;
                        let MyPosition = (Math.floor(variablePosition / 36.6) + 165);
                       
                        squares[MyPosition].appendChild(pokemon);
                        
                        dead(MyPosition);
                        
                        
                     
                       isOnPlatform = false;
                        
                    }else {
                        pokemon.style.right = `${(platform.offsetWidth-(pokemon.offsetLeft + pokemon.offsetWidth)) + 36}px`
                        
                    }

                    
                }else

                if(((currentPosition - (rowNum * 15)) !== 0) && !(isOnPlatform)){
                   
                    currentPosition = currentPosition - 1;
                    squares[currentPosition].appendChild(pokemon);
                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index.html"){
                        pokemon.src = "sprites/bulbasaur/sideLeftBulbasaur.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index2.html"){
                        pokemon.src = "sprites/charmander/sideLeftCharmander.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index3.html"){
                        pokemon.src = "sprites/squirtle/sideLeftSquirtle.png";
                    }
                       
                }
                break
            case 'ArrowRight' :
                //let distance = pokemon.offsetLeft;
               
                if(numOfLifes == 3){
                    clearInterval(arrow);
                    arrowAnimation.style.display = "none";
                }

                if(isOnPlatform){
                    console.log((Math.floor(platform.offsetLeft + platform.offsetWidth + 36 / 36.6) + 165));
                    if((platform.offsetWidth-(pokemon.offsetLeft + pokemon.offsetWidth)) - 36 <= -18){
                        pokemon.style.right = "";
                        let variablePosition = platform.offsetLeft + platform.offsetWidth + 36;
                        let MyPosition = (Math.floor(variablePosition / 36.6) + 165);
                       
                        squares[MyPosition].appendChild(pokemon);
                        
                        dead(MyPosition);
                        
                        
                     
                       isOnPlatform = false;
                        
                    }else {
                        pokemon.style.right = `${(platform.offsetWidth-(pokemon.offsetLeft + pokemon.offsetWidth)) - 36}px`
                        
                    }
                }else

                if((currentPosition - (rowNum *15) !== 14) && !(isOnPlatform)){
                    
                    currentPosition = currentPosition + 1;
                    squares[currentPosition].appendChild(pokemon);
                    
                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index.html"){
                        pokemon.src = "sprites/bulbasaur/sideRightBulbasaur.png";
                    }  

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index2.html"){
                        pokemon.src = "sprites/charmander/sideRightCharmander.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index3.html"){
                        pokemon.src = "sprites/squirtle/sideRightSquirtle.png";
                    }
                }
                break
            case 'ArrowUp' :
                
                if(numOfLifes == 3){
                    clearInterval(arrow);
                    arrowAnimation.style.display = "none";
                }

                

                if(currentPosition - width >= 0){
                    currentPosition = currentPosition - width;
                    console.log(currentPosition);
                    squares[currentPosition].appendChild(pokemon);
                    
                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index.html"){
                        pokemon.src = "sprites/bulbasaur/backBulbasaur.png"; 
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index2.html"){
                        pokemon.src = "sprites/charmander/backCharmander.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index3.html"){
                        pokemon.src = "sprites/squirtle/backSquirtle.png";
                    }
                }
                pokemon.style.right = "";
                
                    platformChecker(platform);
                platformChecker(platform2);
                platformChecker(platform3);
                platformChecker(platform4);
                platformChecker(platform5);
                
                

                break
            case 'ArrowDown' :
               
                if(numOfLifes == 3){
                    clearInterval(arrow);
                    arrowAnimation.style.display = "none";
                }

                if(isOnPlatform){
                    let variablePosition = platform.offsetLeft + platform.offsetWidth -(platform.offsetWidth-(pokemon.offsetLeft));
                    pokemon.style.right = "";
                    let MyPosition = (Math.floor(variablePosition / 36.6) + 180);
                    console.log(MyPosition);
                    squares[MyPosition].appendChild(pokemon);
                    currentPosition = MyPosition;
                    isOnPlatform = false;
                    
                }else

                if(currentPosition + width <= numOfSquares){
                    currentPosition = currentPosition + width;
                    squares[currentPosition].appendChild(pokemon);
                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index.html"){
                        pokemon.src = "sprites/bulbasaur/frontBulbasaur.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index2.html"){
                        pokemon.src = "sprites/charmander/frontCharmander.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index3.html"){
                        pokemon.src = "sprites/squirtle/frontSquirtle.png";
                    }
                    
                }else {
                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index.html"){
                        pokemon.src = "sprites/bulbasaur/frontBulbasaur.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index2.html"){
                        pokemon.src = "sprites/charmander/frontCharmander.png";
                    }

                    if(location.href == "file:///C:/Users/Vinicius/OneDrive/%C3%81rea%20de%20Trabalho/webProjects/pokemon(frogger)/index3.html"){
                        pokemon.src = "sprites/squirtle/frontSquirtle.png";
                    }
                }

                pokemon.style.right = "";
                
                platformChecker(platform);
                platformChecker(platform2);
                platformChecker(platform3);
                platformChecker(platform4);
                platformChecker(platform5);
                break
        }
    }
    }
    start();
})








