function smallestDifference(a, b) {
    let minDiff = Infinity;
    
    for (const numA of a) {
        for (const numB of b) {
            const diff = Math.abs(numA - numB);
            
            minDiff = Math.min(minDiff, diff);
        }
    }
    
    return minDiff;
}

// Test cases
const a1 = [1, 3, 15, 11, 2];
const b1 = [23, 127, 235, 19, 8];
console.log(smallestDifference(a1, b1));  // Salida: 3

const a2 = [10, 5, 40];
const b2 = [50, 90, 80];
console.log(smallestDifference(a2, b2));  // Salida: 10