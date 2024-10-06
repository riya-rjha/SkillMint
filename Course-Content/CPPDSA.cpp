#include <iostream>
#include <vector>
using namespace std;

    /*
     * Problem Statement:
     * Given an array nums of size n, return the majority element. The majority
     * element is the element that appears more than n/2 times. You may assume that
     * the majority element always exists in the array.
     */

    /*
     * Solution:
     * Input: nums = {3, 2, 3}
     * Output: 3
     */

int majorityElement(vector<int>& nums) {
    int count = 0, candidate = 0;

    // Find the candidate using Boyer-Moore Voting Algorithm
    for (int num : nums) {
        if (count == 0) candidate = num;
        count += (num == candidate) ? 1 : -1;
    }

    return candidate;
}

int main() {
    vector<int> nums = {3, 2, 3};
    cout << "Majority Element: " << majorityElement(nums) << endl; // Output: 3
    return 0;
}
