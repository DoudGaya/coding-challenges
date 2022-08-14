/** _printf - A function to print formatted output.
@format: The format string to use.
@...: The arguments to insert into the format string.
Description: This function prints formatted output to stdout.
Return: The number of characters printed.
 */




/** print_string - A function to print a string.
 @str: The string to print.
Description: This function prints a string to stdout.
Return: The number of characters printed.
*/








int _printf(const char *format, ...)
{
    int i = 0, count = 0;
while (format[i])
{
    _putchar(format[i]);
    count++;
    i++;
}
return (count);

}