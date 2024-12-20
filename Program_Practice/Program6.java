// check whether the String is palindrome or not

import java.lang.*;
import java.util.*;

class Arithmatic
{
    public boolean ChkPrlindrome(String str)
    {
        String strNew = "";
        int iCnt = 0;

        for(iCnt = str.length()-1; iCnt >= 0; iCnt--)
        {
            strNew = strNew + str.charAt(iCnt);
        }

        if(str.equals(strNew))
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}

class Program6
{
    public static void main(String arg[])
    {
        Arithmatic Aobj = new Arithmatic();
        Scanner sobj = new Scanner(System.in);

        System.out.println("Enter the String to check the palindrome or not");
        String str = sobj.nextLine();

        boolean bRet = Aobj.ChkPrlindrome(str);

        if(bRet == true)
        {
            System.out.println("String is palindrome");
        }
        else
        {
            System.out.println("String is not palindrome");
        }
    }
}