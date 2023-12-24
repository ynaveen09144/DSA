// Brute force

using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        HelloWorld result = new HelloWorld();
        var res  = result.Palindrome(121);
        Console.WriteLine(res);
    }
    
    public bool Palindrome(int x)
    {
        int actual = x, lastDigit = 0, rem = 0;
        
        while(x > 0)
        {
            lastDigit = x % 10;
            rem =  rem * 10 + lastDigit;
            x = x / 10;
        }
        if(actual == rem)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}
