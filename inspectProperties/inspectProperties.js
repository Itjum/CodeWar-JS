function getNumberFields(inputObject)
{
    if (inputObject === null || inputObject === undefined)
    {
        return [];
    }

    let res = [];
    for (let k in inputObject)
    {
        if (typeof(inputObject[k]) === "number")
        {
            res.push(k);
        }
    }
    return res;
}

function incrementCounters(inputObject)
{
    if (inputObject === null || inputObject === undefined)
    {
        return;
    }
    for (let k in inputObject)
    {
        if (typeof(inputObject[k]) === "number")
        {
            inputObject[k] += 1;
        }
    }
}

function deleteUppercaseProperties(inputObject)
{
    if (typeof(inputObject) !== "object" || inputObject === null || inputObject === undefined)
    {
        return;
    }
    for (let k in inputObject)
    {
        deleteUppercaseProperties(inputObject[k]);
        if (k === k.toUpperCase())
        {
            delete inputObject[k];
        }
    }
}


module.exports = {
    getNumberFields,
    incrementCounters,
    deleteUppercaseProperties,
}


/*let a = { a: 1, b: 2 };
let b = { A: 1, B: 2 };
console.log(getNumberFields(a));
incrementCounters(a);
console.log(a);
deleteUppercaseProperties(a);
console.log(a);
deleteUppercaseProperties(b);
console.log(b);*/