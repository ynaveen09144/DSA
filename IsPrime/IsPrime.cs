class Program
    {
        static void Main(string[] args)
        {
            int n = 10;
            Console.WriteLine($"First {n} prime numbers");
            PrintPrime(n);

        }

        static bool IsPrime(int number)
        {
            if(number <= 1) return false;
            if(number == 2) return true;
            if(number % 2 == 0) return false;

            int sqrt = (int)Math.Sqrt(number);
            for(int i = 3;  i <= sqrt; i += 2)
            {
                if(number % i == 0) return false;   
            }
            return true;
        }
        static void PrintPrime(int n)
        {
            int count = 0;
            int num = 2;

            while (count < n)
            {
                if(IsPrime(num))
                {
                    Console.WriteLine(num);
                    count++;
                }
                num++;
            }   
        }

    }
