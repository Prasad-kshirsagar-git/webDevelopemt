/*
display the pattern

*   *   *   *   *
*               *
*       *       *
*               *
*   *   *   *   *

*/

import java.lang.*;
import java.util.*;

class Pattern
{
    public void DisplayPattern(int iRow, int iCol)
    {
        int i = 0, j = 0;
        int MiddleRow = iRow/2;
        int MiddleCol = iCol/2;

        int Arr[][] = new int [iRow][iCol];

        for(i = 0; i < iRow; i++)
        {
            for(j = 0; j < iCol; j++)
            {
                if((i == 0) || (i == iRow-1) || (j == 0) || (j == iCol-1))
                {
                    System.out.print("*\t");
                }
                else if((i == MiddleCol) && (j == MiddleRow))
                {
                    System.out.print("*\t");
                }
                else
                {
                    System.out.print(" \t");
                }
            }
            System.out.println("\n");
        }
    }
}

class Program9
{
    public static void main(String ar[])
    {
        Pattern pobj = new Pattern();
        Scanner sobj = new Scanner(System.in);

        System.out.println("Enter the number of row");
        int iRow = sobj.nextInt();

        System.out.println("Enter the number of coloumn");
        int iCol = sobj.nextInt();

        pobj.DisplayPattern(iRow,iCol);
    }
}