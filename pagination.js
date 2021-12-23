let alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
let arr = [];
let result = '';


function init(array, pagesize) {

    if(array.length < pagesize) {
    arr.push(array.join(''))
    return arr;
}
 
    for(i = 0; i < pagesize; i++){
    result = result + array[i]
 }
    array.splice(0, pagesize);
    arr.push(result);
    result = '';
    return init(array, pagesize)
}

// console.log(init(alphabetArray, 4))
let control = init(alphabetArray, 4);

function getPageItems(cb, page){
   return cb[page-1].split('')
}

console.log(getPageItems(control, 3))


