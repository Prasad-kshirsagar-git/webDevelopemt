// Accept two number from users and swap without using third word

import java.lang.*;
import java.util.*;

class Swap
{
    public void SwapNumber(int iNo1, int iNo2)
    {
        iNo1 = iNo1 + iNo2;
        iNo2 = iNo1 - iNo2;
        iNo1 = iNo1 - iNo2;

        System.out.println("1st Number :->  "+iNo1);
        System.out.println("2nd Number :->  "+iNo2);
    }
}

class Program8
{
    public static void main(String arg[])
    {
        Swap sobj = new Swap();
        Scanner Scobj = new Scanner(System.in);

        System.out.println("Enter the first number");
        int iNo1 = Scobj.nextInt();

        System.out.println("Enter the second number");
        int iNo2 = Scobj.nextInt();

        sobj.SwapNumber(iNo1,iNo2);
    }
}