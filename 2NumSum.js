/*
Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/

var twoSum = function(nums, target) {
    let myMap = new Map()
    
    for (let i=0; i<nums.length; i++) {
        
        let currTarget = target - nums[i]
        
        if (myMap.has(currTarget)) {
            return [myMap.get(currTarget), i]
        }
        myMap.set(nums[i], i)
    }
};

