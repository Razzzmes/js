const firstObj ={a: 1, b: 1 }
const secondObj ={a: 1, b: 1 }

const firstObjKeys = Object.keys(firstObj);
const secondObjKeys = Object.keys(secondObj);


if (firstObjKeys.length !== secondObjKeys.length) {
    return false;
}

for (const key in firstObj) {

    if (secondObj.hasOwnProperty(key) && (firstObj[key] !== secondObj[key])) {
        return false;
    }
}

return true;