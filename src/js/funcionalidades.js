



let matrizGame =
[
    [, , ],
    [, , ],
    [, , ] 
]

let win;

console.log(matrizGame)



let player = "X"
let gameTurn = 0;
const playerTurn = document.getElementById


if(gameTurn === 0)
{
    win = false;
}

console.log("----", gameTurn)

if(win == false)
{
    //foreach que recorre toda la clase de btnsboxes y identifica cual a sido presionado y ademas la data guardada de la columna y fila
    const buttons = document.querySelectorAll(".btnsBoxes");
    //button class="btnsBoxes" data-row="0" data-col="0" data-id="btnBox0"
    buttons.forEach(button => {
        button.addEventListener("click", () =>
        {
            const row = parseInt(button.dataset.row);
            const col = parseInt(button.dataset.col);
            const id = button.dataset.id
            const position = validarPosicion (id, row, col)
            console.log("Linea", row)
            console.log("pilar", col)
            console.log("id", id)

            if(position == true)
            {
                putPosition(row,col)
            }
            else
            {
            
            }
            })
    })
    
}

function validarPosicion (btnId, row, colunm)
{
    let position = "";
    while(position == false )
    {
        if(matrizGame[row][colunm] !== "X" && matrizGame[row][colunm] !== "O")
        {
            const player = getPlayer(gameTurn)
            const btnID = document.getElementById(btnId)
            btnID.textContent = player

            position = true;

            gameTurn += 1;
            if(gameTurn >= 5)
            {
                winverification(matrizGame)
            }
            else
            {

            }
            console.log(gameTurn)
            return position;
        }
        else
        {
            console.log(matrizGame)
            alert("La posicion ya esta ocupada, intentar otra")
            position = false;
            return position;
        }
    }
}

const playerPlaying = document.getElementById("playerPlaying")
function putPosition(row,colunm )
{


    matrizGame[row][colunm] = player;
    console.log(matrizGame)
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

let PlayerXPoint = 0
let PlayerOPoint = 0

function hideTurnOF()
{
    document.getElementById("turnOf").style.display = "none";
    
}

winverification(matrizGame)

function winverification(matrizGame)
{
    console.log("aaaaaaaaaaaaaaaaaaaaaaaa")
    //Verificar si hay ganador en horizontal
    console.log(matrizGame)

    for(let i = 0; i <= 2; i++)
    {
        if(matrizGame[i][0] == "X" && matrizGame[i][1] == "X" && matrizGame[i][2] == "X")
        {
            console.log("gano la X")
        }
    }


    for(let i = 0; i <= 2; i++)
    {
        console.log("aeeeeeeeeeeeeeeeeeeee")
        PlayerXPoint = 0;
        PlayerOPoint = 0;
        for(let j = 0; j <= 2; j++)
        {
            if(matrizGame[i][j] == "X")
            {
                PlayerXPoint++
                
            }
            else if(matrizGame[i][j] == "O")
            {
                PlayerOPoint++
            }
        }
        if(PlayerXPoint === 3)
        {
            console.log("-----------")
            hideTurnOF()
            win = true;
            break;
        }
        else if (PlayerOPoint === 3)
        {
            hideTurnOF()
            win = true;
            break;
        }

        console.log("player point X: ", PlayerXPoint)
        console.log("player point O : ", PlayerOPoint)
    }
    //verificar si se gano en vertical 
    PlayerXPoint = 0
    PlayerOPoint = 0
    for(let i = 0; i <= 2; i++)
    {
        PlayerXPoint = 0;
        PlayerOPoint = 0;
        for(let j = 0; j <= 2; j++)
        {
            if(matrizGame[j][i] === "X")
            {
                PlayerXPoint++
            }
            else if(matrizGame[j][i] === "O")
            {
                PlayerOPoint++
            }
        }
        if(PlayerXPoint === 3)
        {
            hideTurnOF()
            win = true;
            break;
        }
        else if (PlayerOPoint === 3)
        {
            hideTurnOF()
            win = true;
            break;
        }
    }
    //Verificar si se gano en diagonal arriba izquierda derecha abajo 
    PlayerXPoint = 0
    PlayerOPoint = 0
    for(let i = 0; i <= 2; i++)
    {
        if(matrizGame[i][i] === "X")
        {
            PlayerXPoint++
        }
        else if(matrizGame[i][i] === "O")
        {
            PlayerOPoint++
        }
        if(PlayerXPoint === 3)
        {
            hideTurnOF()
            win = true;
            break;
        }
        else if (PlayerOPoint === 3)
        {
            hideTurnOF()
            win = true;
            break;
        }
    }
    //Verificar si se gano en diagonal abajo izquierda derecha arriba
    PlayerXPoint = 0
    PlayerOPoint = 0
    if(matrizGame[2][0] == "X" && matrizGame[1][1] == "X" && matrizGame[0][2] == "X" )
    {
        hideTurnOF()
        win = true;
        
    }
    else if(matrizGame[2][0] == "O" && matrizGame[1][1] == "O" && matrizGame[0][2] == "O" )
    {
        hideTurnOF()
        win = true
    }
    btnsOff(win)
}

const winnerSign = document.getElementById("winnerSign");
function btnsOff(win)
{
    
    if(win === true)
    {
        
        document.querySelectorAll(".btnsBoxes").disabled = true;
        winnerSign.textContent = `Ganó el jugador: ${player}`;
    }
    else if(gameTurn === 9)
    {
        hideTurnOF()
        document.querySelectorAll(".btnsBoxes").disabled = true;
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
        [, , ],
        [, , ],
        [, , ] 
    ]
    for(i = 0; i <= 8; i++)
    {
        
        document.querySelectorAll(".btnsBoxes").disabled = false;
        
        document.querySelectorAll(".btnsBoxes").textContent = "";
        
        
    }
    win = false;
    gameTurn = 0
})





