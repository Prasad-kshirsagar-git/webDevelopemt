// take any string and reverse it.

import java.lang.*;
import java.util.*;

class Arithmatic
{
    public void ReverseString(String str)
    {
        String strNew = "";
        int iCnt = 0;

        for(iCnt = str.length()-1; iCnt >= 0; iCnt--)
        {
            strNew = strNew + str.charAt(iCnt);
        }

        System.out.println("Reverse String is :-> "+strNew);
    }
}

class Program7
{
    public static void main(String arg[])
    {
        Arithmatic Aobj = new Arithmatic();
        Scanner sobj = new Scanner(System.in);

        System.out.println("Enter the String to Reverse it");
        String str = sobj.nextLine();

        Aobj.ReverseString(str);
    }
}