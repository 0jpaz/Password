# Password Final Project
The goal of this project is to write many functions which check and grade the viability of your potential passwords as well as functions which actually create random passwords.

## Secure pass file

### Checking password validity
Each function below checks a certain quality of a potential password that is entered as the input to the function.  The function will return true or false if it meets or fails the condition (if/else).  Most of the time you will need a for loop to run through the string from beginning to end to hunt for a right kind of character.  Your notes with the ASCII table will be incredibly useful to you.

Before you begin it would be a good idea to identify the character ranges and consider if it would be best to use an **and / or** for your conditional statements.

#### lengthCheck()
This function returns true if the length of the password is greater than or equal to 8.  Otherwise the function returns false.

#### upperCaseCheck()
This function checks if any of the characters in the password fall into the uppercase character range.  You will want to use a for loop for this.  If anything falls in the range then the function immediately returns true.  Or, in the unlikely case where it has found no uppercase characters, after the for loop is done checking, you should return false.

#### lowerCaseCheck()
This function checks if any of the characters in the password fall into the lowercase character range.  You will want to use a for loop for this.  If anything falls in the range then the function immediately returns true.  Or, in the unlikely case where it has found no lowercase characters, after the for loop is done checking, you should return false.

This is essentially the same as the uppercase function but it uses a different range of numbers.

#### numberCheck()
This is essentially the same as the either the uppercase or lowercase function.  There is a single range of number characters, return true or false accordingly.

#### specialCheck()
There are multiple ranges of special characters in the ASCII table.  DO NOT INCLUDE THE SPACE CHARACTER.  You could use a compound conditional statement to check all ranges at once or craft individual conditional statements to check each range inside of the for loop.  Make sure to cover all possibilities.  Return true or false accordingly.

#### allCheck()
Use all of the functions above and return a compound boolean, lots of **and / or** expressions, to return true if it passes all of the functions, or false if it misses just one.

### Grading passwords
These two functions provide additional feedback to the user on the quality of their password.  Think about it as a progress bar with a word and a color.  Green is good and red is bad: the usual.

#### grade()
All of these conditions should be **mutually exclusive**.
-  if the password is under a length of 8 ----> return "very bad"
-  if the password **does not contain** both uppercase and lowercase characters ----> return "bad"
-  if the password **does not contain** a number character ----> return "okay"
-  if the password **does not contain** a special character ----> return "good"
-  if the password **passes all tests** ----> return "great"
-  if the password **passes all tests and has a length >= 20** ---->return "super!"

## Random pass file
This file is in charge of creating random passwords of varying length and character kinds.
-  A **pinn** is a series of random numbers only
-  A **word** is a series of random uppercase and lowercase characters
-  A **pass** is a series of random letters and numbers
-  A **specialPass** includes letters, numbers, and special characters
-  A **superPass** is a specialPass which happens to default to a length of 20, so no need for an input.  Literally just return the previous function with a 20 as he input.

### The Process
Start with a blank string to fill with your letters.  Use a for loop to execute a random character one at a time.  Make sure the random number that you create always falls within the proper range.  That is, make sure to add the smallest number and the difference to get to the maximum number.  Rounding is important as character 54.3 does not exist, but 54 and 55 would.  Finally when the for loop is complete your secrete password is ready to finish.
