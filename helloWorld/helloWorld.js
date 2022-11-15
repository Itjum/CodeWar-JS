function helloWorld()
{
    console.log('Hello World!');
}

function factorial(n)
{
    if (n < 0)
        return -1;
    if (n === 0)
        return 1;
    return n * (factorial(n - 1));
}

module.exports = {
    helloWorld,
    factorial,
}
