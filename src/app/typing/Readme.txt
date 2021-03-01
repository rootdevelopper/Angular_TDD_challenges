# Typing accuracy checker

The goal is to implement a typing checker

set up:

on  typing.component.ts

"randomText" should be set to a random text - feel free to use a library or implement your own.
"enteredText" is the input from the user

on typing.component.scss

contain css classes to help you on the challenge

Use cases:

if randomText is identical to enteredText

    randomText text should be highlighted in green
   the text "you win" should appear on the screen

if randomText is not identical to enteredText

highlight in red each non-matching character
highlight in green each matching character
a character is considered matching when the character and the position in the string match

examples:
if randomText is identical to enteredText
randomtext = 'abc';
enteredTex = 'abc';
on UI
abc
display:
You Win

if randomText is not identical to enteredText

randomtext = 'abc'
enteredTex = 'abd';
on UI
abd

randomtext = 'abc'
enteredTex = 'axc';
on UI
axc

// white space
randomtext = 'abc def'
enteredTex = 'abc  def';
on UI
abc def

extra points if you write the unit test!