#include "main.h"

/**
* puts - prints a string, followed by a new line, to stdout
* @str: the string
* Return: number of character
*/
int _puts ( char *str)
{
    int i = 0
    while (str[i])
    {
          putchar(str[i]);
          i++;
     }
     return (i);
}

int print_string (va_list arg)
{
     return (_puts(va_arg(args, char *)));
}