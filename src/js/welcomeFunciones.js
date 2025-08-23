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
    let botOn = false;
    localStorage.setItem("botOn", JSON.stringify(botOn));
    window.location.href = "TikTakToe.html";
    
})




btnPve.addEventListener("click", function()
{
    let botOn = true;
    localStorage.setItem("botOn", JSON.stringify(botOn));
    window.location.href = "TikTakToe.html";
})




