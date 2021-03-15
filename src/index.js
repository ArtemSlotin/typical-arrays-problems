
exports.min = function min (array) {
    if (array instanceof Array) {
        if (array.length > 0) {
            array.sort((a, b) => {return a - b});
            console.log(array);
            return array[0];
        } else {
            return 0;
        }
    } else {
        return 0;
    }
}

exports.max = function max (array) {
    if (array instanceof Array) {
        if (array.length > 0) {
            array.sort((a, b) => {return a - b});
            console.log(array);
            return array[array.length - 1];
        } else {
            return 0;
        }
    } else {
        return 0;
    }
    
}

exports.avg = function avg (array) {
    if (array instanceof Array) {
        if (array.length > 0) {
            let average = 0;
            for(let i = 0; i < array.length; i++) {
             average += array[i];
             console.log(array[i]);
            }
             return average / array.length;
         } else {
             return 0;
         }
    } else {
        return 0;
    }   
}
