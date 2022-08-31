using System;

namespace vector_01
{
    class Program
    {
        static void Main(string[] args)
        {
            int mayor = 0, posicion = 0;
            int [] numeros = new int[10];
            Console.WriteLine("Ingrese 10 números");
            for (int i = 0; i < 10; i++) {
                numeros[i] = int.Parse(Console.ReadLine());
                if (i == 0) {
                    mayor = numeros[i];
                    posicion = i + 1;
                } else {
                    if (numeros[i] > mayor) {
                        mayor = numeros[i];
                        posicion = i + 1;
                    }
                }
            }
            Console.WriteLine("El numero mayor es: " + mayor + " su posición es " + posicion);
        }
    }
}
