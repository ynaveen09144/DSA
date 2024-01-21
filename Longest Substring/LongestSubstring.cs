using System;
using System.Collections.Generic;

public class Program
{
    public static void Main(string[] args)
    {
        string s = "abcabcbb";
        int result = LengthOfLongestSubstring(s);
        Console.WriteLine(result);
    }

    public static int LengthOfLongestSubstring(string s)
    {
        int n = s.Length;
        int maxLength = 0;

        HashSet<char> charSet = new HashSet<char>();

        int left = 0;
        int right = 0;

        while (right < n)
        {
            if (!charSet.Contains(s[right]))
            {
                charSet.Add(s[right]);
                maxLength = Math.Max(maxLength, right - left + 1);
                right++;
            }
            else
            {
                charSet.Remove(s[left]);
                left++;
            }
        }

        return maxLength;
    }
}
