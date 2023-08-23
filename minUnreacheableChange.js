function minUnreachableChange(coins) {
    coins.sort((a, b) => a - b);

    let minChange = 1;

    for (const coin of coins) {
        if (coin > minChange) {
            break;
        }
        minChange += coin;
    }

    return minChange;
}

// Test case
const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(minUnreachableChange(coins));  // Output: 20