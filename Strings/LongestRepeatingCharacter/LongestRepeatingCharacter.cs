using System;

class Solution {
    public static int CharacterReplacement(string s, int k) {
        int[] count = new int[26];
        int maxCount = 0;
        int maxLength = 0;
        int start = 0;

        for (int end = 0; end < s.Length; end++) {
            maxCount = Math.Max(maxCount, ++count[s[end] - 'A']);
            int windowSize = end - start + 1;
            if (windowSize - maxCount > k) {
                count[s[start] - 'A']--;
                start++;
            }
            maxLength = Math.Max(maxLength, end - start + 1);
        }

        return maxLength;
    }

    static void Main(string[] args) {
        string s = "ABAB";
        int k = 2;
        Console.WriteLine(CharacterReplacement(s, k)); 
    }
}
