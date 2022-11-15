function toRoman(number)
{
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let res = '';
    for (let i of Object.keys(roman))
    {
        let q = Math.floor(number/roman[i]);
        number -= q * roman[i];
        res += i .repeat(q);
    }
    return res;
}

function fromRoman(romanString)
{
    var roman = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let res = 0;
    let temp = '';
    for (let i = 0; i < romanString.length; i++)
    {
        let verif = false;
        temp = romanString.charAt(i);
        if (i + 1 < romanString.length)
        {
            temp += romanString.charAt(i + 1);
        }
        for (let x of Object.keys(roman))
        {
            if (x === temp)
            {
                res += roman[x];
                verif = true;
                i += 1;
                break;
             }
        }
        if (verif === false)
        {
            for (let x of Object.keys(roman))
            {
                if (x == romanString.charAt(i))
                {
                    res += roman[x];
                    
                    break;
                }
            }
        }
    }
    return res;
}

module.exports = {
    toRoman,
    fromRoman,
}