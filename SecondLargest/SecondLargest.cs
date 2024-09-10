//Brute

using System;

public class Program
{
    public static void Main(string[] args)
    {
        int[] arr = { 7, 7, 2, 2, 10, 10, 10 };
        int result = SecondLargest(arr);

        if (result != -1)
        {
            Console.WriteLine("Second largest element is: " + result);
        }
        else
        {
            Console.WriteLine("No second largest element found.");
        }
    }

    static int SecondLargest(int[] arr)
    {
        int n = arr.Length;
        if (n < 2)
        {
            return -1;  
        }

        Array.Sort(arr);  

        int largest = arr[n - 1];  
        int secLargest = -1;

        for (int i = n - 2; i >= 0; i--)
        {
            if (arr[i] != largest)
            {
                secLargest = arr[i];
                break;
            }
        }

        return secLargest;
    }
}

//Optimal

using System;

class Program
{
    static void Main()
    {
        int[] arr = { 8, 8, 7, 6, 5 };
        int secondLargest = FindSecondLargestElement(arr);
        Console.WriteLine("The second largest element is: " + secondLargest);
    }

    static int FindSecondLargestElement(int[] arr)
    {
        int n = arr.Length;
        
        if (n < 2) return -1; 
        
        int largest = int.MinValue;
        int secondLargest = int.MinValue;

        for (int i = 0; i < n; i++)
        {
            if (arr[i] > largest)
            {
                secondLargest = largest; 
                largest = arr[i];
            }
            else if (arr[i] > secondLargest && arr[i] != largest)
            {
                secondLargest = arr[i];
            }
        }

        return secondLargest == int.MinValue ? -1 : secondLargest; 
    }
}

