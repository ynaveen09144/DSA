//Brute force
using System;

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

        for (int i = 0; i < n; i++)
        {
            for (int j = i; j < n; j++)
            {
                if (IsUnique(s, i, j))
                {
                    maxLength = Math.Max(maxLength, j - i + 1);
                }
            }
        }

        return maxLength;
    }

    private static bool IsUnique(string s, int start, int end)
    {
        HashSet<char> charSet = new HashSet<char>();

        for (int i = start; i <= end; i++)
        {
            if (!charSet.Add(s[i]))
            {
                return false; 
            }
        }

        return true;
    }
}


//Optimal

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
