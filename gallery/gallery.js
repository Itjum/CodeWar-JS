const fs = require('fs');

function extract(directoryPath)
{
    if (fs.existsSync(directoryPath))
    {
        let res = [];
        let regex = /([a-z0-9_.+-]*[@][a-z0-9.-]*[.][a-zA-Z0-9.][a-zA-Z0-9.][a-zA-Z0-9.]*)/g;
        let filenames = fs.readdirSync(directoryPath);
        filenames.forEach(file => {
            const data = fs.readFileSync(directoryPath + '/' + file, {encoding:'utf8', flag:'r'});
            let matchEmail = data.match(regex);
            if (matchEmail !== null && matchEmail.length > 0)
            {
                for (let i = 0; i < matchEmail.length; i++)
                {
                    res.push(matchEmail[i]);
                }
            }
        });
        return res;
    }
    else
    {
        throw Error("The directory does not exist");
    }
}

module.exports = {
    extract,
}

//console.log(extract("test"));