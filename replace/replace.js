function replace(str)
{
    str = str.replace(/(\d{1,2})\/(\d{1,2})\/(\d{4})/gi, '$3-$1-$2');
    return str;
}

module.exports = {
    replace,
}
