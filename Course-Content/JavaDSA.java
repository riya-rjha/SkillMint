public class JavaDSA {

    /*
     * Problem Statement:
     * Given an integer array nums, determine if any value appears at least twice.
     * Return true if any value appears more than once, and false if all elements
     * are distinct.
     */

    /*
     * Example:
     * Input: nums = {1, 2, 3, 1}
     * Output: true
     */

    public static boolean containsDuplicate(int[] nums) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : nums) if (!set.add(num)) return true;
        return false;
    }

    public static void main(String[] args) {
        int[] nums = {1, 2, 3, 1};
        System.out.println(containsDuplicate(nums));  // Output: true
    }
}

