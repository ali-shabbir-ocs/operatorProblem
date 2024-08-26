//We have an array and make a function to convert this array into (a<b OR (c==d AND e!=f))
const array = ["OR", ["<", "a", "b"], ["AND", ["==", "c", "d"], ["!=", "e", "f"]]]
//function
const arrayToString = (arr) => {
    let str = '';
    let operator = arr[0];
    if ((operator === 'OR') || (operator === 'AND')) {
        str += '(';
        str += arr.slice(1).map(subArr => arrayToString(subArr)).join(` ${operator} `); //due to nested arrays we have to call the function recursively 
        str += ')';
    }
    else if ((operator === '<') || (operator === '==') || (operator === '!=')) {
        str += `${arr[1]} ${operator} ${arr[2]}`;
    }
    return str;
};
console.log(arrayToString(array));