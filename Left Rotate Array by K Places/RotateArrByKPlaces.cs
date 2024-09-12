using System;

public class Program
{
    public static void Main(string[] args)
    {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7};
        int K = 2;
        LeftRotate(arr, K);
        Console.WriteLine("Rotated Array: " + string.Join(", ", arr));
    }
    
    static void LeftRotate(int[] arr, int K)
    {
        int n = arr.Length;
        K = K % n;
        
        //rotate from 0 to K
        ReverseArray(arr, 0, K - 1);
        
        //rotate from K to n - 1
        ReverseArray(arr, K, n - 1);
        
        //rotate the entire arr
        ReverseArray(arr, 0, n - 1);
    }
    
    static void ReverseArray(int[] arr, int start, int end)
    {
        int temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
