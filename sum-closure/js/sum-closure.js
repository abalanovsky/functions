function init() {
    let count = 0
    return function sum(num) {
        count += num
        return count
    }
}

const sum = init()
console.log(sum(5));
console.log(sum(5));
console.log(sum(5));
