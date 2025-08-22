import { botOn } from "./welcomeFunciones";




let matrizGame =
[
    [null, null, null],
    [null, null, null],
    [null, null, null] 
]

let player = "X"
let win;
let gameTurn = 0;

if(gameTurn === 0)
{
    win = false;
}

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
            const position = validarPosicion (id, row, col)

            if(botOn == true && player == "O")
            {
                botMove(matrizGame)
            }

            if(position == true && player == "X")
            {
                putPosition(row,col)
                const win = winverification(matrizGame)


                btnsOff(win)
            }
            else
            {
            
            }
        })
    })
    
}

function validarPosicion (btnId, row, col)
{
    let position = null;
    while(position == null)
    {
        if(matrizGame[row][col] !== "X" && matrizGame[row][col] !== "O")
        {
            const player = getPlayer(gameTurn)
            const btnID = document.getElementById(btnId)
            btnID.textContent = player
            position = true;
            gameTurn += 1;

            

            

            
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

    matrizGame[row][colunm] = player;
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

function botMove(matrizGame)
{
    
    const row = Math.floor(Math.random() * 3);
    const col = Math.floor(Math.random() * 3);
    const buttonId = document.querySelector(`.btnsBoxes[data-row='${row}'][data-col='${col}']`);
    const position = validarPosicion (buttonId, row, col)

    if(position == true && player == "O")
    {
        putPosition(row,col)
        const win = winverification(matrizGame)


        btnsOff(win)
    }
    else
    {
            
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
                    break;
                    console.log("El jugaodr X gano")
                }
            }
            else if(matrizGame[row][col] == 'O')
            {
                playerOPoint++
                
                if(playerOPoint === 3)
                {
                    hideTurnOF()
                    win = true;
                    break;
                    console.log("El jugaodr O gano")
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
                    break;
                    console.log("El jugaodr X gano")
                }
            }
            else if(matrizGame[col][row] == 'O')
            {
                playerOPoint++
                
                if(playerOPoint === 3)
                {
                    hideTurnOF()
                    win = true;
                    break;
                    console.log("El jugaodr O gano")
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
                break;
                console.log("X gano")
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
                break;
                console.log("O gano")
            }
       }
    }
    if(matrizGame[2][0] == "X" && matrizGame[1][1] == "X" && matrizGame[0][2] == "X" )
    {
        console.log("X gano")
        hideTurnOF()
        win = true;
        
    }
    else if(matrizGame[2][0] == "O" && matrizGame[1][1] == "O" && matrizGame[0][2] == "O" )
    {
        console.log("O gano")
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
        console.log("si entro a btnoff")
        document.querySelectorAll(".btnsBoxes").forEach(btn => btn.disabled = true);
        winnerSign.textContent = `Ganó el jugador: ${player}`;
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





