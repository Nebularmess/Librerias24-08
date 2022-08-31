using System;

namespace vector_02
{
    class Program
    {
        static void Main(string[] args)
        {
            int acu = 0, promedio = 0;
            int[] numeros = new int[10];
            Console.WriteLine("Ingerese 10 numeros");
            for (int i = 0; i < 10; i++)
            {
                numeros [i] = int.Parse(Console.ReadLine());
                acu += numeros [i];
            }
            promedio = acu / 10;
            for (int i = 0; i < 10; i++)
            {
                if (numeros [i] > promedio)
                {
                    Console.WriteLine(numeros [i] + " es mayor que el promedio");
                }
            }
        }
    }
}
