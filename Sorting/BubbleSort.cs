// Brute

using System;

class Program
{
    static void Main()
    {
        int[] arr = { 64, 25, 12, 22, 11 };
        BubbleSort(arr);

        Console.WriteLine("Sorted array:");
        foreach (int num in arr)
        {
            Console.Write(num + " ");
        }
    }

    static void BubbleSort(int[] arr)
    {
        int n = arr.Length;

        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                // Swap if the element found is greater than the next element
                if (arr[j] > arr[j + 1])
                {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }
}
