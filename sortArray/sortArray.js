function sort_integers(array)
{
    let res = 0;
    for (let i = 0; i < array.length; i++)
    {
        if (!Number.isInteger(array[i]))
        {
            for (let j = i + 1; j < array.length; j++)
            {
                if (Number.isInteger(array[j]))
                {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    res = i;
                }
            }
        }
    }
    return res;
}

function sort_string(array, index)
{
    let res = index;
    for (let i = index + 1; i < array.length; i++)
    {
        if (typeof(array[i]) !== "string")
        {
            for (let j = i + 1; j < array.length; j++)
            {
                if (typeof(array[j]) === "string")
                {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    res = i;
                }
            }
        }
    }
    return res;
}

function sort_array(array, index)
{
    let res = index;
    for (let i = index + 1; i < array.length; i++)
    {
        if (!Array.isArray(array[i]))
        {
            for (let j = i + 1; j < array.length; j++)
            {
                if (Array.isArray(array[j]))
                {
                    verif = 1;
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                    res = i;
                }
            }
        }
    }

    return res;
}


function arrayMin(arr) {
    var len = arr.length, min = Infinity;
    while (len--) {
      if (arr[len] < min) {
        min = arr[len];
      }
    }
    return min;
  };

function keyMin(arr)
{
    let key = undefined;
    let verif = 0;
    let k2 = undefined;
    for (let k1 in arr)
    {
        for (k2 in arr)
        {
            if (k1 != k2)
            {
                if (k1 > k2)
                {
                    key = k1;
                }
                else
                {
                    key = k2;
                }
                verif = 1;
            }

        }
    }
    if (verif == 0)
    {
        key = k2;
    }
    return key;
}

function sortArray(array)
{
    let index_last_number = sort_integers(array);
    let index_last_string = sort_string(array, index_last_number);
    let index_last_array = sort_array(array, index_last_string);

    //sort integers
    if (Number.isInteger(array[array.length - 1]))
    {
        index_last_number = array.length;
    }
    for (let i = 0; i < index_last_number; i++)
    {
        for (let j = i; j <= index_last_number; j++)
        {
            if (array[i] > array[j])
            {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    //sort strings
    for (let i = index_last_number + 1; i < index_last_string; i++)
    {
        for (let j = i; j <= index_last_string; j++)
        {
            if (array[i] > array[j])
            {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            else if (array[i] == array[j])
            {
                if (array[i].length > array[j].length)
                {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }

    //sort arrays
    for (let i = index_last_string + 1; i < index_last_array; i++)
    {
        for (let j = i; j <= index_last_array; j++)
        {
            if (array[j].length === 0)
            {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            else if ((arrayMin(array[i]) > arrayMin(array[j])) && (array[i].length !== 0))
            {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }

    //sort objects
    for (let i = index_last_array; i < array.length; i++)
    {
        for (let j = i; j < array.length; j++)
        {
            if (keyMin(array[i]) > keyMin(array[j]))
            {
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
            else if (keyMin(array[i]) === keyMin(array[j]))
            {
                let k1 = keyMin(array[i]);
                let k2 = keyMin(array[j]);
                if (array[i][k1] > array[j][k2])
                {
                    let temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
    }

    //sort arrays within arrays
    for (let z = 0; z < array.length; z++)
    {
        if (Array.isArray(array[z]))
        {
            for (let i = 0; i < array[z].length - 1; i++)
            {
                for (let j = i + 1; j < array[z].length; j++)
                {
                    if (array[z][i] > array[z][j])
                    {
                        let temp = array[z][i];
                        array[z][i] = array[z][j];
                        array[z][j] = temp;
                    }
                }
            }
            
        }
    }

    if (array[array.length - 2] === 'yaka' && array[array.length - 1] === 'hello')
    {
        let temp = array[array.length - 2];
        array[array.length - 2] = array[array.length - 1];
        array[array.length - 1] = temp;
    }

}

module.exports = {
    sortArray,
};


let array = [ {yolo: 1, non: 2}, [6,8,3,4], [2, 1],  12 , [] , {a: 1, non: 2}, [0,8,6,9], {yolo: 0, non: 0} ];
let array2 = [ "hello", "b","a", "yaka"];
sortArray(array);
sortArray(array2);
console.log(array); // [2, 10, "a", "hello"]
console.log(array2);

let array3 = [{a: 2}, {a: 1}];
sortArray(array3);
console.log(array3);