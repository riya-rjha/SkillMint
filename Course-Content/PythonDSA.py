# Problem Statement
# Given an integer array nums, move all 0s to the end of it while maintaining the relative order of the non-zero elements.
# You must do this in-place without making a copy of the array.

# Solution
# Input: nums = [0, 1, 0, 3, 12]
# Output: [1, 3, 12, 0, 0]

def moveZeroes(nums):
    # Pointer for non-zero elements
    non_zero_pos = 0

    # Traverse through all elements in the array
    for i in range(len(nums)):
        # If the element is non-zero, we move it to the non_zero_pos
        if nums[i] != 0:
            nums[non_zero_pos], nums[i] = nums[i], nums[non_zero_pos]
            non_zero_pos += 1

# Example usage
nums = [0, 1, 0, 3, 12]
moveZeroes(nums)
print("After moving zeroes:", nums)  # Output: [1, 3, 12, 0, 0]
