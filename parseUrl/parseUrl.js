function parseUrl(url)
{
    let res = {};
    regexurl = /(?<protocol>[a-zA-Z]+:)(?<subprotocol>[a-zA-Z]+:)?\/\/((?<username>[a-zA-Z0-9]+):(?<password>[a-zA-Z0-9]+)@)?((?<host>[a-zA-Z.]+)(:(?<port>[0-9]+))?)?(?<pathname>\/[a-zA-Z.0-9\/]*)(?<search>\?[a-zA-Z=]+)?(?<hash>#[a-zA-Z0-9]+)?/g;
    let match = regexurl.exec(url);
    let origin = "null";
    let host = "";
    let hostname = "";
    let protoc = "";
    let usern = "";
    let pass = "";
    let por = "";
    let pathn = "";
    let searc = "";
    let hashh = "";
    if (match != null && match.groups != null)
    {
        if (match.groups.host !== undefined)
        {
            host = match.groups.host;
            hostname = match.groups.host;          
        }
        if (match.groups.subprotocol !== undefined && match.groups.host !== undefined)
        {
            origin = match.groups.subprotocol + "//" + match.groups.host;
        }
        else if (match.groups.host !== undefined)
        {
            origin = match.groups.protocol + "//" + match.groups.host;
        }
        if (match.groups.protocol !== undefined)
        {
            protoc = match.groups.protocol;
        }
        if (match.groups.username !== undefined)
        {
            usern = match.groups.username;;
        }
        if (match.groups.password !== undefined)
        {
            pass = match.groups.password;
        }
        if (match.groups.port !== undefined)
        {
            por = match.groups.port;
            host = host + ':' + match.groups.port;
            origin = origin + ':' + match.groups.port
        }
        if (match.groups.pathname !== undefined)
        {
            pathn = match.groups.pathname;
        }
        if (match.groups.search !== undefined)
        {
            searc = match.groups.search;
        }
        if (match.groups.hash !== undefined)
        {
            hashh = match.groups.hash;
        }
    }
    else
    {
        throw new Error("Invalid URL");
    }
    res['href'] = url;
    res['origin'] = origin;
    res['protocol'] = protoc;
    res['username'] = usern;
    res['password'] = pass;
    res['host'] = host;
    res['hostname'] = hostname;
    res['port'] = por;
    res['pathname'] = pathn;
    res['search'] = searc;
    res['hash'] = hashh;
    return res;
}

module.exports = {
    parseUrl,
};

/*
console.log(parseUrl("http://example.com/"));
console.log(parseUrl("http://user:pass@host:8080/path?query#hash"));
console.log(parseUrl("http://www.example.com:8080/path/to/file.php?param=value#fragment"));
console.log(parseUrl("file:///path/to/file.php"));
console.log(parseUrl("blob:http://www.example.com/path/to/file.php"));
*/