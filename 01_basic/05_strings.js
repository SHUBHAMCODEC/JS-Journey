const name="Shubham";
const lastName="Sharma";

console.log(name+lastName);

const age=22;
console.log(name+age);
console.log(age+name);
console.log(`my name is ${name} ${lastName} with age ${age}`);

const lastName1= new String('sharmaji');

console.log(typeof String);  // object




/* SOME FUNCTION OF STRINGS:

 The code you provided seems to be related to JavaScript's `String` object and its available methods. Here's an explanation of the methods listed:

1. **`anchor(name)`**: Creates an HTML anchor (`<a>` tag) with the specified name.
2. **`at(index)`**: Returns the character at the given index (positive or negative).
3. **`big()`**: Creates a `<big>` HTML tag around the string.
4. **`blink()`**: Creates a `<blink>` HTML tag around the string (deprecated).
5. **`bold()`**: Wraps the string in a `<b>` tag for bold text.
6. **`charAt(index)`**: Returns the character at the specified index.
7. **`charCodeAt(index)`**: Returns the Unicode of the character at the specified index.
8. **`codePointAt(index)`**: Returns the code point (Unicode) value of the character at the given position.
9. **`concat(...strings)`**: Combines the string with other strings and returns the result.
10. **`endsWith(searchString)`**: Checks if the string ends with a specified substring.
11. **`fixed()`**: Wraps the string in a `<tt>` (teletype) tag (deprecated).
12. **`fontcolor(color)`**: Changes the font color of the string in an HTML `<font>` tag.
13. **`fontsize(size)`**: Sets the font size of the string in an HTML `<font>` tag.
14. **`includes(searchString)`**: Checks if the string contains the specified substring.
15. **`indexOf(searchValue)`**: Returns the index of the first occurrence of the substring.
16. **`isWellFormed()`**: Checks if the string is well-formed per Unicode standards.
17. **`italics()`**: Wraps the string in an `<i>` tag for italic text.
18. **`lastIndexOf(searchValue)`**: Returns the index of the last occurrence of the substring.
19. **`length`**: Returns the length (number of characters) of the string.
20. **`link(url)`**: Wraps the string in an anchor tag (`<a>`) with the specified URL.
21. **`localeCompare(compareString)`**: Compares two strings according to the host locale's sort order.
22. **`match(regex)`**: Matches the string against a regular expression and returns the matches.
23. **`matchAll(regex)`**: Returns an iterator of all matches of a regular expression.
24. **`normalize()`**: Returns the Unicode normalization form of the string.
25. **`padEnd(targetLength)`**: Pads the string at the end with a specified character until it reaches the target length.
26. **`padStart(targetLength)`**: Pads the string at the beginning with a specified character until it reaches the target length.
27. **`repeat(count)`**: Returns a new string with the original string repeated the specified number of times.
28. **`replace(searchValue, newValue)`**: Replaces occurrences of the specified value with a new string.
29. **`replaceAll(searchValue, newValue)`**: Replaces all occurrences of the specified value with a new string.
30. **`search(regex)`**: Searches the string using a regular expression and returns the index of the match.
31. **`slice(beginIndex, endIndex)`**: Extracts a section of the string and returns it as a new string.
32. **`small()`**: Wraps the string in a `<small>` HTML tag.
33. **`split(separator)`**: Splits the string into an array of substrings based on a separator.
34. **`startsWith(searchString)`**: Checks if the string starts with the specified substring.
35. **`strike()`**: Wraps the string in a `<strike>` HTML tag for strikethrough text (deprecated).
36. **`sub()`**: Wraps the string in a `<sub>` HTML tag (for subscript).
37. **`substr(start, length)`**: Returns a substring starting at a specified position for a given length (deprecated).
38. **`substring(start, end)`**: Returns a substring between two indices.
39. **`sup()`**: Wraps the string in a `<sup>` HTML tag (for superscript).
40. **`toLocaleLowerCase()`**: Converts the string to lowercase based on the host’s locale.
41. **`toLocaleUpperCase()`**: Converts the string to uppercase based on the host’s locale.
42. **`toLowerCase()`**: Converts the string to lowercase.
43. **`toString()`**: Returns the string as a string (the same object).
44. **`toUpperCase()`**: Converts the string to uppercase.
45. **`toWellFormed()`**: Converts the string to a well-formed Unicode string.
46. **`trim()`**: Removes whitespace from both ends of the string.
47. **`trimEnd()`**: Removes whitespace from the end of the string.
48. **`trimStart()`**: Removes whitespace from the beginning of the string.
49. **`valueOf()`**: Returns the primitive value of the string object.

These methods help manipulate and interact with strings in various ways, such as formatting, searching, and modifying the text.
 */
