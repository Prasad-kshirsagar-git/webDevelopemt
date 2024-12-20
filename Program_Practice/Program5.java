// check whether the number is palindrome or not

import java.lang.*;
import java.util.*;

class Arithmatic
{
    public boolean ChkPrlindrome(int iNo1)
    {
        int iTemp = iNo1;
        int iDigit = 0;
        int iSum = 0; 

        while(iNo1 > 0)
        {
            iDigit = iNo1 % 10;
            iSum = (iSum * 10) + iDigit;
            iNo1 = iNo1/10;   
        }

        if(iSum == iTemp)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

class Program5
{
    public static void main(String arg[])
    {
        Arithmatic Aobj = new Arithmatic();
        Scanner sobj = new Scanner(System.in);

        System.out.println("Enter the number to check the palindrome or not");
        int iNo1 = sobj.nextInt();

        boolean bRet = Aobj.ChkPrlindrome(iNo1);

        if(bRet == true)
        {
            System.out.println("Number is palindrome");
        }
        else
        {
            System.out.println("Number is not palindrome");
        }
    }
}