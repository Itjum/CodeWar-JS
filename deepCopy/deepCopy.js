function deepCopy(x)
{
    let result = undefined;
    if (x === null || x === undefined)
    {
        return x;
    }
    if (Array.isArray(x))
    {
        result = [];
        for (let i = 0; i < x.length; i++)
        {
            result.push(deepCopy(x[i]));
        }
    }
    else if (typeof(x) === "object")
    {
        result = {};
        for (let k in x)
        {
            result[k] = deepCopy(x[k])
        }
    }
    else
    {
        result = x;
    }
    return result;
}

module.exports = {
    deepCopy,
}

/*let array = ["Hello"];
let copy = array;
array.push(" ", "World", "!");
console.log(array); // ["Hello", " ", "World", "!"]
console.log(copy); // ["Hello", " ", "World", "!"]
let array_deep = ["Hello"];
let copy_deep = deepCopy(array_deep);
array_deep.push(" ", "World", "!");
console.log(array_deep); // ["Hello", " ", "World", "!"]
console.log(copy_deep); // ["Hello"]

let n_obj = {a: {c:2}, b:3};
let n_cpy = n_obj;
n_obj["r"] = "yes";
console.log(n_obj);
console.log(n_cpy);
let obj = {a: {c:2}, b:3};
let cpy = deepCopy(obj);
obj.a.c = "yes";
console.log(obj);
console.log(cpy);*/