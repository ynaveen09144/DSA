using System;

public class Program
{
    public static void Main(string[] args)
    {
        int[] arr = { 13, 46, 24, 52, 20, 9 };
        
        InsertionSorting(arr);
        
        Console.WriteLine("Sorted array:");
        foreach (int num in arr)
        {
            Console.Write(num + " ");
        }
    }

    static void InsertionSorting(int[] arr)
    {
        int n = arr.Length;
        for (int i = 1; i < n; i++)  
        {
            int j = i;
            while (j > 0 && arr[j - 1] > arr[j])
            {
                int temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                j--;
            }
        }
    }
}
