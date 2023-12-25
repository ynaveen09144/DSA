
using System;

public class HelloWorld
{
    public static void Main(string[] args)
    {
        HelloWorld result = new HelloWorld();
        int res = result.StockBuy(new int[] {7,1,5,3,6,4});
        Console.WriteLine(res);
    }
    public int StockBuy(int[] prices)
    {
        int buy = 0, sell = 1, maxProfit = 0;
        
        while(sell < prices.Length)
        {
            if(prices[sell] > prices[buy])
            {
                int profit = prices[sell] - prices[buy];
                maxProfit = Math.Max(profit, maxProfit);
            }
            else 
            {
                buy = sell;
            }
            sell++;
        }
        return maxProfit;
    }
}
