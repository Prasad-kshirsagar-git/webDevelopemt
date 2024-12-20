// Accept the number from user and check whether its prime or not

import java.lang.*;
import java.util.*;

class Arithmatic
{
    public boolean ChkPrime(int iNo1)
    {   
       int iCnt = 0;

       for(iCnt = 2; iCnt <= iNo1/2; iCnt++)
       {
            if(iNo1 % iCnt == 0)
            {
                break;
            }
       }

       if(iCnt == (iNo1/2 + 1))
       {
            return true;
       }
       else
       {
            return false;
       }
    }
}

class Program3
{
    public static void main(String arg[])
    {
        Arithmatic Aobj = new Arithmatic();

        Scanner sobj = new Scanner(System.in);
        System.out.println("Enter the number to check the prime or not");
        int iNo1 = sobj.nextInt();

        boolean iRet = Aobj.ChkPrime(iNo1);
        
        if(iRet == true)
        {
            System.out.println("Number is prime");
        }
        else
        {
            System.out.println("Number is Not prime");
        }
    }
}