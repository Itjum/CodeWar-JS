function armstrongNumber(number)
{
    if (number == undefined)
    {
        return false;
    }
    if (number == null)
    {
        return false;
    }
    let l = 0;
    let z = number;
    while (z > 0)
    {
        z = Math.floor(z / 10);
        l += 1;
    }
    let temp1 = 0;
    let temp2 = number;
    let res = 0;
    while (temp2 > 0)
    {
       temp1 = temp2 % 10;
       temp2 = Math.floor(temp2 / 10);
       temp1 = Math.pow(temp1, l);
       res = res + temp1;
    }
    if (res === number)
    {
        return true;
    }
    return false;
}


module.exports = {
    armstrongNumber,
}

console.log(armstrongNumber(153));