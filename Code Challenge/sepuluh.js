var fibGenerator = function*() {
    let [prev, curr] = [0, 1];
    
    while (true) {
        yield prev;
        [prev, curr] = [curr, prev + curr];
    }
};


const gen1 = fibGenerator();
console.log(gen1.next().value); // Output: 0
console.log(gen1.next().value); // Output: 1
console.log(gen1.next().value); // Output: 1
console.log(gen1.next().value); // Output: 2
console.log(gen1.next().value); // Output: 3

// Example 2:
const gen2 = fibGenerator();
const fibSeq2 = Array.from({ length: 0 }, () => gen2.next().value);
console.log(fibSeq2); // Output: []