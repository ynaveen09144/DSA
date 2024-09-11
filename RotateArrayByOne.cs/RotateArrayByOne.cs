using System;

public class Program
{
    public static void Main(string[] args)
    {
        int[] arr = { 1, 2, 3, 4, 5, 6, 7 };
        int[] result = RotateArray(arr);
        foreach(int res in result)
        {
            Console.Write(res + " ");
        }
    }
    
    static int[] RotateArray(int[] arr)
    {
        int n = arr.Length;
        int first = arr[0];  
        
        for(int i = 0; i < n - 1; i++) 
        {
            arr[i] = arr[i + 1];
        }
        
        arr[n - 1] = first;
        
        return arr;  
    }
}
