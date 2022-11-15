function loginEasy(str)
{
    return /^([a-z\-]+\.[a-z\-]+)$/.test(str);
}

function loginMedium(str)
{
    return /^([-a-z]+[0-9]?\.[a-z-]+)$/.test(str);
}

function loginHard(str)
{
    if (loginMedium(str))
    {
        return true;
    }
    else
    {
        return /^([a-z]+\_[a-z0-9\-])$/.test(str);
    }
}

function isDate(str)
{
    return /^(0*(([1-2][0-9])|([3][0-1])|([1-9])))\/(0*([1][0-2]|[1-9]))\/([0-9]*)$/.test(str);
}

module.exports = {
    loginEasy,
    loginMedium,
    loginHard,
    isDate,
}
