# Mutations-Algorithm
This program checks whether all the letters of the second string exist in the first string.

How It Works

1. Convert both strings to lowercase (to ignore case differences).
2. Loop through each character in the second string.
3. For every character, check if it exists inside the first string using .indexOf().
-If even one character is missing, return false.
-If the loop finishes without problems, return true.
