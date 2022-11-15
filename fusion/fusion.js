const { type } = require("express/lib/response");

function fusion(...objs)
{
    if (objs.length === 0)
    {
        return {};
    }
    return objs.reduce((el1, el2) => {
        if ((typeof(el1) !== typeof(el2)) || (typeof(el1) === "boolean" && typeof(el2) === "boolean"))
        {
            el1 = el2;
            return el1;
        }
        else if (Array.isArray(el1))
        {
            el1 = el1.concat(el2);
            return el1;
        }
        else if ((typeof(el1) === "object"))
        {
            for (let k in el2)
            {
                if (!el1.hasOwnProperty(k))
                {
                    el1[k] = fusion(el2[k]);
                }
                else
                {
                    el1[k] = fusion(el1[k], el2[k]);
                }
            }
            return el1;
        }
        else
        {
            return el1 + el2;
        }
        
    });
}


module.exports = {
    fusion,
}

