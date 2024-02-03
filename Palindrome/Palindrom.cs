using System;

class Program
    {
        static void Main(string[] args)
        {
            int n = 121;
            Console.WriteLine($"The {n} numbers is");
            if(IsPalindrom(n))
            {
                Console.WriteLine($"The number {n} is palindrom");
            }
            else
            {
                Console.WriteLine($"The number {n} is not a palindrome");
            }
        }

        static bool IsPalindrom(int number)
        {
            int originalNum = number;
            int reverseNum = 0;

            while(number > 0)
            {
                int remainder = number % 10;
                reverseNum = reverseNum * 10 + remainder;
                number /= 10;
            }
            return reverseNum == originalNum;
        }

    }
