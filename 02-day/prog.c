#include <stdio.h>
#include <stdlib.h>

int main(int argc, char *argv[])
{
    FILE *fp = fopen("input.txt", "r");
    if (fp == NULL) {
        perror("fopen");
        exit(EXIT_FAILURE);
    }
    char *line = NULL;
    size_t len = 0;
    int result1 = 0;
    int result2 = 0;
    while ((getline(&line, &len, fp)) != -1) {
        int a = line[0] - 'A';
        int b = line[2] - 'X';
        result1 += b+1 + ((b-a+4) % 3) * 3;
        result2 += (a+b+2)%3 + 1 + b*3;
    }
    fclose(fp);
    printf("result1: %d\n", result1);
    printf("result2: %d\n", result2);

    return 0;
}