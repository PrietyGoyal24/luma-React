Array.prototype.groupBy = function(keySelector){
    const result = {};
    if(!this || this.length ===0) return result;
    for(let item of this){
        let key;
        if(item === null || item === undefined){
            key = 'null';
        }else{
            key = keySelector(item);
        }
        if(!result[key]){
            result[key]=[];
        }
        result[key].push(item);
    }
    return result;
}

const numbers = [1,2,3,4,5,6,7,8,9];
const groupByEvenOdd = numbers.groupBy(x => x%2 ===0 ? 'Even' : 'Odd');
console.log("Even/Odd Grouping:", groupByEvenOdd);

const groupByFristDigit = numbers.groupBy(x => String(x)[0]);
console.log("First Digit Grouping:", groupByFristDigit);