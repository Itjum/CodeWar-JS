let count = 0;
let counterplus = document.getElementById('plus');
let counterminus = document.getElementById('minus');
let counterDisplay = document.getElementById('count');

counterplus.addEventListener("click", ()=>{
    counter(true);
    updateDisplay();
});

counterminus.addEventListener("click", ()=>{
    counter(false);
    updateDisplay();
});

function counter(cas)
{
    if (cas === true)
    {
        count += 1;
    }
    else
    {
        count -= 1;
    }
}

function updateDisplay()
{
    counterDisplay.innerHTML = count;
};