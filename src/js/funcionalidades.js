



const matrizGame =
[
    [, , ],
    [, , ],
    [, , ] 
]

console.log(matrizGame)

//console.log(matrizGame[2][2])

let player = "X"
let gameTurn = 0;




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


function validarPosicion (btnId, colunm, row)
{
    let position = "";
    while(position == false )
    {
        if(matrizGame[colunm][row] !== "X" && matrizGame[colunm][row] !== "O")
        {
            const player = getPlayer(gameTurn)
            btnId.textContent = player;
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

function putPosition(colunm, row,)
{
    matrizGame[colunm][row] = player;
    winverification(matrizGame)
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
    else
    {
        player = "O"
    };
    return player;
}
let PlayerXPoint = 0
let PlayerOPoint = 0

function winverification(matrizGame)
{

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
            alert("Jugador X gano ")
        }
        else if (PlayerOPoint === 3)
        {
            alert("Jugador O gano ")
        }
    }
}