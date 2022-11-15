// get elements
let start_timer = document.getElementById("clockBtn");
let number_input = document.getElementById("time");
let timeout_message = document.getElementById("timeout");
let days = document.getElementById("days");
let hours = document.getElementById("hours");
let mins = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

function get_value()
{
    let input = number_input.valueAsNumber;
    return input;
}

function calculateTimer(n)
{
    var day = parseInt(n / (24 * 3600));
    n = n % (24 * 3600);
    var hour = parseInt(n / 3600);
    n %= 3600;
    var minute = parseInt(n / 60);
    n %= 60;
    var second = n;
    let res = [day, hour, minute, second];
    if (res[0] < 10)
    {
        res[0] = res[0].toString();
        res[0] = '0' + res[0];
    }
    if (res[1] < 10)
    {
        res[1] = res[1].toString();
        res[1] = '0' + res[1];
    }
    if (res[2] < 10)
    {
        res[2] = res[2].toString();
        res[2] = '0' + res[2];
    }
    if (res[3] < 10)
    {
        res[3] = res[3].toString();
        res[3] = '0' + res[3];
    }
    days.innerHTML = res[0];
    hours.innerHTML = res[1];
    mins.innerHTML = res[2];
    seconds.innerHTML = res[3];
}

start_timer.addEventListener("click", () => {
    let timer = get_value();
    calculateTimer(timer);
    if (timer <= 0)
    {
        timeout_message.innerHTML = "Time to wake up!";
    }

    var t = setInterval(function(){
        if (timer <= 0)
        {
            timeout_message.innerHTML = "Time to wake up!";
            clearInterval(t);
        }
        timer -= 1;
        if (timer === 0)
        {
            timeout_message.innerHTML = "Time to wake up!";
        }
        if (timer >= 0)
        {
            calculateTimer(timer);
        }
    }, 1000);

});

