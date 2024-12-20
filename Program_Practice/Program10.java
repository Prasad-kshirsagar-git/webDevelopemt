// check number is amstrong or not

import java.lang.*;
import java.util.*;

class math
{
    public boolean chkAmstrong(int iNo)
    {
        int iTemp = 0, iCnt = 0, iMult = 1;
        int iDigitCnt = 0, iDigit = 0, iSum = 0;

        if(iNo < 0)
        {
            iNo = -iNo;
        }

        iTemp = iNo;

        while(iNo != 0)
        {
            iNo = iNo / 10;
            iDigitCnt++;
        }

        iNo = iTemp;

        while(iNo != 0)
        {
            iMult = 1; 
            iDigit = iNo % 10;

            for(iCnt = 1; iCnt <= iDigitCnt; iCnt++)
            {
                iMult = iMult * iDigit;
            }

            iSum = iSum + iMult;
            iNo = iNo / 10;
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

class Program10
{
    public static void main(String arg[])
    {
        math Aobj = new math();
        Scanner sobj = new Scanner(System.in);

        System.out.println("Enter the number");
        int iNo = sobj.nextInt();

        boolean bRet = Aobj.chkAmstrong(iNo);

        if(bRet == true)
        {
            System.out.println("its amstrong");
        }
        else
        {
            System.out.println("its not amstrong");
        }
    }
}