



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
    const btnBox0 = document.getElementById("btnBox0");
    btnBox0.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox0, 0, 0)
        console.log(matrizGame)

        if(position == true)
        {
            putPosition(0,0)
        }
        else
        {
        
        }
    })

    const btnBox1 = document.getElementById("btnBox1");
    btnBox1.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox1, 0, 1 )
        console.log(matrizGame)

        if(position == true)
        {
            putPosition(0,1)
        }
        else
        {
        
        }
    })

    const btnBox2 = document.getElementById("btnBox2");
    btnBox2.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox2, 0, 2 )
        console.log(matrizGame)

        if(position == true)
        {
            putPosition(0,2)
        }
        else
        {
        
        }
    })

    const btnBox3 = document.getElementById("btnBox3");
    btnBox3.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox3, 1, 0 )
        console.log(matrizGame)
        if(position == true)
        {
            putPosition(1,0)
        }
        else
        {
        
        }
    })

    const btnBox4 = document.getElementById("btnBox4");
    btnBox4.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox4, 1, 1 )
        console.log(matrizGame)
        if(position == true)
        {
            putPosition(1,1)
        }
        else
        {
            
        }
    })

    const btnBox5 = document.getElementById("btnBox5");
    btnBox5.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox5, 1, 2 )
        console.log(matrizGame)

        if(position == true)
        {
            putPosition(1, 2)
        }
        else
        {
        
        }
    })

    const btnBox6 = document.getElementById("btnBox6");
    btnBox6.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox6, 2, 0 )
        console.log(matrizGame)
        if(position == true)
        {
            putPosition(2, 0)
        }
        else
        {
        
        }
    })

    const btnBox7 = document.getElementById("btnBox7");
    btnBox7.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox7, 2, 1 )
        console.log(matrizGame)
        if(position == true)
        {
            putPosition(2,1)
        }
        else
        {
        
        }
    })

    const btnBox8 = document.getElementById("btnBox8");
    btnBox8.addEventListener("click", function()
    {
        const position = validarPosicion (btnBox8, 2, 2 )
        console.log(matrizGame)
        if(position == true)
        {
            putPosition(2,2)
        }
        else
        {
        
        }
    })
}

function validarPosicion (btnId, colunm, row)
{
    let position = "";
    while(position == false )
    {
        if(matrizGame[colunm][row] !== "X" && matrizGame[colunm][row] !== "O")
        {
            const player = getPlayer(gameTurn)
            const text = document.createElement("h1")
            btnId.textContent = player
            position = true;
            gameTurn += 1;
            if(gameTurn >= 5)
            {
                
                console.log("Ya esta verificando si se gano")
            }
            else
            {

            }
            console.log(gameTurn)
            return position;
        }
        else
        {
            alert("La posicion ya esta ocupada, intentar otra")
            position = false;
            return position;
        }
    }
}

const playerPlaying = document.getElementById("playerPlaying")
function putPosition(colunm, row,)
{
    matrizGame[colunm][row] = player;
    playerPlaying.textContent = player;
    if(player === "X")
    {
        playerPlaying.textContent = "O"
    }
    else if(player === "O")
    {
        playerPlaying.textContent = "X"
    }
    //verificar si se gano solo cuando sea posible ganar en el quinto turno o mas
    if(gameTurn >= 5)
    {
        winverification(matrizGame)
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

let PlayerXPoint = 0
let PlayerOPoint = 0

const turnOf = document.getElementById("turnOf");
function hideTurnOF()
{
    document.getElementById("turnOf").style.display = "none";
}

function winverification(matrizGame)
{
    //Verificar si hay ganador en horizontal
    for(let i = 0; i <= 2; i++)
    {
        PlayerXPoint = 0;
        PlayerOPoint = 0;
        for(let j = 0; j <= 2; j++)
        {
            if(matrizGame[i][j] === "X")
            {
                PlayerXPoint++
            }
            else if(matrizGame[i][j] === "O")
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
    for(i = 0; i <= 8; i++)
    {
        if(win === true)
        {
            console.log("btnBox"+i)
            document.getElementById("btnBox"+i).disabled = true;
            winnerSign.textContent = `Ganó el jugador: ${player}`;
        }
        else if(gameTurn === 9)
        {
            hideTurnOF()
            document.getElementById("btnBox"+i).disabled = true;
            winnerSign.textContent = "Empate"
        }
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
        document.getElementById("btnBox"+i).disabled = false;
        console.log("btnBox"+i)
        document.getElementById("btnBox"+i).textContent = "";
        
        
    }
    win = false;
    gameTurn = 0
})