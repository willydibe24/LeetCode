#include <stdlib.h>
#include <string.h>
#include <stdio.h>

typedef int bool;
#define true 1;
#define false 0;


#define MAX_LETTERS 26


bool isAnagram(char* s, char* t) 
{    
    int length = strlen(s);
    if (length != strlen(t)) return false;

    int char_frequencies[MAX_LETTERS] = {0};

    for (int i = 0; i < length; i++)
    {
        char_frequencies[s[i] - 'a']++;
        char_frequencies[t[i] - 'a']--;
    }

    for (int i = 0; i < MAX_LETTERS; i++)
    {
        if (char_frequencies[i] != 0) return false;
    }
    return true;
}


int main()
{
    printf("%d\n", isAnagram("dgqztusjuu", "dqugjzutsu"));
    return 0;
}