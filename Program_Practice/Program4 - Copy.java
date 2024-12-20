// if 10 elements in array check the even number element from array

import java.lang.*;
import java.util.*;

class Arithmatic
{
    public void ChkEven(int Arr[])
    {
        for(int i = 0; i < Arr.length; i++)
        {
            if(Arr[i] % 2 == 0)
            {
                System.out.println("index "+i+" :->  Even Number");
            }
            else
            {
                System.out.println("index "+i+" :->  odd number");  
            }
        }
    }
}

class Program4
{
    public static void main(String ar[])
    {
        Arithmatic Aobj = new Arithmatic();
        Scanner sobj =  new Scanner(System.in);

        System.out.println("Enter the number of elements in array");
        int iNumber = sobj.nextInt();

        int Arr[] = new int[iNumber];

        System.out.println("Enter the numbers.....!");

        for(int i = 0; i < iNumber; i++ )
        {
            System.out.print("At index "+i+" :-> ");
            Arr[i] = sobj.nextInt();
            System.out.println();
        }

        Aobj.ChkEven(Arr);
    }
}