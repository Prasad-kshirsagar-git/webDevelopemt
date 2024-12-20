#include<iostream>
using namespace std;

class Febonacii
{
    public : 
    int no;
    int arr[];

    Febonacii(int a)
    {
        this->no = a;
        this->arr = new int this->arr[a];
    }

    void Series()
    {
        int i = 0;
        static int iSum = 0;
        for(i = 0; i <= this->no; i++)
        {
            iSum = iSum + i;
            this->arr[i] = iSum;
        }
    }

    void Display()
    {   
        int i = 0; 
        for(i = 0; i < this->no; i++)
        {
            cout<<this->arr[i]<<"\n";
        }
    }
};

int main()
{
    Febonacii fobj(10);
    fobj.Series();
    fobj.Display();
    return 0;
}