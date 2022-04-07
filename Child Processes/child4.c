#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

int main ()
{
        int i,r;
	int c = 0;
        while (1)
        {	for(i=0;i<8;i++){
                printf ("%ld,%ld,%ld,%ld,%ld,%ld,%ld,%ld\n",random()%100,random()%100,random()%100,random()%100,random()%100,random()%100,random()%100,random()%100);
                fflush(stdout);
                sleep(1);
}
        }
}
