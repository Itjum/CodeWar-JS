function deepEquality(var1, var2)
{
    if (typeof(var1) !== typeof(var2))
    {
        return false;
    }
    if (var1 === null && var2 === null)
    {
        return true;
    }
    if (var1 === undefined && var2 === undefined)
    {
        return true;
    }
    if (Array.isArray(var1))
    {
        for (let i = 0; i < var1.length; i++)
        {
            if (var1[i] !== var2[i])
            {
                return false;
            }
        }
        return true;
    }
    else if (typeof(var1) === "object")
    {
        if (Object.keys(var1).length !== Object.keys(var2).length)
        {
            return false;
        }
        for (const z in var1)
        {
            if (!(deepEquality(var1[z], var2[z])))
            {
                return false;
            }
        }
        return true;
    }
    else
    {
        return var1 === var2;
    }
}

module.exports = {
    deepEquality,
}

/*
console.log(deepEquality(1, 1)); // true
console.log(deepEquality(1, "1")); // false
console.log(deepEquality([1, 2], [1, 2])); // true
console.log(deepEquality({ a: 1, b: 2 }, { a: 1, b: 2 })); // true

let array = [1, 2];
let array2 = [1, 2];
console.log(deepEquality({ arr: array }, { arr: array2 })); // true*/