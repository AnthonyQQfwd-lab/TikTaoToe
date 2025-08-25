let matrizGame =
[
    [null, null, null],
    [null, null, null],
    [null, null, null] 
]

let win;
let winnerPlayer;
let gameTurn = 0;

if(gameTurn === 0)
{
    win = false;
}

const botOn = JSON.parse(localStorage.getItem("botOn")) 


const btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", function()
{
    let botOn = JSON.parse(localStorage.getItem("botOn")) 
    botOn = false
    localStorage.setItem("botOn", JSON.stringify(botOn));
    window.location.href = "welcome.html";
    btnResetScoreboard.click()
})



if(win == false)
{
    //foreach que recorre toda la clase de btnsboxes y identifica cual a sido presionado y ademas la data guardada de la columna y fila
    const buttons = document.querySelectorAll(".btnsBoxes");
    
    buttons.forEach(button => 
    {
        button.addEventListener("click", () =>
        {
            //se toma el data- de el boton seleccionado para saber su row y col ademas de la id 
            const row = parseInt(button.dataset.row);
            const col = parseInt(button.dataset.col);
            const id = button.dataset.id
            let player = getPlayer(gameTurn);
            

            if (player == "X" || player == "O")
            {   // con la row y col y la id extraida del boton presionado se valida si la posicion esta disponible 
                const position = validarPosicion (id, row, col)
                if(position === true)
                {
                    // si la posicion esta disponible se ejecuta la funcion para tomar la posicion 
                    putPosition(row,col)
                    // se valida si hay un ganador cada que se pone una posicion valida 
                    win = winverification(matrizGame)
                    btnsOff(win)
                }
            }

            player = getPlayer(gameTurn);
            if(botOn == true && player === "O" && win == false)
            {
                botMove(matrizGame)
            }
            
            
            
            
        })
    })
    
}


function validarPosicion (btnId, row, col)
{
    let position = false;
    
    if(position == false)
    {
        if(matrizGame[row][col] == null)
        {
            
            const btnID = document.getElementById(btnId)

            btnID.textContent = player
            position = true;
            
            
        }
        else
        {
            
            alert("La posicion ya esta ocupada, intentar otra")
            position = false;
        }
    }
    return position;
}

const playerPlaying = document.getElementById("playerPlaying")
function putPosition(row,colunm )
{
    let player = getPlayer(gameTurn);
    matrizGame[row][colunm] = player;
    gameTurn += 1;
    playerPlaying.textContent = player;

    if(player === "X")
    {
        playerPlaying.textContent = "O"
    }
    else if(player === "O")
    {
        playerPlaying.textContent = "X"
    }
    
    
    
}

viewEmpySpaces(matrizGame)

function viewEmpySpaces(matrizGame)
{
    let empySpace
    const empySpacesArray = [];
    //recorre la matriz game, detectando los espacios bacios y almacenandolos en el array de espacios vacios
    for(let row = 0; row < 3; row++)
    {
        for(let col = 0; col < 3; col++)
        {
            if(matrizGame[row][col] === null)
            {
                //basado en las filas y columnas se toma a los espacios vacios
                empySpace = document.querySelector(`[data-row="${row}"][data-col="${col}"]`);
                empySpacesArray.push(empySpace)
            }
        }
    }
    
    
    return empySpacesArray;
}

function botMove(matrizGame)
{
    
    let empySpacesArray = viewEmpySpaces(matrizGame)
    //toamr un espacio vacio random del array de espaciosvacios
    let randomIndex = Math.floor(Math.random() * empySpacesArray.length);
    let emptySpace = empySpacesArray[randomIndex]

    let spaceId = emptySpace.dataset.id
    let spaceRow = emptySpace.dataset.row
    let spaceCol = emptySpace.dataset.col
    const position = validarPosicion (spaceId, spaceRow, spaceCol)

    if(position == true)
    {
        putPosition(spaceRow,spaceCol)
        const win = winverification(matrizGame)
        btnsOff(win)
    }
    
    
}

let player;
function getPlayer(gameTurn)
{
    if(gameTurn === 0)
    {
        player = "X"
    }
    else if(gameTurn % 2 === 0)
    {
        player = "X"
    }
    else if(gameTurn % 2 !== 0)
    {
        player = "O"
    };
    return player;
}

function hideTurnOF()
{
    document.getElementById("turnOf").style.display = "none";
    
}


// funcionalidades para la scoreboard
// se optinee los elementos del dom atravez de su id 
const winXPointsConteiner = document.getElementById("winXPointsConteiner");
const winOPointsConteiner = document.getElementById("winOPointsConteiner");
const gameDrawPointsConteiner = document.getElementById("gameDrawPointsConteiner");

// se inicializa el local storage con los datos previamente guardados o si no hay ninguna 0 datos 
let winXPoints = JSON.parse(localStorage.getItem("winXPointsLocalStorage")) || 0;
let winOPoints = JSON.parse(localStorage.getItem("winOPointsLocalStorage")) || 0;
let gameDrawPoints = JSON.parse(localStorage.getItem("gameDrawPointsLocalStorage")) || 0;

showScoreboardPoints()
const btnResetScoreboard = document.getElementById("btnResetScoreboard");

// marca en 0 todos los puntos en la scoreboard ademas deeliminarlos del dom 
btnResetScoreboard.addEventListener("click", function()
{
    gameDrawPoints = 0;
    localStorage.setItem("gameDrawPointsLocalStorage", JSON.stringify(gameDrawPoints));
    winXPoints = 0;
    localStorage.setItem("winXPointsLocalStorage", JSON.stringify(winXPoints));
    winOPoints = 0;
    localStorage.setItem("winOPointsLocalStorage", JSON.stringify(winOPoints));
    showScoreboardPoints()
})

function showScoreboardPoints()
{
    winXPointsConteiner.textContent = winXPoints;
    winOPointsConteiner.textContent = winOPoints;
    gameDrawPointsConteiner. textContent = gameDrawPoints;
}

//cada que gana un jugador se le agregara un punto a su respectico lugar en la scoreboard 
function addPointScoreboard(winnerPlayer)
{
    if(winnerPlayer === null)
    {
        gameDrawPoints++
        localStorage.setItem("gameDrawPointsLocalStorage", JSON.stringify(gameDrawPoints));
    }
    else if(winnerPlayer === "X")
    {
        winXPoints++ 
        localStorage.setItem("winXPointsLocalStorage", JSON.stringify(winXPoints));
    }
    else if(winnerPlayer === "O")
    {
        winOPoints++
        localStorage.setItem("winOPointsLocalStorage", JSON.stringify(winOPoints));
    }
    
    
}

function winverification(matrizGame)
{
    
    //Verificar si hay ganador en horizontal
    let playerXPoint = 0;
    let playerOPoint = 0;

    for(let row = 0; row <= 2; row++)
    {
        for(let col = 0; col <= 2; col++)
        {
            if(matrizGame[row][col] == 'X')
            {
                playerXPoint++
                
                if(playerXPoint === 3) 
                {
                    
                    win = true;
                    winnerPlayer = "X"
                    
                    hideTurnOF()
                    break;
                    
                }
            }
            else if(matrizGame[row][col] == 'O')
            {
                playerOPoint++
                
                if(playerOPoint === 3)
                {
                    win = true;
                    winnerPlayer = "O"
                    
                    hideTurnOF()
                    break;
                    
                }
            }
        }
        playerXPoint = 0
        playerOPoint = 0
    }
    //Verificar si hay ganador en vertical
    for(let row = 0; row <= 2; row++)
    {
        for(let col = 0; col <= 2; col++)
        {
            if(matrizGame[col][row] == 'X')
            {
                playerXPoint++
                
                if(playerXPoint === 3) 
                {
                    
                    win = true;
                    winnerPlayer = "X"
                    
                    hideTurnOF()
                    break;
                    
                }
            }
            else if(matrizGame[col][row] == 'O')
            {
                playerOPoint++
                
                if(playerOPoint === 3)
                {
                    
                    win = true;
                    winnerPlayer = "O"
                    hideTurnOF()
                    
                    break;
                
                }
            }
        }
        playerXPoint = 0
        playerOPoint = 0
    }


    //Verificar si hay ganador en diagonal 
    for(let i = 0; i <= 2; i++)
    {
       if(matrizGame[i][i] == 'X')
       {
            playerXPoint++
            
            if(playerXPoint === 3)
            {
                
                win = true;
                winnerPlayer = "X"
                
                hideTurnOF()
                break;
                
            }
       }
       if(matrizGame[i][i] == 'O')
       {
            playerOPoint++
            
            if(playerOPoint === 3)
            {
                
                win = true;
                winnerPlayer = "O"
                
                hideTurnOF()
                break;
                
            }
       }
    }
    if(matrizGame[2][0] == "X" && matrizGame[1][1] == "X" && matrizGame[0][2] == "X" )
    {
        winnerPlayer = "X"
        hideTurnOF()
        win = true;
        
    }
    else if(matrizGame[2][0] == "O" && matrizGame[1][1] == "O" && matrizGame[0][2] == "O" )
    {
        winnerPlayer = "O"
        hideTurnOF()
        win = true
    }
    showScoreboardPoints()
    return win;
}

const winnerSign = document.getElementById("winnerSign");
function btnsOff(win)
{
    
    if(win === true)
    {
        
        document.querySelectorAll(".btnsBoxes").forEach(btn => btn.disabled = true);
        addPointScoreboard(winnerPlayer)
        showScoreboardPoints()
        winnerSign.textContent = `Ganó el jugador: ${winnerPlayer}`;
    }
    else if(gameTurn === 9)
    {
        hideTurnOF();
        winnerPlayer = null; 
        addPointScoreboard(winnerPlayer);
        showScoreboardPoints()
        document.querySelectorAll(".btnsBoxes").forEach(btn => btn.disabled = true);
        winnerSign.textContent = "Empate";
    }
    
}

const btnReset = document.getElementById("btnReset");
btnReset.addEventListener("click", function()
{
    document.getElementById("playerPlaying").textContent = "X"
    document.getElementById("turnOf").style.display = "block";
    document.getElementById("winnerSign").textContent = "";
    matrizGame =
    [
        [null, null, null],
        [null, null, null],
        [null, null, null] 
    ]

    document.querySelectorAll(".btnsBoxes").forEach(btn => btn.disabled = false);
    document.querySelectorAll(".btnsBoxes").forEach(btn => btn.textContent = "");

    win = false;
    gameTurn = 0
})