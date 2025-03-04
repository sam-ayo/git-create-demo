function twoSum(nums: number[], target: number): number[] {
    // Create a hash map to store complement values
    const numMap = new Map<number, number>();
    
    // Iterate through the array
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Check if the complement exists in the map
        if (numMap.has(complement)) {
            // Return the indices of the two numbers
            return [numMap.get(complement)!, i];
        }
        
        // Store the current number and its index
        numMap.set(nums[i], i);
    }
    
    // If no solution is found
    return [];
}

// Example test cases
console.log(twoSum([2, 7, 11, 15], 9)); // Should output [0, 1]
console.log(twoSum([3, 2, 4], 6)); // Should output [1, 2]
console.log(twoSum([3, 3], 6)); // Should output [0, 1]
