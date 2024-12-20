// Display the Febonacii series

#include<stdlib.h>
#include<stdio.h>

void Display(int arr[], int iSize)
{
    int i = 0;
    for(i = 0; i < iSize; i++)
    {
        printf("%d\t",arr[i]);
    }
}

void Febonacii(int iNo)
{
    int i = 0;
    static int iSum = 0;

    int Arr[iNo];

    for(i = 0; i <= iNo; i++)
    {
        iSum = iSum + i;
        Arr[i] = iSum;
    }

    Display(Arr, iNo);
}

int main()
{
    int iNo = 50;
    Febonacii(iNo);
    return 0;
}