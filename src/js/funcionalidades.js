




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
console.log (botOn)

const btnBack = document.getElementById("btnBack");
btnBack.addEventListener("click", function()
{
    let botOn = JSON.parse(localStorage.getItem("botOn")) 
    botOn = false
    localStorage.setItem("botOn", JSON.stringify(botOn));
    window.location.href = "welcome.html";
})

if(win == false)
{
    //foreach que recorre toda la clase de btnsboxes y identifica cual a sido presionado y ademas la data guardada de la columna y fila
    const buttons = document.querySelectorAll(".btnsBoxes");
    
    buttons.forEach(button => 
    {
        button.addEventListener("click", () =>
        {
            const row = parseInt(button.dataset.row);
            const col = parseInt(button.dataset.col);
            const id = button.dataset.id

            let player = getPlayer(gameTurn);
            if (player == "X" || player == "O")
            {
                const position = validarPosicion (id, row, col)
                if(position === true)
                {
                    putPosition(row,col)
                    
                }
                const win = winverification(matrizGame)
                btnsOff(win)
            }
            
            
            player = getPlayer(gameTurn);
            if(botOn == true && player === "O" && !win)
            {
                botMove(matrizGame)
                const win = winverification(matrizGame)
                btnsOff(win)
            }
            
            
            console.log(matrizGame)
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
            console.log(matrizGame)
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
    
    empySpacesArray.map(empySpace => console.log(empySpace.id))
    return empySpacesArray;
}

function botMove(matrizGame)
{
    console.log("si entro al bot")
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
                    hideTurnOF()
                    win = true;
                    winnerPlayer = "X"
                    break;
                    
                }
            }
            else if(matrizGame[row][col] == 'O')
            {
                playerOPoint++
                
                if(playerOPoint === 3)
                {
                    hideTurnOF()
                    win = true;
                    winnerPlayer = "O"
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
                    hideTurnOF()
                    win = true;
                    winnerPlayer = "X"
                    break;
                    
                }
            }
            else if(matrizGame[col][row] == 'O')
            {
                playerOPoint++
                
                if(playerOPoint === 3)
                {
                    hideTurnOF()
                    win = true;
                    winnerPlayer = "O"
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
            console.log(playerXPoint)
            if(playerXPoint === 3)
            {
                hideTurnOF()
                win = true;
                winnerPlayer = "X"
                break;
                
            }
       }
       if(matrizGame[i][i] == 'O')
       {
            playerOPoint++
            console.log(playerOPoint)
            if(playerOPoint === 3)
            {
                hideTurnOF()
                win = true;
                winnerPlayer = "O"
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
    
    return win;
}

const winnerSign = document.getElementById("winnerSign");
function btnsOff(win)
{
    
    if(win === true)
    {
        
        document.querySelectorAll(".btnsBoxes").forEach(btn => btn.disabled = true);
        console.log(matrizGame)
        winnerSign.textContent = `Ganó el jugador: ${winnerPlayer}`;
    }
    else if(gameTurn === 9)
    {
        hideTurnOF()
        document.querySelectorAll(".btnsBoxes").forEach(btn => btn.disabled = true);
        winnerSign.textContent = "Empate"
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







