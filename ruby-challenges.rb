# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

def even_or_odd(reposts1)
    if reposts1 % 2 == 0
        "#{reposts1} is even"
    else 
        "#{reposts1} is odd"
    end
end

p even_or_odd(7)
p even_or_odd(42)
p even_or_odd(221)

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Created a method called even_or_odd.
# Inserted the argument reposts1.
# Inside the method I used an if statement to determine if the number is even or odd.
# If the number is even it prints a string showing that the number is even. Otherwise, it prints a string showing that the number is odd.


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

def remove_vowels(beatles_album1)
    beatles_album1.delete('aeiouAEIOU')
end

p remove_vowels('Rubber Soul')
p remove_vowels('Sgt Pepper')
p remove_vowels('Abbey Road')

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
# Created a method called remove_vowels.
# Inserted the argument beatles_album1.
# Inside the method I used the .delete method and targeted the vowels, including vowels that were capitalized.
# The output deleted all vowels in the strings.

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.

def palindrome_test_case(str)
    if str.downcase == str.downcase.reverse
        "#{str} is a palindrome"
    else 
        "#{str} is not a palindrome"
    end
end

palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

p palindrome_test_case(palindrome_test_case1)
p palindrome_test_case(palindrome_test_case2)
p palindrome_test_case(palindrome_test_case3)

# Pseudo code:
# Created a method called palindrome_test_case.
# Inserted the argument str.
# Inside the method I used the .downcase and .reverse methods within the if else statement.
# The output gave me the expected result.