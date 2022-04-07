#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main ()
{
        int i = 0;
        while (1)
        {
                printf ("%d,%ld\n",i+=10,random()%100);
                fflush(stdout);
                sleep(1);
        }
}