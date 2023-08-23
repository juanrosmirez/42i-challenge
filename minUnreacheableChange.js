function minUnreachableChange(coins) {
    coins.sort((a, b) => a - b);  // Sort the coins in ascending order

    let minChange = 1;  // Initialize the minimum amount of change

    for (const coin of coins) {
        if (coin > minChange) {
            break;  // Found the smallest amount that cannot be created
        }
        minChange += coin;  // Update the minimum amount of change
    }

    return minChange;
}

// Test case
const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(minUnreachableChange(coins));  // Output: 20