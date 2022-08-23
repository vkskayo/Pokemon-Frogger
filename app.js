


document.addEventListener('DOMContentLoaded', () => {
    var numOfLifes = 3;
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
    
    // try again button listener
    tryAgain.addEventListener("click", ()=>{
        gameOver.style.display = "none";
        board.style.display = "flex";
        lifeSection.style.display = "flex";
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
    const car = document.getElementById("obstacle-1");
    const car2 = document.getElementById("obstacle-2");
    const heart1Container = document.getElementById("heart1-container");
    const heart2Container = document.getElementById("heart2-container");
    const heart3Container = document.getElementById("heart3-container");
    const heartCrack1 = document.getElementById("heart-crack1");
    const heartCrack2 = document.getElementById("heart-crack2");
    const heartCrack3 = document.getElementById("heart-crack3");
    const heart1 = document.getElementById("heart1");
    const heart2 = document.getElementById("heart2");
    const heart3 = document.getElementById("heart3");
    const ghost = document.getElementById("ghost");
    const gameOver = document.getElementById("game-over");
    const board = document.getElementById("board");
    const lifeSection = document.getElementById("life-sec");
    const differentPokemon = document.getElementById("different-pokemon");
    const heartIcons = document.getElementById("heart-icons");
    const star = document.getElementById("star");
    
       
  //generating random movement for the ghosts
  var randomGhostMovement = ()=>{
    let arr = [22, 23, 24, 6,8,  37, 38, 39];
    let randomNum = Math.floor(Math.random()*arr.length);
    return arr[randomNum];

}

//effectively introducing movement to the ghosts
let ghostMovement = ()=>{

    var currentPositionGhost = randomGhostMovement();
    squares[currentPositionGhost].appendChild(ghost);
}


    
    
    //Initializing positions
    var currentPosition = 187;
    var currentPositionCar = 60;
    var currentPositionCar2 = 104;
    var currentPositionGhost = randomGhostMovement();
    const width = 15;
    var numOfSquares = 194;
    squares[187].appendChild(pokemon);
    squares[currentPositionCar].appendChild(car);
    squares[currentPositionCar2].appendChild(car2);
    squares[currentPositionGhost].appendChild(ghost);
    currentPositionCar++;
    currentPositionCar2--;
    
    // setting the interval for position of the ghosts
     let positionGhosts = setInterval(ghostMovement, 2000);
  
        // updating the positions
    let positions = setInterval(()=>{
        let rowNum = Math.floor(currentPositionCar / 15);
        if(currentPositionCar - ((rowNum-1) *15) == 15){
            currentPositionCar = currentPositionCar -15;
        }
        squares[currentPositionCar].appendChild(car);
        currentPositionCar++;
    
        let rowNumCar2=Math.floor(currentPositionCar2 / 15);
        if(currentPositionCar2 - ((rowNumCar2) *15) == 0){
            currentPositionCar2 = currentPositionCar2 +14;
        }  
      
       
        squares[currentPositionCar2].appendChild(car2);
        currentPositionCar2--; 
    }, 1000);
    
    
    
    // Handling collisions
    let collisions = setInterval(()=>{
    
        squares.forEach((e)=>{
        
            if(e.childNodes !== undefined){
                let temp = 0;
                let victoryCondition = 0;
                e.childNodes.forEach((a)=>{
                    
                    if(a !== undefined){

                        if(a.contains(star)){
                            victoryCondition++;
                        }

                        if(a.contains(car) || a.contains(car2) || a.contains(ghost)){
                            temp++;
                            
                        }
        
                        if(a.contains(pokemon)){
                            temp++;
                            victoryCondition++;
                           
        
                        }
                        if(temp >= 2){
                            
    
                            if(numOfLifes ==3){
                                heart1Container.removeChild(heart1);
                                heart1Container.appendChild(heartCrack1);
                                numOfLifes--;
                                clearInterval(collisions);
                                clearInterval(positions);
                                clearInterval(positionGhosts);
                                start();
                            }else if(numOfLifes == 2){
                                heart2Container.removeChild(heart2);
                                heart2Container.appendChild(heartCrack2);
                                numOfLifes--;
                                clearInterval(collisions);
                                clearInterval(positions);
                                clearInterval(positionGhosts);
                                start();
                            }else if(numOfLifes == 1){
                                heart3Container.removeChild(heart3);
                                heart3Container.appendChild(heartCrack3);
                                numOfLifes--;
                                clearInterval(collisions);
                                clearInterval(positions);
                                clearInterval(positionGhosts);
                                board.style.display = "none";
                                lifeSection.style.display = "none";
                                gameOver.style.display = "block";
                            
                            }  
                        }
                        if(victoryCondition >=2){
                            alert("victory!");
                        }
                       
                    }
                })
            }
            
            
        });

        let rowNumCar = Math.floor(currentPositionCar / 15);
        let rowNumpokemon = Math.floor(currentPosition / 15);

        if(rowNumCar == rowNumpokemon && (currentPosition - currentPositionCar) == 0){
            
            if(numOfLifes ==3){
                heart1Container.removeChild(heart1);
                heart1Container.appendChild(heartCrack1);
                numOfLifes--;
                clearInterval(collisions);
                clearInterval(positions);
                clearInterval(positionGhosts);
                start();
                
            }else if(numOfLifes == 2){
                heart2Container.removeChild(heart2);
                heart2Container.appendChild(heartCrack2);
                numOfLifes--;
                clearInterval(collisions);
                clearInterval(positions);
                clearInterval(positionGhosts);
                start();
                
            }else if(numOfLifes == 1){
                  heart3Container.removeChild(heart3);
                  heart3Container.appendChild(heartCrack3);
                numOfLifes--;
                clearInterval(collisions);
                clearInterval(positions);
                clearInterval(positionGhosts);
                board.style.display = "none";
                lifeSection.style.display = "none";
                gameOver.style.display = "block";
            }  
        }
            let rowNumCar2 = Math.floor(currentPositionCar2 / 15);
        if(rowNumCar2 == rowNumpokemon && (currentPosition - currentPositionCar2) == 0){
            
            if(numOfLifes ==3){
                heart1Container.removeChild(heart1);
                heart1Container.appendChild(heartCrack1);
                numOfLifes--;
                clearInterval(collisions);
                clearInterval(positions);
                clearInterval(positionGhosts);
                start();
                
            }else if(numOfLifes == 2){
                heart2Container.removeChild(heart2);
                heart2Container.appendChild(heartCrack2);
                numOfLifes--;
                clearInterval(collisions);
                clearInterval(positions);
                clearInterval(positionGhosts);
                start();
                
            }else if(numOfLifes == 1){
                heart3Container.removeChild(heart3);
                heart3Container.appendChild(heartCrack3);
                numOfLifes--;
                clearInterval(collisions);
                clearInterval(positions);
                clearInterval(positionGhosts);
                board.style.display = "none";
                lifeSection.style.display = "none";
                gameOver.style.display = "block";
            }
        }
    }, 200)
    
    // Setting the pokemon movement 
    let movement = document.addEventListener('keyup', movePokemon);
    function movePokemon(e){
        let rowNum = Math.floor(currentPosition / 15);
        switch(e.key) {
            case 'ArrowLeft' :
                if((currentPosition - (rowNum * 15)) !== 0){
                    currentPosition = currentPosition - 1;
                    squares[currentPosition].appendChild(pokemon);   
                }
                break
            case 'ArrowRight' :
                if(currentPosition - (rowNum *15) !== 14){
                    currentPosition = currentPosition + 1;
                    squares[currentPosition].appendChild(pokemon);  
                }
                break
            case 'ArrowUp' :
                if(currentPosition - width >= 0){
                    currentPosition = currentPosition - width;
                    squares[currentPosition].appendChild(pokemon);  
                }
                break
            case 'ArrowDown' :
                if(currentPosition + width <= numOfSquares){
                    currentPosition = currentPosition + width;
                    squares[currentPosition].appendChild(pokemon); 
                }
                break
        }
    }
    }
    start();
})








