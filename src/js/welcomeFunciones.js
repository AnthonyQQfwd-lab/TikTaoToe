const toolTipBtnPvp = document.getElementById("toolTipBtnPvp");
const btnPvp = document.getElementById("btnPvp");
const btnPve = document.getElementById("btnPve")
const toolTipBtnPve = document.getElementById("toolTipBtnPve")
const imgPvp = document.getElementById("imgPvp")
const imgPve = document.getElementById("imgPve")

btnPvp.addEventListener('mouseover', function()
{
    toolTipBtnPvp.style.display = 'block';
    imgPvp.style.display= 'block'
})

btnPvp.addEventListener('mouseout', function()
{
    toolTipBtnPvp.style.display = 'none';
    imgPvp.style.display= 'none'
})

btnPve.addEventListener('mouseover', function()
{
    toolTipBtnPve.style.display = 'block';
    imgPve.style.display= 'block';
})

btnPve.addEventListener('mouseout', function()
{
    toolTipBtnPve.style.display = 'none';
    imgPve.style.display= 'none';
})

btnPvp.addEventListener("click", function()
{
    window.location.href = "TikTakToe.html";
})

let botOn = false;

btnPve.addEventListener("click", function()
{
    botOn = true;
    window.location.href = "TikTakToe.html";
})

export{botOn}


